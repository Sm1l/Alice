import React from "react";
import { motion } from "framer-motion";

import "./actresswelcome.scss";

const ActressWelcome = () => {
  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { duration: 0.8, delay: custom * 0.2 } }),
  };

  return (
    <motion.section
      className="actresswelcome"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.h2 className="actresswelcome__title title" variants={textAnimation} custom={1}>
        Театр и кино
      </motion.h2>
      <motion.p className="actresswelcome__text" variants={textAnimation} custom={2}>
        Page under construction
      </motion.p>
    </motion.section>
  );
};

export default ActressWelcome;
