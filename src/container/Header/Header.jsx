import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import emoji from "react-easy-emoji";
import { AppWrap } from "../../wrapper";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { illustration, greeting } from "../../portfolio";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="wave-emoji">{emoji("👋")}</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi all, I am </p>
              <h1 className="head-text ">Lalit</h1>
            </div>
          </div>

          <div className="tag-cmp  app__flex">
            <p className="p-text ">
              I wield the power of JavaScript, ReactJS, Node.js, React Native,
              and cutting-edge frontend/backend technologies. Bringing ideas to
              life, I create captivating web and mobile applications that leave
              a lasting impression and deliver seamless digital experiences.
            </p>
          </div>
          <div className="tag-cmp  app__flex">
            <p className="p-text ">
              Aspiring tech explorer, skilled architect, and problem solver,
              currently embarking on my pre-final year at Zakir Husain College
              of Engineering And Technology, Aligarh. With an insatiable
              curiosity for technology's intricacies,
            </p>
          </div>
          <div className="tag-cmp  app__flex">
            <p className="p-text ">
              {" "}
              A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
              <br />
              <span className="p-emoji">
                {emoji("💻 + 😃 + 🧠 + 💡   =🏆")}
              </span>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            ></img>
          )}
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.linux, images.react, images.node, images.git].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
// we are going into the AppWrap and passing in the entire header section as a component and passing in the idName
