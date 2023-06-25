import React, { useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emoji from "react-easy-emoji";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Destructuring form data
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    //? Using client to upload form data FROM THE application on sanity CMS using client.create

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text sp-text">Reach out to me!</h2>
      <div className="midbrdr_btm"></div>
      <p
        className="subtitle"
        style={{
          textAlign: "center",
          font: "GTWalsheimPro",
        }}
      >
        DISCUSS A PROJECT OR JUST WANT TO SAY HI{" "}
        <span className="p-emoji" style={{ fontSize: "28px" }}>
          {emoji("💭")}
        </span>
        ? MY INBOX IS OPEN FOR ALL
      </p>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:lksharma742k@gmail.com" className="p-text">
            lksharma742k@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (123) 456-789" className="p-text">
            +91 8433462121
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.resume1} alt="resume1" />
          <a href="url" className="p-text">
            SEE MY RESUME
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you! <span className="p-emoji">{emoji("😃")}</span> for
            getting in touch!<span className="p-emoji">{emoji("🙌")} </span>
          </h3>
        </div>
      )}

      <p
        className="sp-text "
        style={{ textAlign: "center", marginTop: "50px", fontSize: "16px" }}
      >
        Made with ❤ by Lalit Sharma
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
