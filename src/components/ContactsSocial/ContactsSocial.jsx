import React from "react";

import "./contactssocial.scss";

import { SocialInstagram, SocialVkontakte, SocialTelegram, SocialWhatsApp, SocialKinopoisk } from "../Social";

const ContactsSocial = () => {
  return (
    <div className="contactssocial">
      <h3 className="contactssocial__title title">Социальные сети</h3>
      <ul className="contactssocial__list">
        <li className="contactssocial__item">
          <SocialInstagram />
        </li>
        <li className="contactssocial__item">
          <SocialWhatsApp />
        </li>
        <li className="contactssocial__item">
          <SocialVkontakte />
        </li>
        <li className="contactssocial__item">
          <SocialTelegram />
        </li>
        <li className="contactssocial__item">
          <SocialKinopoisk />
        </li>
      </ul>
    </div>
  );
};

export { ContactsSocial };
