import React from "react";

// active prop will tell us on which section we are currently
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "about",
        "work",
        "skills",
        "SkillProgress",
        "testimonials",
        "contact",
      ].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
