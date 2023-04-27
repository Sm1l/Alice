import React from "react";
import { Link } from "react-router-dom";

import { SlSocialVkontakte } from "react-icons/sl";

import "./social.scss";

const SocialVkontakte = () => {
  return (
    <Link className="social__link" to="https://vk.com/alisaas" target="_blank" rel="noreferrer noopener">
      <SlSocialVkontakte className="social__img_m" />
    </Link>
  );
};

export default SocialVkontakte;
