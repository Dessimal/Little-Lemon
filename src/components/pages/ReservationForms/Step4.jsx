import React from "react";
import Heading from "../../Heading";
import Button from "../../Button";
import { FaArrowLeft } from "react-icons/fa";
import { calculateAmount } from "../../../helpers/calculation";
import { PaystackButton } from "react-paystack";

const Step4 = ({
  amount,
  reservation,
  handlePrevious,
  handleNext,
  componentProps,
}) => {
  const amountToPay = calculateAmount(amount, reservation.diners);

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

        <PaystackButton className="button" {...componentProps} />
      </div>
    </section>
  );
};

export default Step4;
