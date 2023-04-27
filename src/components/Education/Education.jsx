import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./education.scss";

const Education = () => {
  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { duration: 0.8, delay: custom * 0.3 } }),
  };
  return (
    <motion.section
      className="education "
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.div className="education__title-container" variants={textAnimation} custom={1}>
        <h3 className="education__title title">Моё образование</h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="education__info ui-block" variants={textAnimation} custom={2}>
        <ul className="education__list">
          <li className="education__item">
            В 2013 г. – окончила <span>с отличием</span> факультет Музыкального искусства Эстрады СПБГУКИ курс доцента
            кафедры мастерства актёра Николаева Александра Николаевича и заслуженного артиста России Шагина Владимира
            Павловича (г. Санкт-Петербург).
          </li>
          <li className="education__item">
            В 2020 г. - окончила курсы повышения квалификации для специалистов, имеющих высшее образование, по
            специализации «Практика Сценической речи» Федеральное государственное бюджетное образовательное учреждение
            высшего образования «Российский институт театрального искусства – ГИТИС» (г. Москва).
          </li>
          <li className="education__item">
            В 2022 г. – окончила <span>с отличием</span> факультет Психолого-педагогического образования Федеральное
            государственное бюджетное образовательное учреждение высшего образования "Московский Государственный
            психолого-педагогический университет" (г. Москва).
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Education;
