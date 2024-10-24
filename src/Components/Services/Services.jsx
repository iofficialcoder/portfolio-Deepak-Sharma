import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/image/theme_pattern.svg";
import Services_Data from "../../assets/js/services_data";
import arrow from "../../assets/image/arrow.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="Arrow Image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
