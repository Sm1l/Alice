import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { toggleTheme } from "../../store/headerSlice";
import { useDispatch, useSelector } from "react-redux";
// import { BsSun, BsSunFill, BsMoonStars, BsMoonStarsFill } from "react-icons/bs";

import Checkbox from "../Checkbox";

import "./header.scss";

const Header = ({ offsetY, scrollY }) => {
  //*animation
  const heightSizes = [400, 70];
  const imageSizes = [150, 50];
  const fontSizes = ["40px", "20px"];
  const contactsFontSizes = ["30px", "18px"];

  const headerHeight = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const contactsFontSize = useTransform(scrollY, offsetY, contactsFontSizes);
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
        <motion.img
          src=""
          alt="Соловьёва Алиса логотип"
          className="header__logo"
          style={{ width: logoWidth, height: logoWidth }}
        />
        <motion.div className="header__contacts" style={{ fontSize: contactsFontSize }}>
          <ul className="header__list">
            <li className="header__item">
              <Link to="tel:+79818005886" className="contacts__phone">
                8(981) 800-58-86
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="https://wa.me/+79818005886"
                className="contacts__watsapp"
                target="_blank"
                rel="noreferrer noopener"
              >
                whatsApp
              </Link>
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
            {/* <span className="header__check">{BsSun}</span> */}
            {/* <BsSun /> */}
            <Checkbox handleClick={toggleTheme} />
            {/* <span className="header__check">{BsMoonStars}</span> */}
            {/* <BsMoonStars /> */}
          </div>
          <div className="header__link-container">
            <NavLink
              className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
              to="/"
            >
              Преподаватель
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
              to="/actress"
            >
              Актриса
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
