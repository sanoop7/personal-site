import React from "react";
import "./aboutMe.css";
import pic from "../../assets/about.png";
import Techstack from "./techStack";
function AboutMe() {
  return (
    <div className="about_me" id="aboutMe">
      <div className="section_1">
        <span className="Myself">Myself & <span className="Myself_I">I</span></span>
        <span className="about">
          I’m a Front-End Developer located in India. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.<br />
          I fell in love with programming and I have at least learnt
              something, I think… <span className="Myself_I">¯\_(ツ)_/¯</span>
        </span>
        <div className="Professional_skill"> Professional <span className="Myself_I">Skillset </span></div>
        <Techstack />
      </div>
      <div className="section_2">
        <img src={pic} alt="pro-pic" />
      </div>
    </div>
  );
}

export default AboutMe;
