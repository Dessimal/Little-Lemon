import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Lottie, { LottiePlayer } from "lottie-react";
import { dancing } from "../../constants";

const PaymentNotification = () => {
  const navigate = useNavigate();
  return (
    <section className="payment-notificaiton-section">
      <div className="payment-notificaiton ">
        <div className="animation-container">
          <Lottie className="lottie-animation" animationData={dancing} />
        </div>
        <div className="content-wrapper">
          <h2>Success!</h2>
          <p>
            Your table has been booked! Please click the button below to return
            to Homepage
          </p>
        </div>
        <Button onClick={() => navigate("/")}>Okay, Cool!</Button>
      </div>
    </section>
  );
};

export default PaymentNotification;
