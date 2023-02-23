import React from "react";
import { BsTwitter } from "react-icons/bs";
import {
  FaGithub,
  FaMedium,
  FaDev,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaStackOverflow />
      </div>

      <div>
        <FaGithub />
      </div>
      <div>
        <FaMedium />
      </div>
      <div>
        <FaDev />
      </div>
    </div>
  );
};

export default SocialMedia;
