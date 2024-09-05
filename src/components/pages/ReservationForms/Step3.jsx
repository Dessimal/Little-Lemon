import React from "react";
import Heading from "../../Heading";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../Button";

const Step3 = ({ handlePrevious, handleNext }) => {
  return (
    <section className="section-container">
      <Heading>Special Requests</Heading>
      <h2>
        Please fill the form below to add any special requests you might have.
      </h2>
      <form className="form-inputs-container">
        <textarea
          className="form-field"
          name=""
          id=""
          placeholder="Add a special request(optional)"></textarea>
        <div className="nav-buttons-container">
          <Button onClick={handlePrevious}>
            <FaArrowLeft className="icon-left" />
            <span>Back</span>
          </Button>
          <Button onClick={handleNext}>
            <span>Next</span>
            <FaArrowRight className="icon" />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Step3;
