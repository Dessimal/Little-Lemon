import React from "react";
import Button from "./Button";
import { foodTwo } from "../constants";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="section-container">
        <div className="hero-content-wrapper">
          <div className="Hero-heading">
            <h1 className="hero-main-heading">Little Lemon</h1>
            <h3 className="hero-subheading">Chicago</h3>
          </div>
          <p className="intro">
            We are a family owned Mediterranean restaurant focused on serving
            traditional dished but with a modern twist.
          </p>
          <Button className="button" onClick={() => navigate("/reserve")}>
            <span>Reserve a Table</span>
            <FaLocationArrow className="icon" />
          </Button>
        </div>
        <div className="hero-image-container">
          <img src={foodTwo} alt="picture of food" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
