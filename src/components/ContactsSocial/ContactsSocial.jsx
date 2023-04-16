import React from "react";

import "./contactssocial.scss";

import SocialInstagram from "../Social/SocialInstagram";
import SocialVkontakte from "../Social/SocialVkontakte";
import SocialTelegram from "../Social/SocialTelegram";
import SocialWhatsApp from "../Social/SocialWhatsApp";
import SocialKinopoisk from "../Social/SocialKinopoisk";
// import ContactsAdress from "../ContactsAdress/ContactsAdress";
// import SocialInstagram from "../Social/SocialInstagram";
// import SocialVkontakte from

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

export default ContactsSocial;
