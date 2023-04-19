import React from "react";
import { motion } from "framer-motion";
import arrow from "./img/ArrowRoght.svg";

import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <motion.div className="about__title-container">
        <h3 className="about__title title">Обо мне</h3>
        <button className="about__button">
          <img src={arrow} alt="Стрелка" />
        </button>
      </motion.div>
      <motion.div className="about__info">
        <p className="about__text">
          14+ лет стаж преподавания по актёрскому мастерству, сценическому движению, ритмике и пластике как у детей от 6
          лет, так и у взрослых.
        </p>
        <p className="about__text">
          Преподаватель Актерского Мастерства в одной из ведущих школ ораторского искусства "Король Говорит".
        </p>
        <p className="about__text">Магистр в области психолого-педагогического образования, автор научной работы.</p>
        <p className="about__text">Главный ...руководитель проекта "....." МГППУ</p>
        <p className="about__text">Актриса театра (театр НАТ) и кино.</p>
      </motion.div>
    </section>
  );
};

export default About;
