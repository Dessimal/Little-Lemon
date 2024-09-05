import React from "react";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Button from "../../Button";
import Heading from "../../Heading";
import { FaAddressCard, FaRegistered, FaSignInAlt } from "react-icons/fa";

const Auth = () => {
  const { login, register } = useKindeAuth();
  return (
    <section className="auth-section">
      <div>
        <Heading>Please Sign In or Sign Up To Reserve a Table</Heading>
        <div
          className="auth-buttons-container
        ">
          <Button onClick={register} type="button">
            <span>Sign Up</span>
            <FaAddressCard className="icon" />
          </Button>
          <Button className="white-button" onClick={login} type="button">
            <span>Sign In</span>
            <FaSignInAlt className="icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
