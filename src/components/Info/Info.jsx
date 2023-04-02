import React from "react";
import Contacts from "../Contacts";
import Experience from "../Experience";

import "./info.scss";

const Info = () => {
  return (
    <section className="info">
      <Contacts />
      <Experience />
    </section>
  );
};

export default Info;
