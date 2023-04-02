import React from "react";

import Contacts from "../Contacts";
import Experience from "../Experience";
import Name from "../Name";
import Photo from "../Photo";

import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <Name />
      <Photo />
      <Contacts />
      <Experience />
    </main>
  );
};

export default Main;
