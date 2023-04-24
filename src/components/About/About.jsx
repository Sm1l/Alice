import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";

import "./about.scss";

const About = () => {
  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { delay: custom * 0.3 } }),
  };
  return (
    <motion.section className="about " initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.div className="about__info ui-block" variants={textAnimation} custom={2}>
        <ul className="about__list">
          <li className="about__item">
            14+ лет стаж преподавания по ораторскому искусству, сценическому движению и пластике как у детей от 6 лет,
            так и у взрослых.
          </li>
          <li className="about__item">
            Преподаватель ораторского мастерства в одной из ведущих Российских школ ораторского искусства "Король
            Говорит".
          </li>
          <li className="about__item">
            Магистр в области психолого-педагогического образования, автор научной работы...
          </li>
          <li className="about__item">Актриса театра (театр НАТ) и кино.</li>
          <li className="about__item">Главный ...руководитель/режиссер проекта "....." МГППУ</li>
          <li className="about__item">Теле и радиоведущая.</li>
        </ul>
      </motion.div>
      <motion.div className="about__title-container" variants={textAnimation} custom={1}>
        <h3 className="about__title title">Обо мне</h3>
        <ArrowLeft />
      </motion.div>
    </motion.section>
  );
};

export default About;
