import React from "react";
import { useSelector } from "react-redux";

import "./speechwelcome.scss";
import { ArrowDown } from "../../base/Arrow/Arrow";

import image from "./img/Alice.webp";
import imageSepia from "./img/Alice_sepia.webp";

const SpeechWelcome = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="speechwelcome">
      <h1 className="speechwelcome__title title">Ораторское искусство и сценическое движение</h1>
      <div className="speechwelcome__image _ibg">
        <img src={theme === "light" ? `${image}` : `${imageSepia}`} alt="Фотография Соловьевой Алисы" />
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
