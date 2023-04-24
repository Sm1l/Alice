import React, { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../../store/themeSlice";
import { toggleMenuIndex } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Logo } from "./img/Liaslogo.svg";

import "@theme-toggles/react/css/Classic.css";

import { Classic } from "@theme-toggles/react";

import SocialWhatsApp from "../Social/SocialWhatsApp";
import SocialTelephone from "../Social/SocialTelephone";
import SocialInstagram from "../Social/SocialInstagram";
import SocialEmail from "../Social/SocialEmail";

import "./header.scss";

const Header = ({ offsetY, scrollY }) => {
  //*animation header
  const heightSizes = ["20rem", "8rem"];
  const imageSizes = ["10rem", "5rem"];
  const fontSizes = ["3rem", "2rem"];

  const headerHeight = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const opacity = useTransform(scrollY, [10, 40], [1, 0]);

  //*animation menu
  // const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const dispatch = useDispatch();
  const activeMenuIndex = useSelector((state) => state.menu.menuIndex);
  const toggleActiveMenuIndexTeacher = () => dispatch(toggleMenuIndex({ menuIndex: 0 }));
  const toggleActiveMenuIndexActress = () => dispatch(toggleMenuIndex({ menuIndex: 1 }));

  useEffect(() => {
    localStorage.setItem("LiasMenuIndex", JSON.stringify(activeMenuIndex));
    return () => {};
  }, [activeMenuIndex]);

  function ActiveLine() {
    return (
      <motion.div
        layoutId="activeMenuItem"
        style={{
          width: "100%",
          height: "4px",
          position: "absolute",
          bottom: "-4px",
          backgroundColor: "var(--colors-link-hover)",
        }}
      ></motion.div>
    );
  }
  // };
  //*theme

  const theme = useSelector((store) => store.theme.theme);
  const [isToggled, setToggle] = useState(theme === "light" ? false : true);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("LiasTheme", JSON.stringify(theme));
  }, [theme]);

  return (
    <motion.header className="header" style={{ height: headerHeight }}>
      <div className="header__top">
        <div className="header__logocontainer">
          <NavLink to="/">
            <motion.div style={{ width: logoWidth, height: logoWidth }}>
              <Logo className="header__logo" />
            </motion.div>
          </NavLink>
          <motion.h2 className="header__name" style={{ fontSize }}>
            Соловьёва Алиса
          </motion.h2>
        </div>

        <nav className="header__link-container">
          <NavLink
            // className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
            className={"header__link"}
            to="/speech"
            onClick={toggleActiveMenuIndexTeacher}
            // initial={{ color: "var(--colors-link-hover)" }}
            // animate={{
            //   color: activeMenuIndex === 0 ? "var(--colors-link-hover)" : "var(--colors-link)",
            // }}
            // transition={{ duration: 1 }}
          >
            {/*//! убрал изменение размера шрифта*/}
            {/* <motion.p style={{ fontSize }}>Ораторское искусство</motion.p> */}
            <p>Ораторское искусство</p>
            {activeMenuIndex === 0 && <ActiveLine />}
          </NavLink>
          <NavLink
            // className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
            className={"header__link"}
            to="/actress"
            // isSelected={activeMenuIndex === 1}
            // onClick={() => toggleActiveMenuIndex(1)}
            onClick={toggleActiveMenuIndexActress}
            // initial={{ color: "var(--colors-link-hover)" }}
            // animate={{
            //   color: activeMenuIndex === 1 ? "var(--colors-link-hover)" : "var(--colors-link)",
            // }}
            // transition={{ duration: 1 }}
          >
            {/* <motion.p style={{ fontSize }}>Театр и кино</motion.p> */}
            <p>Театр и кино</p>
            {activeMenuIndex === 1 && <ActiveLine />}
          </NavLink>
        </nav>
      </div>
      <motion.div className="header__bottom" style={{ opacity }}>
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
          <motion.div className="header__toggle">
            <Classic toggled={isToggled} toggle={setToggle} duration={750} onToggle={changeTheme} />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
