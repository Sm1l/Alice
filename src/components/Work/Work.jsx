import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./work.scss";

const Work = () => {
  return (
    <section className="work ">
      <motion.div className="work__title-container">
        <h3 className="work__title title">
          Моя <br /> работа
        </h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="work__info ui-block">
        <p className="work__text">
          14+ лет стаж преподавания по ораторскому искусству, сценическому движению и пластике как у детей от 6 лет, так
          и у взрослых.
        </p>
        <p className="work__text">
          Преподаватель ораторского мастерства в одной из ведущих Российских школ ораторского искусства "Король
          Говорит".
        </p>
        <p className="work__text">Магистр в области психолого-педагогического образования, автор научной работы...</p>
        <p className="work__text">Главный ...руководитель/режиссер проекта "....." МГППУ</p>
        <p className="work__text">Актриса театра (театр НАТ) и кино.</p>
        <p className="work__text">Теле и радиоведущая.</p>
      </motion.div>
    </section>
  );
};

export default Work;
