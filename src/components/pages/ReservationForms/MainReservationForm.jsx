import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./index";
import Button from "../../Button";
import MultiStepBar from "./MultiStepBar";
import ReviewReservation from "./ReviewReservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  //Track the current step

  const totalSteps = 4; //Total number of steps
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEdit = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    console.log(currentStep);
  };

  const handleProceed = () => {
    navigate("/payment");
  };

  //Handle form input changes
  const handleChange = (values) => {
    setReservation(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Your reservation details:", reservation);
  };

  const handleNext = (values) => {
    currentStep < totalSteps ? setCurrentStep(currentStep + 1) : null;
    setReservation(values);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    console.log(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 reservation={reservation} handleNext={handleNext} />;
      case 2:
        return <Step2 reservation={reservation} handleNext={handleNext} />;
      case 3:
        return (
          <Step3
            reservation={reservation}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        );
      case 4:
        return <Step4 reservation={reservation} handleNext={handleNext} />;
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
