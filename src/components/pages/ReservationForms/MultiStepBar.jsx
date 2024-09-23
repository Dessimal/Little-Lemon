import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MultiStepBar = ({ currentStep, setCurrentStep }) => {
  const steps = ["Date Selection", "Summary", "Request", "Order Details"];

  const navigate = useNavigate();

  return (
    <div className="multistep-bar">
      <div className="steps-container flex-stretch cursor-pointer">
        <FaArrowLeft className="cursor-pointer" onClick={() => navigate("/")} />
        {steps.map((step, index) => {
          const stepIndex = index + 1;
          return (
            <div
              className={
                currentStep === stepIndex
                  ? "tab active-tab"
                  : "tab inactive-tab"
              }
              key={step}
              onClick={() => {
                setCurrentStep(stepIndex);
              }}>
              Step {stepIndex}
            </div>
          );
        })}
      </div>
      <div>
        {steps.map((step, index) => {
          const stepIndex = index + 1;
          return (
            <div
              className={
                currentStep === stepIndex ? "step-indicator" : "hidden"
              }
              key={step}>
              {currentStep === stepIndex ? step : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiStepBar;
