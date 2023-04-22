import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";

import "./about.scss";

const About = () => {
  return (
    <section className="about ">
      <motion.div className="about__info ui-block">
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
      <motion.div className="about__title-container">
        <h3 className="about__title title">Обо мне</h3>
        <ArrowLeft />
      </motion.div>
    </section>
  );
};

export default About;
