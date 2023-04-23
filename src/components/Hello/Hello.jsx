import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./hello.scss";

const Hello = () => {
  return (
    <section className="hello">
      <motion.div className="hello__title-container">
        <h3 className="hello__title title">Привет</h3>
        <ArrowRight />
      </motion.div>
      <motion.div className="hello__info ui-block">
        <p className="hello__text">
          Привет! <br />
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
    </section>
  );
};

export default Hello;
