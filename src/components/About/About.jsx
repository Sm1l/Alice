import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./about.scss";

const About = () => {
  return (
    <section className="about ">
      <motion.div className="about__title-container">
        <h3 className="about__title title">Обо мне</h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="about__info ui-block">
        <p className="about__text">
          Привет! <br />
          Меня зовут Соловьёва Алиса и я являюсь преподавателем по технике речи, ораторскому мастерству и пластике.
        </p>
        <p className="about__text">
          Ты неуверен в себе? У тебя не получается четко выражать свои мысли? Ты боишься выступать на публике? Тебе
          сложно знакомиться с новыми людьми?
        </p>
        <p className="about__text">
          Мы вместе справимся со всеми этими проблемами! Возможно, тебя нужно только слегка подтолкнуть в правильном
          направлении! А может, твои страхи и зажимы связаны с какими-то жизненными ситуациями, произошедшими в далеком
          прошлом! В любом случае, мой богатый опыт преподавания, как у детишек с 6 лет, так и у взрослых состоявшихся
          людей, а также мои психологические знания, помогут нам вместе решить все беспокоящие тебя вопросы!
        </p>
        <p className="about__text">До скорой встречи!</p>
      </motion.div>
    </section>
  );
};

export default About;
