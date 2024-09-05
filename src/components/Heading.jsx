import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="section-heading">
      <h1>{children}</h1>
    </div>
  );
};

export default Heading;
