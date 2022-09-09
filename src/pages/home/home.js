import React, { useState } from "react";
import "./home.css";
import Header from "../header/header";
import AboutMe from "../aboutMe/aboutMe";
import ContactModal from "../../components/contactMeModal/ContactModal";
function HomePage() {
  const [scroll, setScroll] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [overFlow, setOverFlow] = useState("home");

  const [headerClass, setHeaderClass] = useState("header_conr_max");
  const [mainSecClass, setMainSecClass] = useState("main_sec");
  const change_onScroll = () => {
    const scroll_value = document.documentElement.scrollTop;
    if (scroll_value > 10) {
      setScroll(true);
      setHeaderClass("header_conr_min");
      setMainSecClass("main_sec_type2");
    } else {
      setScroll(false);
      setHeaderClass("header_conr_max");
      setMainSecClass("main_sec");
    }
  };
  window.addEventListener("scroll", change_onScroll);

  return (
    <>
      <div className={overFlow}>
        <div className={headerClass}>
          <Header
            scroll={scroll}
            modalOpen={setContactModalOpen}
            setOverFlow={setOverFlow}
          />
        </div>
        <div className={mainSecClass}>
          <AboutMe />
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
