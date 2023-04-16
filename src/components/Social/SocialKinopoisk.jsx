import React from "react";
import { Link } from "react-router-dom";

import { SiKinopoisk } from "react-icons/si";

import "./social.scss";

const SocialKinopoisk = () => {
  return (
    <Link to="https://kinopoisk.ru/name/6439642" target="_blank" rel="noreferrer noopener">
      <SiKinopoisk className="social__img_m" />
    </Link>
  );
};

export default SocialKinopoisk;
