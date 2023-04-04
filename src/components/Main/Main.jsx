import React from "react";
import { motion, useTransform } from "framer-motion";

import Contacts from "../Contacts";
import Experience from "../Experience";
import Name from "../Name";
import Photo from "../Photo";

import "./main.scss";

const Main = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="main" style={{ marginTop: marginTop }}>
      <Name />
      <Photo />
      <Contacts />
      <Experience />
    </motion.main>
  );
};

export default Main;
