import React from "react";
import { motion, useTransform } from "framer-motion";

import Contacts from "../components/Contacts";
import Name from "../components/Name";
// import Contacts from "../Contacts";
// import Experience from "../Experience";
// import Name from "../Name";
// import Photo from "../Photo";

import "./mainactress.scss";

const MainActress = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="mainactress" style={{ marginTop: marginTop }}>
      <Name />
      {/* <Photo /> */}
      {/* <Contacts /> */}
      {/* <Experience /> */}
      <Contacts />
    </motion.main>
  );
};

export default MainActress;
