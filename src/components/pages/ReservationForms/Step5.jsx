import React from "react";
import Button from "../../Button";
import { PaystackButton } from "react-paystack";

const Step5 = ({ componentProps }) => {
  return (
    <section>
      <div className="nav-buttons-container">
        <Button>back</Button>
        <PaystackButton className="button" {...componentProps} />
      </div>
    </section>
  );
};

export default Step5;
