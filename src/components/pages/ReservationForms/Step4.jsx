import React from "react";
import { calculateAmount } from "../../../helpers/calculation";
import Heading from "../../Heading";
import Button from "../../Button";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";

const Step4 = ({ reservation, handleProceedToPayment }) => {
  return (
    <section>
      <Heading>Your Payment Details</Heading>

      <p>
        <strong>Number of diners selected:</strong>
        {reservation.diners}
      </p>
      <p>
        <strong>Amount per diner:</strong>N5000
      </p>
      <p>
        <strong>Amount to pay:</strong>
        {calculateAmount(reservation.diners)}
      </p>

      <div className="form-buttons-container">
        <Button>
          <FaArrowLeft className="icon-left" />
          <span>Go Back</span>
        </Button>
        <Button onClick={handleProceedToPayment}>
          <span>Proceed with payment</span>
          <FaLocationArrow className="icon" />
        </Button>
      </div>
    </section>
  );
};

export default Step4;
