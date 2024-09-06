import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Lottie, { LottiePlayer } from "lottie-react";
import { dancing } from "../../constants";

const PaymentNotification = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="section-container">
        <div>
          <Lottie className="lottie-animation" animationData={dancing} />
        </div>
        <h3>Success!</h3>
        <p>Your table has been booked!</p>
        <Button onClick={() => navigate("/")}>Go back to homepage</Button>
      </div>
    </section>
  );
};

export default PaymentNotification;
