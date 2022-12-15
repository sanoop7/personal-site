import React from "react";
import "./header.css";
import pic from "../../assets/profile.jpg";
import git from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Header(props) {
  function OpenNewTab(params) {
    params === "git"
      ? window.open("https://github.com/sanoop7", "_blank")
      : window.open("https://www.linkedin.com/in/sanoop-m", "_blank");
  }
  return (
    <div className="header">
      {!props.scroll ? (
        <>
          <div className="details">
            <span className="name">Hi, I'm SANOOP </span>
            <span className="developer">web developer</span>
            <div
              className="contact_me"
              onClick={() => {
                props.modalOpen(true);
                props.setOverFlow("homeHO");
              }}
            >
              contact me!
            </div>
          </div>
          <div className="profile_max">
            <img className="pro_pic" alt="pro_pic" src={pic} />
          </div>
        </>
      ) : (
        <div className="header_min">
          <div className="header_left_nav">
           <div className="header_left_nav_item">&lt;Myself & I&gt;</div>
           <div className="header_left_nav_item">&lt;Projects&gt;</div>
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
