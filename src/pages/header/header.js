import React from "react";
import "./header.css";
import pic from "../../assets/profile.jpg";
import git from "../../assets/github.png";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import linkedin from "../../assets/linkedin.png";
import { Link } from "react-scroll";

function Header(props) {
  function OpenNewTab(params) {
    params === "git"
      ? window.open("https://github.com/sanoop7", "_blank")
      : window.open("https://www.linkedin.com/in/sanoop-m", "_blank");
  }
  return (
    <div className="header" id={!props.scroll&&'tsparticles'} >
      {!props.scroll ? (
        <><Tilt>
          <div className="details">
            <span className="name"><span className="hi_there">Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span></span><br />I'm SANOOP </span>
            <span className="developer">
            <Typewriter
              options={{
              strings: ["Front End Web Developer", "Engineer", "Quick Learner"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50}}/></span>
            <div
              className="contact_me"
              onClick={() => {
                props.modalOpen(true);
                props.setOverFlow("homeHO");
              }}
            >
              contact me!
            </div>
          </div></Tilt><Tilt>
          <div className="profile_max">
             <img className="pro_pic" alt="pro_pic" src={pic} />
          </div></Tilt>
        </>
      ) : (
        <div className="header_min">
          <div className="header_left_nav">
           <Link to="aboutMe" spy={true} smooth={true} offset={-80} duration={500} className="header_left_nav_item">&lt;Myself & I&gt;</Link>
           <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} className="header_left_nav_item">&lt;Projects&gt;</Link>
          </div>
          <div className="header_right_nav">
          <div className="social_cards_con">
            <div className="social_cards" onClick={() => OpenNewTab("git")}>
              <img className="social_cards_icon" alt="pro_pic" src={git} />
            </div>
            <div
              className="social_cards"
              onClick={() => OpenNewTab("linkedin")}
            >
              <img className="social_cards_icon" alt="pro_pic" src={linkedin} />
            </div>
          </div>
          <div className="profile_min">
            <img className="pro_pic" alt="pro_pic" src={pic} />
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
