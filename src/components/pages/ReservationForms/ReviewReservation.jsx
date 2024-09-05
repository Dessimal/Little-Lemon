import React from "react";
import Heading from "../../Heading";

const ReviewReservation = ({ date, time, diners, occasion }) => {
  return (
    <div>
      <Heading>Review Your Reservation</Heading>
      <h3>Please review your reservation details:</h3>

      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Diners: {diners}</p>
      <p>Occasion: {occasion}</p>
    </div>
  );
};

export default ReviewReservation;
