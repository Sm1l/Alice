import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./education.scss";

const Education = () => {
  return (
    <section className="education ">
      <motion.div className="education__title-container">
        <h3 className="education__title title">
          Моё <br /> образование
        </h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="education__info ui-block">
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
      {/* <motion.div className="education__title-container">
        <h3 className="education__title title">
          Моё <br /> образование
        </h3>
        <ArrowLeft />
      </motion.div> */}
    </section>
  );
};

export default Education;
