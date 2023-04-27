import React from "react";
import { Link } from "react-router-dom";

import { BsInstagram } from "react-icons/bs";
import "./social.scss";

const SocialInstagram = () => {
  return (
    <Link
      className="social__link"
      to="https://instagram.com/lisa__a__s?igshid=YmMyMTA2M2Y="
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsInstagram className="social__img_m" />
    </Link>
  );
};

export default SocialInstagram;
