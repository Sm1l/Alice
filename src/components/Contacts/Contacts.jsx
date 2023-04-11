import React from "react";
import { Link } from "react-router-dom";

import "./contacts.scss";

const Contacts = () => {
  return (
    <aside className="contacts">
      <div className="contacts__about">
        <h2 className="contacts__title title">Контакты</h2>
        <p className="contacts__name">Соловьева Алиса</p>
        <p className="contacts__name">Город: Москва</p>
        <Link to="tel:+79818005886" className="contacts__phone">
          8(981) 800-58-86
        </Link>
        <Link to="mailto: Lisicas22@gmail.com">Lisicas22@gmail.com</Link>
      </div>
      <div className="contacts__social">
        <h2 className="contacts__title title">Социальные сети</h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <Link
              to="https://instagram.com/lisa__a__s?igshid=YmMyMTA2M2Y="
              className="contacts__instagram"
              target="_blank"
              rel="noreferrer noopener"
            >
              instagram
            </Link>
          </li>
          <li className="contacts__item">
            <Link to="https://vk.com/alisaas" className="contacts__vk" target="_blank" rel="noreferrer noopener">
              vk
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to="https://t.me/+79818005886"
              className="contacts__telegram"
              target="_blank"
              rel="noreferrer noopener"
            >
              telegram
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to="https://wa.me/+79818005886"
              className="contacts__watsapp"
              target="_blank"
              rel="noreferrer noopener"
            >
              whatsApp
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to="https://kinopoisk.ru/name/6439642"
              className="contacts__kinopoisk"
              target="_blank"
              rel="noreferrer noopener"
            >
              kinopoisk
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Contacts;
