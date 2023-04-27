import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./hello.scss";

const Hello = () => {
  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { duration: 0.8, delay: custom * 0.3 } }),
  };
  return (
    <motion.section className="hello" initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.div className="hello__title-container" variants={textAnimation} custom={1}>
        <h3 className="hello__title title">Привет</h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="hello__info ui-block" variants={textAnimation} custom={2}>
        <p className="hello__text">
          Меня зовут Соловьёва Алиса и я являюсь преподавателем по технике речи, ораторскому мастерству и пластике.
        </p>
        <p className="hello__text">
          Ты неуверен в себе? У тебя не получается четко выражать свои мысли? Ты боишься выступать на публике? Тебе
          сложно знакомиться с новыми людьми?
        </p>
        <p className="hello__text">
          Мы вместе справимся со всеми этими проблемами! Возможно, тебя нужно только слегка подтолкнуть в правильном
          направлении! А может, твои страхи и зажимы связаны с какими-то жизненными ситуациями, произошедшими в далеком
          прошлом! В любом случае, мой богатый опыт преподавания, как у детишек с 6 лет, так и у взрослых состоявшихся
          людей, а также мои психологические знания, помогут нам вместе решить все беспокоящие тебя вопросы!
        </p>
        <p className="hello__text">До скорой встречи!</p>
      </motion.div>
    </motion.section>
  );
};

export default Hello;
