import React from "react";
import "./aboutMe.css";
import pic from "../../assets/about.png";
function AboutMe() {
  return (
    <div className="about_me">
      <div className="section_1">
        <span className="Myself_I">Myself & I</span>
        <span className="about">
          I’m a Front-End Developer located in India. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.
        </span>
      </div>
      <div className="section_2">
        <img src={pic} alt="pro-pic" />
      </div>
    </div>
  );
}

export default AboutMe;
