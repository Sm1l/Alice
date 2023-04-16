import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { toggleTheme } from "../../store/headerSlice";
import { useDispatch, useSelector } from "react-redux";

import logo from "./img/Liaslogo.svg";
import { ReactComponent as Logo } from "./img/Liaslogo.svg";

import "@theme-toggles/react/css/Classic.css";

import { Classic } from "@theme-toggles/react";

import SocialWhatsApp from "../Social/SocialWhatsApp";
import SocialTelephone from "../Social/SocialTelephone";
import SocialInstagram from "../Social/SocialInstagram";
import SocialEmail from "../Social/SocialEmail";

import "./header.scss";

const Header = ({ offsetY, scrollY }) => {
  //*animation
  const heightSizes = [400, 70];
  const imageSizes = [150, 50];
  const fontSizes = ["40px", "20px"];

  const headerHeight = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const opacity = useTransform(scrollY, [20, 300], [1, 0]);

  //*theme
  // const dispatch = useDispatch();
  // const theme = useSelector((store) => store.header.theme);
  // console.log(theme);
  // const handleToggleTheme = dispatch(toggleTheme());
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <motion.header className="header ui-block" style={{ height: headerHeight }}>
      <div className="header__top">
        <div className="header__logocontainer">
          <NavLink to="/">
            <motion.div style={{ width: logoWidth, height: logoWidth }}>
              <Logo className="header__logo" width={logoWidth} height={logoWidth} />
            </motion.div>
          </NavLink>
          <motion.h2 className="header__name" style={{ fontSize }}>
            Соловьёва Алиса
          </motion.h2>
        </div>
        <nav className="header__link-container">
          <NavLink
            className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
            to="/speech"
          >
            <motion.p style={{ fontSize }}>Преподаватель</motion.p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
            to="/actress"
          >
            <motion.p style={{ fontSize }}>Актриса</motion.p>
          </NavLink>
        </nav>
      </div>
      <motion.div className="header__bottom" style={{ opacity }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita odit esse quod rem perspiciatis. Officia
          debitis libero officiis veritatis veniam, nemo ea in culpa voluptatem id, quod autem dolor.
        </p>
        <div className="header__bottom-container">
          <div className="header__contacts contacts">
            <ul className="header__contacts-list">
              <li className="header__contacts-link">
                <SocialTelephone />
              </li>
              <li className="header__contacts-link">
                <SocialWhatsApp />
              </li>
              <li className="header__contacts-link">
                <SocialInstagram />
              </li>
              <li className="header__contacts-link">
                <SocialEmail />
              </li>
            </ul>
          </div>
          <div className="header__toggle">
            <Classic duration={750} onToggle={toggleTheme} />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
