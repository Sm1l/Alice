import React from "react";
import { Link } from "react-router-dom";

import { IoMailOutline } from "react-icons/io5";

import "./social.scss";

const SocialEmail = () => {
  return (
    <Link className="social__link" to="mailto: Lisicas22@gmail.com">
      <IoMailOutline className="social__img_m" />
    </Link>
  );
};

export default SocialEmail;
