import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/image/theme_pattern.svg";
import Mywork_Data from "../../assets/js/mywork_data";
import arrow_icon from "../../assets/image/arrow.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>

      <div className="mywork-container">
        {Mywork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Image" />
      </div>
    </div>
  );
};

export default MyWork;
