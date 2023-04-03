import React from "react";
import "./contacts.scss";

const Contacts = () => {
  return (
    <aside className="contacts">
      <div className="contacts__about">
        <h2 className="contacts__title title">Контакты</h2>
        <p className="contacts__name">Соловьева Алиса</p>
        <p className="contacts__name">Город: Москва</p>
        <a href="tel:+79818005886" className="contacts__phone">
          8(981) 800-58-86
        </a>
        <a href="mailto: Lisicas22@gmail.com">Lisicas22@gmail.com</a>
        {/* <a href="https://wa.me/+79818005886" class="contacts__watsapp" target="_blank"></a> */}
      </div>
      <div className="contacts__social">
        <h2 className="contacts__title title">Социальные сети</h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <a
              href="https://instagram.com/lisa__a__s?igshid=YmMyMTA2M2Y="
              class="contacts__instagram"
              target="_blank"
              rel="noreferrer noopener"
            >
              instagram
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://vk.com/alisaas" class="contacts__vk" target="_blank" rel="noreferrer noopener">
              vk
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://t.me/+79818005886" class="contacts__telegram" target="_blank" rel="noreferrer noopener">
              telegram
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://wa.me/+79818005886" class="contacts__watsapp" target="_blank" rel="noreferrer noopener">
              whatsApp
            </a>
          </li>
          <li className="contacts__item">
            <a
              href="https://kinopoisk.ru/name/6439642"
              class="contacts__kinopoisk"
              target="_blank"
              rel="noreferrer noopener"
            >
              kinopoisk
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Contacts;
