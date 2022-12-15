/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header/header";
import AboutMe from "../aboutMe/aboutMe";
import ContactModal from "../../components/contactMeModal/ContactModal";
import Projects from "../projects/projects";
function HomePage() {
  const [scroll, setScroll] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [overFlow, setOverFlow] = useState("home");
  const change_onScroll = () => {
    const scroll_value = document.documentElement.scrollTop;
    if (scroll_value > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const change_onScroll_mob = () => {
    const scroll_value = document.documentElement.scrollTop;
    console.log(scroll, 'scroll_value_mob');
      if (scroll_value > 99) {
        setScroll(true);
      }
     else if (scroll_value < 28) {
        setScroll(false);
      }
  };
  
  useEffect(() => {
    if (window.innerWidth > 390) {
          window.addEventListener("scroll", change_onScroll);
        } else {
          window.addEventListener("scroll", change_onScroll_mob);
        }

  }, [])
  

  return (
    <>
      <div className={overFlow}>
        <div className={`header_conr_max ${scroll&&'header_conr_min'}`}>
          <Header
            scroll={scroll}
            modalOpen={setContactModalOpen}
            setOverFlow={setOverFlow}
          />
        </div>
        <div className={`main_sec ${scroll&&'main_sec_type2'}`}>
          <AboutMe />
          <Projects />
          <AboutMe />

        </div>
      </div>
      {contactModalOpen && (
        <ContactModal
          modalOpen={setContactModalOpen}
          setOverFlow={setOverFlow}
        />
      )}
    </>
  );
}

export default HomePage;
