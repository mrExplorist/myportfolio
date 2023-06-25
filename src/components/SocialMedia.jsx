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
        <a
          href="https://www.linkedin.com/in/pinglalit/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/Mr_Explorist"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/mrExplorist"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      {/* <div>
        <FaMedium />
      </div>
      <div>
        <FaDev />
      </div> */}
    </div>
  );
};

export default SocialMedia;
