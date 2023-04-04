import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./appcontainer.scss";

const Appcontainer = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 500];
  // const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div className="appcontainer">
      <Header offsetY={offsetY} scrollY={scrollY} />
      <Main offsetY={offsetY} scrollY={scrollY} />
      <Footer />
    </div>
  );
};

export default Appcontainer;
