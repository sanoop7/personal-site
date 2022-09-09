import React, { useState } from "react";
import closeBtn from "../../assets/close_btn.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import mailSend from "../../assets/mail-send.png";
import location from "../../assets/location.png";
import emailjs from "emailjs-com";
import "./ContactModal.css";

export default function ContactModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formData = {
    name: name,
    email: email,
    message: message,
  };
  function SendEmail(e) {
    emailjs
      .send(
        "service_tpwgud7",
        "template_s96rbgp",
        formData,
        "jP3bM_NnPvMfeDfxP"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(e);
  }

  return (
    <div className="contact_modal_con">
      <div className="contact_modal">
        <div className="contact_modal_header">
          <span className="contact_modal_header_tittle">Get in touch</span>
          <img
            className="close_btn"
            alt="pro_pic"
            src={closeBtn}
            onClick={() => {
              props.modalOpen(false);
              props.setOverFlow("home");
            }}
          />
        </div>
        <div className="contact_modal_body">
          <div className="contact_modal_body_sec1">
            <div className="contact_cards_con">
              <div className="contact_cards">
                <div className="contact_cards_icon_con">
                  <img
                    className="contact_cards_icon"
                    alt="pro_pic"
                    src={phone}
                  />
                </div>
                <div className="contact_cards_content">+91 8848207264</div>
              </div>
              <div className="contact_cards">
                <div className="contact_cards_icon_con">
                  <img
                    className="contact_cards_icon"
                    alt="pro_pic"
                    src={mail}
                  />
                </div>
                <div className="contact_cards_content">
                  sanooprahman7mk@gmail.com
                </div>
              </div>
              <div className="contact_cards">
                <div className="contact_cards_icon_con">
                  <img
                    className="contact_cards_icon"
                    alt="pro_pic"
                    src={location}
                  />
                </div>
                <div className="contact_cards_content">Kerala, India</div>
              </div>
            </div>
          </div>
          <div className="contact_modal_body_sec2">
            <form onSubmit={SendEmail}>
              <div className="form_group">
                <label htmlFor="name">
                  Your name
                  <input
                    className="form_input"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className="form_group">
                <label htmlFor="email">
                  Your email
                  <input
                    className="form_input"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="form_group">
                <label htmlFor="message">
                  message
                  <textarea
                    className="form_text_area"
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit" className="form_btn">
                Send <img className="send_icon" alt="pro_pic" src={mailSend} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
