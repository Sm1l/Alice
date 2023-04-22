import React from "react";

import "./speechwelcome.scss";

import image from "./img/IMG_0209 1.avif";
import { ArrowDown } from "../../base/Arrow/Arrow";
const SpeechWelcome = () => {
  return (
    <div className="speechwelcome">
      <h1 className="speechwelcome__title title">Ораторское искусство и сценическое движение</h1>
      <div className="speechwelcome__image _ibg">
        <img src={image} alt="Фотография Соловьевой Алисы" />
      </div>
      <div className="speechwelcome__text-container">
        <div className="speechwelcome__arrow">
          <ArrowDown />
        </div>
        <p className="speechwelcome__text">Я сопровождаю взрослых и детей в мир совершенства</p>
      </div>
      <h2 className="speechwelcome__name title">Алиса Соловьёва</h2>
    </div>
  );
};

export default SpeechWelcome;
