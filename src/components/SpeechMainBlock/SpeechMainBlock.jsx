import React from "react";
import { motion, useTransform } from "framer-motion";

import SpeechWelcome from "../SpeechWelcome";
import About from "../About";

import "./speechmainblock.scss";

const SpeechMainBlock = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="speechmainblock" style={{ marginTop: marginTop }}>
      <SpeechWelcome />
      <About />
    </motion.main>
  );
};

export default SpeechMainBlock;
