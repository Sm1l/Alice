import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./appcontainer.scss";

const Appcontainer = () => {
  return (
    <div className="appcontainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Appcontainer;
