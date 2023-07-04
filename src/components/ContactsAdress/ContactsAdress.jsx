import React from "react";
import { Link } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

import "./contactsadress.scss";

const ContactsAdress = () => {
  return (
    <div className="contactsadress">
      <h3 className="contactsadress__title title">Контакты</h3>
      <p className="contactsadress__name">Соловьёва Алиса</p>
      <p className="contactsadress__name">Город: Москва</p>
      <Link to="tel:+79818005886" className="contactsadress__phone">
        <BsTelephone className="contactsadress__img_s" />
        8(981) 800-58-86
      </Link>
      <Link to="mailto: Lisicas22@gmail.com" className="contactsadress__phone">
        <IoMailOutline className="contactsadress__img_s" />
        Lisicas22@gmail.com
      </Link>
    </div>
  );
};

export { ContactsAdress };
