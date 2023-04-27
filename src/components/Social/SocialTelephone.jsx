import React from "react";
import { Link } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";

import "./social.scss";

const SocialTelephone = () => {
  return (
    <Link className="social__link" to="tel:+79818005886">
      <BsTelephone className="social__img_m" />
    </Link>
  );
};

export default SocialTelephone;
