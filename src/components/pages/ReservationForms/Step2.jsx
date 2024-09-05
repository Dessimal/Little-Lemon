import React from "react";
import Heading from "../../Heading";
import Button from "../../Button";
import { FaArrowRight, FaEdit } from "react-icons/fa";

const Step2 = ({ reservation, handleEdit, handleNext }) => {
  return (
    <section className="section-container">
      <div>
        <Heading className="section-heading">Review Your Reservation</Heading>
        <h3>Please review your reservation details:</h3>
      </div>

      <div className="reservation-summary-container">
        <p className="reservation-paragraph">
          <strong>Date:</strong> {reservation.date}
        </p>
        <p className="reservation-paragraph">
          <strong>Time</strong>: {reservation.time}
        </p>
        <p className="reservation-paragraph">
          <strong>Number of Diners:</strong> {reservation.diners}
        </p>
        <p className="reservation-paragraph">
          <strong>Occasion:</strong> {reservation.occasion}
        </p>
      </div>
      <div className="nav-buttons-container">
        <Button onClick={handleEdit}>
          <FaEdit className="icon-left" />
          <span>Edit</span>
        </Button>
        <Button onClick={handleNext}>
          <span>Next</span>
          <FaArrowRight className="icon" />
        </Button>
      </div>
    </section>
  );
};

export default Step2;
