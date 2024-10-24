import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Deepak Sharma" />
          <p>
            I am a frontend developer from Jaipur, India with 2 years of
            experience in multiple companies like Muskowl, Start Design and
            InfoTech.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i className="fa-regular fa-user"></i>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Deepak Sharma. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
