import React from "react";
import Heading from "../../Heading";
import { Formik, Field, Form } from "formik";
import Button from "../../Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Step3 = ({ handlePrevious, handleNext }) => {
  return (
    <section className="section-container">
      <Heading>Special Requests</Heading>
      <h2>
        Please fill the form below to add any special requests you might have.
      </h2>
      <Formik
        initialValues={{ request: "" }}
        onSubmit={(values) => handleNext(values)}>
        <Form className="form-inputs-container">
          <div>
            <label htmlFor="request">Special Requests:</label>
            <Field
              as="textarea"
              className="form-field"
              id="request"
              name="request"
            />
          </div>
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
        </Form>
      </Formik>
    </section>
  );
};

export default Step3;
