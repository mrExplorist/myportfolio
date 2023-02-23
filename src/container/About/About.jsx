import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
// Instead of this boring static data we will fetch our real dynamic data from sanity-backend to use that we need to just use useState field
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a Good Web Developer",
//     imageUrl: images.about01,
//   },
//   {
//     title: "MERN STACK",
//     description: "I am a Good Web Developer",
//     imageUrl: images.about02,
//   },
//   {
//     title: "Front-End Development",
//     description: "I am a Good Web Developer",
//     imageUrl: images.about03,
//   },
//   {
//     title: "Back-End Development",
//     description: "I am a Good Web Developer",
//     imageUrl: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]); // useState set to empty array
  useEffect(() => {
    // <--------- Query for fetching our about section

    const query = '*[_type == "abouts" ]';

    // Now we have the query we need to import Client at the Top

    client
      .fetch(query)
      .then((data) => setAbouts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
// Wrapping our component with MotionWrap and AppWrap
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
