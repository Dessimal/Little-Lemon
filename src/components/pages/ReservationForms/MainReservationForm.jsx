import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./index";
import MultiStepBar from "./MultiStepBar";
import { useNavigate } from "react-router-dom";
import { calculateAmount } from "../../../helpers/calculation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Step5 from "./Step5";
import { PaystackButton } from "react-paystack";

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

  const publicKey = process.env.PAYSTACK_PUBLIC_KEY;

    const componentProps = {
      email,
      amount,
      metadata: {
        user.firstname,
      },
      publicKey,
      text: "Buy Now",
      onSuccess: ({ reference }) => {
        alert(
          `Your purchase was successful! Transaction reference: ${reference}`
        );
      },
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    };


  const handleProceedToPayment = async () => {
    try {
      const response = await fetch("/api/paystack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          amount: amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initialize payment");
      }

      const data = await response.json();
      console.log("Paystack Response Data:", data); // Log response data
      window.location.href = data.authorizationUrl;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const handleDinersCharge = () => {
    setAmount(calculateAmount(reservation.diners));
  };

  const handleNext = (values) => {
    setReservation((prev) => ({ ...prev, ...values }));
    if (currentStep < 5) {
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
            handleNext={handleNext}
          />
        );
      case 5:
        return (
          <Step5
            reservation={reservation}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
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
