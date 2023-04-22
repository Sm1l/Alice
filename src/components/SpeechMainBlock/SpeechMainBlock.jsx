import React from "react";
import { motion, useTransform } from "framer-motion";

import SpeechWelcome from "../SpeechWelcome";
import Hello from "../Hello";
import About from "../About";
import Education from "../Education";
import Work from "../Work";

import "./speechmainblock.scss";

const SpeechMainBlock = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="speechmainblock" style={{ marginTop: marginTop }}>
      <SpeechWelcome />
      <Hello />
      <About />
      <Education />
      <Work />
    </motion.main>
  );
};

export default SpeechMainBlock;
