import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./index";
import MultiStepBar from "./MultiStepBar";
import { useNavigate } from "react-router-dom";
import { calculateAmount } from "../../../helpers/calculation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    request: "",
  });

  const [amount, setAmount] = useState(0);
  const { user } = useKindeAuth();
  const navigate = useNavigate();

  const email = user?.email || "";
  const name = user?.given_name || "Guest";
  const phone = user?.phone || "No phone number";

  const publicKey = "pk_test_8c3a3c9c32185d65f4bf23e83ea47cd69b50e39a";

  const componentProps = {
    email,
    amount: amount * 100,
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
    setAmount(calculateAmount(5000, reservation.diners));
  };

  // const handleCalculateAmount = () => {
  // };

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
        <ToastContainer />
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
