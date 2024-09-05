import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Little Lemon</h3>

      <div>
        <img src="" alt="" />
      </div>
      <p>Thanks for your patronage!</p>
      <div className="icon-container">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
