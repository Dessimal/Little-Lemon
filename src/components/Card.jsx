import React from "react";
import Button from "./Button";

const Card = ({ className, picture, title, price, text }) => {
  return (
    <article className={`card ${className}`}>
      <div className="card-image-container">
        <img src={picture} alt={title} />
      </div>
      <div className="card-content-wrapper">
        <div className="card-text">
          <div className="card-heading">
            <span>{title}</span>
            <span>{price}</span>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
        <Button>Order a Delivery</Button>
      </div>
    </article>
  );
};

export default Card;
