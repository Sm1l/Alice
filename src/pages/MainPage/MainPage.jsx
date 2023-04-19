import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { toggleMenuIndex } from "../../store/menuSlice";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import SocialWhatsApp from "../../components/Social/SocialWhatsApp";
import SocialTelephone from "../../components/Social/SocialTelephone";
import SocialInstagram from "../../components/Social/SocialInstagram";
import SocialEmail from "../../components/Social/SocialEmail";
import SocialVkontakte from "../../components/Social/SocialVkontakte";
import SocialKinopoisk from "../../components/Social/SocialKinopoisk";

import { Classic } from "@theme-toggles/react";

import "./mainpage.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.theme);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  //*animation

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        durationChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const childVariantsBottom = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
    hidden: {
      y: 3000,
      opacity: 0,
    },
  };

  const childVariantsLeft = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 3 },
    },
    hidden: {
      x: -3000,
      opacity: 0,
    },
  };

  const childVariantsRight = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 3 },
    },
    hidden: {
      x: 3000,
      opacity: 0,
    },
  };

  const svgVariants = {
    visible: {
      opacity: 1,
      // pathLength: 1,
      transition: {
        duration: 1,
        delayChildren: 2,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      // pathLength: 0,
    },
  };

  const svgChildVariants = {
    visible: {
      opacity: 1,
      pathLength: 1,
      // offsetDistance: "100%",
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      pathLength: 0,
      // offsetDistance: "0%",
    },
  };
  //*animation menu links
  //*animation menu
  const activeMenuIndex = useSelector((state) => state.menu.menuIndex);
  const toggleActiveMenuIndexTeacher = () => dispatch(toggleMenuIndex({ menuIndex: 0 }));
  const toggleActiveMenuIndexActress = () => dispatch(toggleMenuIndex({ menuIndex: 1 }));

  useEffect(() => {
    localStorage.setItem("LiasMenuIndex", JSON.stringify(activeMenuIndex));
  }, [activeMenuIndex]);

  //*theme

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("LiasTheme", JSON.stringify(theme));
  }, [theme]);

  //!надо разобраться, что-то в этом есть!
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.querySelector(".theme-toggle").classList.add("theme-toggle--toggled");
  //     console.log("dark");
  //   }
  // }, []);

  return (
    <div className="mainpage">
      {/*//! пока убрал header,footer   */}
      {/* <header className="mainpage__header ">
        <motion.div
          className="mainpage__toggle "
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <Classic duration={750} onToggle={changeTheme} />
        </motion.div>
      </header> */}
      <motion.main className="mainpage__main" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="mainpage__logocontainer">
          {/* variants={childVariants}> */}
          <motion.svg
            className="mainpage__logo"
            viewBox="0 0 79 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              className="svg__l"
              d="M12.28 13.58H16.03V31.76H26.92V35H12.28V13.58Z"
              fill="black"
              variants={svgChildVariants}
            />
            <motion.path
              variants={svgChildVariants}
              className="svg__i"
              d="M56.89 13.58H60.31V16.82H56.89V13.58ZM56.89 19.49H60.31V35H56.89V19.49Z"
              fill="#de8927"
            />
            <motion.path
              variants={svgChildVariants}
              className="svg__a"
              d="M56.01 46.58H60L68.25 68H64.23L62.22 62.33H53.67L51.66 68H47.79L56.01 46.58ZM54.69 59.48H61.23L58.02 50.27H57.93L54.69 59.48Z"
              fill="black"
            />
            <motion.path
              className="svg__s"
              d="M14.74 60.86C14.74 61.68 14.88 62.38 15.16 62.96C15.44 63.54 15.83 64.02 16.33 64.4C16.83 64.76 17.4 65.03 18.04 65.21C18.7 65.37 19.41 65.45 20.17 65.45C20.99 65.45 21.69 65.36 22.27 65.18C22.85 64.98 23.32 64.73 23.68 64.43C24.04 64.13 24.3 63.79 24.46 63.41C24.62 63.01 24.7 62.61 24.7 62.21C24.7 61.39 24.51 60.79 24.13 60.41C23.77 60.01 23.37 59.73 22.93 59.57C22.17 59.29 21.28 59.03 20.26 58.79C19.26 58.53 18.02 58.2 16.54 57.8C15.62 57.56 14.85 57.25 14.23 56.87C13.63 56.47 13.15 56.03 12.79 55.55C12.43 55.07 12.17 54.56 12.01 54.02C11.87 53.48 11.8 52.93 11.8 52.37C11.8 51.29 12.02 50.36 12.46 49.58C12.92 48.78 13.52 48.12 14.26 47.6C15 47.08 15.84 46.7 16.78 46.46C17.72 46.2 18.67 46.07 19.63 46.07C20.75 46.07 21.8 46.22 22.78 46.52C23.78 46.8 24.65 47.23 25.39 47.81C26.15 48.39 26.75 49.11 27.19 49.97C27.63 50.81 27.85 51.79 27.85 52.91H24.1C24 51.53 23.53 50.56 22.69 50C21.85 49.42 20.78 49.13 19.48 49.13C19.04 49.13 18.59 49.18 18.13 49.28C17.67 49.36 17.25 49.51 16.87 49.73C16.49 49.93 16.17 50.21 15.91 50.57C15.67 50.93 15.55 51.38 15.55 51.92C15.55 52.68 15.78 53.28 16.24 53.72C16.72 54.14 17.34 54.46 18.1 54.68C18.18 54.7 18.49 54.79 19.03 54.95C19.59 55.09 20.21 55.25 20.89 55.43C21.57 55.61 22.23 55.79 22.87 55.97C23.53 56.13 24 56.25 24.28 56.33C24.98 56.55 25.59 56.85 26.11 57.23C26.63 57.61 27.06 58.05 27.4 58.55C27.76 59.03 28.02 59.55 28.18 60.11C28.36 60.67 28.45 61.23 28.45 61.79C28.45 62.99 28.2 64.02 27.7 64.88C27.22 65.72 26.58 66.41 25.78 66.95C24.98 67.49 24.07 67.88 23.05 68.12C22.03 68.38 20.99 68.51 19.93 68.51C18.71 68.51 17.56 68.36 16.48 68.06C15.4 67.76 14.46 67.3 13.66 66.68C12.86 66.06 12.22 65.27 11.74 64.31C11.26 63.33 11.01 62.18 10.99 60.86H14.74Z"
              fill="black"
              variants={svgChildVariants}
            />
            <motion.rect
              className="svg__border"
              x="1"
              y="1"
              width="77"
              height="78"
              stroke="black"
              strokeWidth="2"
              initial={{
                opacity: 0,
                pathLength: 0,
                // offsetDistance: "0%",
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                // offsetDistance: "100%",
                transition: { duration: 4, delay: 1 },
              }}
            />
          </motion.svg>
        </motion.div>
        <motion.h1 variants={childVariantsBottom} className="mainpage__title title">
          Соловьёва Алиса
        </motion.h1>
        <motion.nav className="mainpage__linkcontainer">
          <motion.div className="mainpage__item" variants={childVariantsLeft}>
            <NavLink
              className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
              to="/speech"
              onClick={toggleActiveMenuIndexTeacher}
            >
              <motion.p className="mainpage__p">Ораторское искусство</motion.p>
            </NavLink>
          </motion.div>
          <motion.div className="mainpage__item" variants={childVariantsRight}>
            <NavLink
              className={({ isActive }) => (isActive ? "header__link header__link_active" : "header__link")}
              to="/actress"
              onClick={toggleActiveMenuIndexActress}
            >
              <motion.p className="mainpage__p">Театр и кино</motion.p>
            </NavLink>
          </motion.div>
        </motion.nav>
      </motion.main>
      {/* <footer className="mainpage__footer">
        <motion.div
          className="mainpage__contacts"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <ul className="mainpage__contacts-list">
            <li className="mainpage__contacts-link">
              <SocialTelephone />
            </li>
            <li className="mainpage__contacts-link">
              <SocialWhatsApp />
            </li>
            <li className="mainpage__contacts-link">
              <SocialInstagram />
            </li>
            <li className="mainpage__contacts-link">
              <SocialEmail />
            </li>
            <li className="mainpage__contacts-link">
              <SocialVkontakte />
            </li>
            <li className="mainpage__contacts-link">
              <SocialKinopoisk />
            </li>
          </ul>
        </motion.div>
      </footer> */}
    </div>
  );
};

export default MainPage;
