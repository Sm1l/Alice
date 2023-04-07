import React from "react";
import { motion, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import Checkbox from "../Checkbox";

import "./header.scss";

const Header = ({ offsetY, scrollY }) => {
  const heightSizes = [400, 70];
  const imageSizes = [150, 50];
  const fontSizes = ["40px", "20px"];
  const contactsFontSizes = ["30px", "18px"];

  const headerHeight = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const contactsFontSize = useTransform(scrollY, offsetY, contactsFontSizes);
  const opacity = useTransform(scrollY, [20, 300], [1, 0]);

  return (
    <motion.header className="header" style={{ height: headerHeight }}>
      <div className="header__top">
        <motion.img
          src=""
          alt="Соловьёва Алиса логотип"
          className="header__logo"
          style={{ width: logoWidth, height: logoWidth }}
        />
        <motion.div className="header__contacts" style={{ fontSize: contactsFontSize }}>
          <ul className="header__list">
            <li className="header__item">
              <a href="tel:+79818005886" className="contacts__phone">
                8(981) 800-58-86
              </a>
            </li>
            {/* <li className="header__item">
              <a
                href="https://t.me/+79818005886"
                className="contacts__telegram"
                target="_blank"
                rel="noreferrer noopener"
              >
                telegram
              </a>
            </li> */}
            <li className="header__item">
              <a
                href="https://wa.me/+79818005886"
                className="contacts__watsapp"
                target="_blank"
                rel="noreferrer noopener"
              >
                whatsApp
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.h2 className="header__name" style={{ fontSize }}>
          Соловьёва Алиса
        </motion.h2>
      </div>
      <motion.div className="header__bottom" style={{ opacity }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam sapiente, suscipit odio totam debitis
          sit similique voluptatum velit quod, eius voluptatem, earum deserunt blanditiis impedit voluptates culpa omnis
          porro?
        </p>
        <div className="header__bottom-line">
          <div className="header__toggle">
            <span className="header__check">Ораторское мастерство</span>
            <Checkbox />
            <span className="header__check">Актриса</span>
          </div>
          <div className="header__link-container">
            <Link className="header__link" to="/">
              Преподаватель
            </Link>
            <Link className="header__link" to="/actress">
              Актриса
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
