import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import "./speechwelcome.scss";
import { ArrowDown } from "../../base/Arrow/Arrow";

import image from "./img/Alice.webp";
import imageSepia from "./img/Alice_sepia.webp";

const SpeechWelcome = () => {
  const theme = useSelector((state) => state.theme.theme);

  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { delay: custom * 0.2 } }),
  };

  return (
    <motion.div className="speechwelcome" initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.h1 variants={textAnimation} custom={1} className="speechwelcome__title title">
        Ораторское искусство и сценическое движение
      </motion.h1>
      <motion.div variants={textAnimation} custom={2} className="speechwelcome__image _ibg">
        <img src={theme === "light" ? `${image}` : `${imageSepia}`} alt="Фотография Соловьевой Алисы" />
      </motion.div>
      <motion.div variants={textAnimation} custom={3} className="speechwelcome__text-container">
        <div className="speechwelcome__arrow">
          <ArrowDown />
        </div>
        <p className="speechwelcome__text">Я сопровождаю взрослых и детей в мир совершенства</p>
      </motion.div>
      <motion.h2 variants={textAnimation} custom={3} className="speechwelcome__name title">
        Алиса Соловьёва
      </motion.h2>
    </motion.div>
  );
};

export default SpeechWelcome;
