import React from "react";
import Education from "../Education";
import Job from "../Job";

import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <Job />
      <Education />
    </div>
  );
};

export default Experience;
