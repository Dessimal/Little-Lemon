import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const PaymentNotification = () => {
  const navigate = useNavigate();
  return (
    <section className="section-container">
      <div>
        <h1>Success!</h1>
        <p>Your table has been booked!</p>
        <Button onClick={() => navigate("/")}>Go back to homepage</Button>
      </div>
    </section>
  );
};

export default PaymentNotification;
