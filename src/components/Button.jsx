import React from "react";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      className={className ? className : "button"}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
