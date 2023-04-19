import React from "react";
import { motion, useTransform } from "framer-motion";

import Name from "../Name";
import ContactsSocial from "../ContactsSocial/ContactsSocial";
// import Contacts from "../Contacts";
// import Experience from "../Experience";
// import Name from "../Name";
// import Photo from "../Photo";

import "./actressmainblock.scss";

const ActressMainBlock = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="actressmainblock" style={{ marginTop: marginTop }}>
      <Name />
      {/* <Photo /> */}
      {/* <Contacts /> */}
      {/* <Experience /> */}
      <ContactsSocial />
    </motion.main>
  );
};

export default ActressMainBlock;
