import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useState, useEffect } from 'react';
import "./Hero.css";
import profile_img from "../../assets/image/profile.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Image" className="profile-img" />
      <h1>
        <span>I’m Deepak Sharma,</span> Frontend developer based in India.
      </h1>
      <p>
        I am a frontend developer from Jaipur, India with 2 years of experience
        in multiple companies like Muskowl, Start Design and InfoTech.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
