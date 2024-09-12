import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./index";
import MultiStepBar from "./MultiStepBar";
import { useNavigate } from "react-router-dom";
import { calculateAmount } from "../../../helpers/calculation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast, { Toaster } from "react-hot-toast";

const MainReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    request: "",
  });

  const [amount, setAmount] = useState(500000);
  const { user } = useKindeAuth();
  const navigate = useNavigate();

  const email = user?.email || "";
  const name = user?.given_name || "Guest";
  const phone = user?.phone || "No phone number";

  const publicKey = "pk_test_8c3a3c9c32185d65f4bf23e83ea47cd69b50e39a";

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Proceed with Payment",
    onSuccess: ({ reference }) => {
      // alert(
      //   `Your purchase was successful! Transaction reference: ${reference}`
      // );
      toast(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      navigate("/confirmation");
    },
    onClose: () => alert("Sure you want to cancel this transaction?"),
  };

  // const handleDinersCharge = () => {
  //   setAmount(calculateAmount(reservation.diners) * 100); // Convert amount to kobo
  // };

  const handleNext = (values) => {
    setReservation((prev) => ({ ...prev, ...values }));
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCalculateAmount = (amount) => {
    setAmount(calculateAmount(amount, reservation.diners));
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
            handleCalculateAmount={handleCalculateAmount}
            // handleNext={(values) => handleNext({ request: values.request })}
            handleNext={handleNext}
          />
        );
      case 4:
        return (
          <Step4
            reservation={reservation}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            amount={amount}
            componentProps={componentProps}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="section">
      <div>
        <Toaster />
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
