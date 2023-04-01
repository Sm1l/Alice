import React from "react";
import Name from "../Name";
import Photo from "../Photo";

import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <Name />
      <Photo />
    </section>
  );
};

export default About;
