import React from "react";
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_bottom">
          <div className="footer_left">
            <h2>Michael Adetayo</h2>
            <div className="socials">
              <FaFacebook className="social_icon" />
              <FaInstagram className="social_icon" />
              <BsLinkedin className="social_icon" />
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Me</li>
              <li>Hire Me</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copy"> 2025 Michael Adetayo</p>
      </div>
    </div>
  );
};

export default Footer;
