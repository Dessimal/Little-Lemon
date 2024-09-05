import React from "react";
import Heading from "../../Heading";
import Button from "../../Button";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { calculateAmount } from "../../../helpers/calculation";
import { useNavigate } from "react-router-dom";

const Step4 = ({ reservation, handlePrevious, handleProceedToPayment }) => {
  const amountToPay = calculateAmount(reservation.diners);

  const navigate = useNavigate();

  return (
    <section className="section-container">
      <Heading>Your Payment Details</Heading>

      <p>
        <strong>Number of diners selected:</strong> {reservation.diners}
      </p>
      <p>
        <strong>Amount per diner:</strong> N5000
      </p>
      <p>
        <strong>Amount to pay:</strong> N{amountToPay}
      </p>

      <div className="nav-buttons-container">
        <Button onClick={handlePrevious}>
          <FaArrowLeft className="icon-left" />
          <span>Go Back</span>
        </Button>
        <Button onClick={handleProceedToPayment}>
          <span>Proceed with payment</span>
          <FaLocationArrow className="icon" />
        </Button>
        <Button onClick={() => navigate("/confirmation")}>
          <span>Proceed with payment</span>
          <FaLocationArrow className="icon" />
        </Button>
      </div>
    </section>
  );
};

export default Step4;
