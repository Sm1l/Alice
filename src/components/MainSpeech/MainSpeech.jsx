import React from "react";
import { motion, useTransform } from "framer-motion";

import ContactsSocial from "../ContactsSocial/ContactsSocial";
import Experience from "../Experience";
import Name from "../Name";
import Photo from "../Photo";

import "./mainspeech.scss";
import ContactsAdress from "../ContactsAdress/ContactsAdress";

const MainSpeech = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="mainspeech" style={{ marginTop: marginTop }}>
      <Name />
      <Photo />
      <ContactsAdress />
      <ContactsSocial />
      <Experience />
    </motion.main>
  );
};

export default MainSpeech;
