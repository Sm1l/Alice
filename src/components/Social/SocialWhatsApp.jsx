import React from "react";
import { Link } from "react-router-dom";

import { BsWhatsapp } from "react-icons/bs";

import "./social.scss";

const SocialWhatsApp = () => {
  return (
    <Link className="social__link" to="https://wa.me/+79818005886" target="_blank" rel="noreferrer noopener">
      <BsWhatsapp className="social__img_m" />
    </Link>
  );
};

export { SocialWhatsApp };
