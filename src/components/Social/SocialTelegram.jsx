import React from "react";
import { Link } from "react-router-dom";

import { BsTelegram } from "react-icons/bs";

import "./social.scss";

const SocialTelegram = () => {
  return (
    <Link className="social__link" to="https://t.me/+79818005886" target="_blank" rel="noreferrer noopener">
      <BsTelegram className="social__img_m" />
    </Link>
  );
};

export { SocialTelegram };
