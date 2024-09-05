import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./index";
import MultiStepBar from "./MultiStepBar";
import { useNavigate } from "react-router-dom";
import { calculateAmount } from "../../../helpers/calculation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const MainReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    request: "",
  });
  const [amount, setAmount] = useState(5000);
  const { user } = useKindeAuth();
  const navigate = useNavigate();

  const handleProceedToPayment = async () => {
    try {
      const response = await apiService.initializePayment({
        email: user.email,
        amount,
      });
      window.location.href = response.data.authorizationUrl;
    } catch (error) {
      console.error("Error initiating payment;", error);
    }
  };

  const handleDinersCharge = () => {
    setAmount(calculateAmount(reservation.diners));
  };

  const handleNext = (values) => {
    setReservation((prev) => ({ ...prev, ...values }));
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleProceedToPayment();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 handleNext={handleNext} />;
      case 2:
        return (
          <Step2
            reservation={reservation}
            handleEdit={() => setCurrentStep(1)}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <Step3
            handlePrevious={handlePrevious}
            handleNext={(values) => handleNext({ request: values.request })}
          />
        );
      case 4:
        return (
          <Step4
            reservation={reservation}
            handlePrevious={handlePrevious}
            handleProceedToPayment={handleProceedToPayment}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="section">
      <div>
        <MultiStepBar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        {renderStep()}
      </div>
    </section>
  );
};

export default MainReservationForm;
