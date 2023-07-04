import React from "react";

import { SectionComponent } from "../SectionComponent";

const Hello = () => {
  return (
    <SectionComponent title="Привет" side="right">
      <p className="sectioncomponent__text">
        Меня зовут Соловьёва Алиса и я являюсь преподавателем по технике речи, ораторскому мастерству и пластике.
      </p>
      <p className="sectioncomponent__text">
        Ты неуверен в себе? У тебя не получается четко выражать свои мысли? Ты боишься выступать на публике? Тебе сложно
        знакомиться с новыми людьми?
      </p>
      <p className="sectioncomponent__text">
        Мы вместе справимся со всеми этими проблемами! Возможно, тебя нужно только слегка подтолкнуть в правильном
        направлении! А может, твои страхи и зажимы связаны с какими-то жизненными ситуациями, произошедшими в далеком
        прошлом! В любом случае, мой богатый опыт преподавания, как у детишек с 6 лет, так и у взрослых состоявшихся
        людей, а также мои психологические знания, помогут нам вместе решить все беспокоящие тебя вопросы!
      </p>
      <p className="sectioncomponent__text">До скорой встречи!</p>
    </SectionComponent>
  );
};

export { Hello };
