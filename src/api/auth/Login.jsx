import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Login = () => {
  const { login, register } = useKindeAuth();

  return (
    <section>
      <button onClick={register} type="button">
        Register
      </button>
      <button onClick={login} type="button">
        Log In
      </button>
    </section>
  );
};

export default Login;
