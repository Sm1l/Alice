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
      // pathLength: 1,
      // offsetDistance: "100%",
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      // pathLength: 0,
      // offsetDistance: "0%",
    },
  };
  const svgDotVariants = {
    visible: {
      opacity: 1,
      pathLength: 1,
      // offsetDistance: "100%",
      transition: { delay: 4, duration: 1 },
    },
    hidden: {
      opacity: 0,
      pathLength: 0,
      // offsetDistance: "0%",
    },
  };
  const borderVariants = {
    visible: {
      opacity: 1,
      pathLength: 1,
      // offsetDistance: "100%",
      transition: { duration: 4, delay: 1 },
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
      <header className="mainpage__header">
        <motion.div
          className="mainpage__toggle"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <Classic duration={750} onToggle={changeTheme} />
        </motion.div>
      </header>
      <motion.main className="mainpage__main" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="mainpage__logocontainer">
          <motion.svg
            className="mainpage__logo"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              className="svg__l"
              d="M12.052 12.722H15.427V29.084H25.228V32H12.052V12.722Z"
              fill="black"
              variants={svgChildVariants}
            />

            <motion.line
              className="svg__i"
              x1="59.05"
              y1="18"
              x2="59.05"
              y2="32"
              stroke="#de8927"
              stroke-width="3.1"
              variants={svgChildVariants}
            />
            <motion.path
              className="svg__a"
              d="M57.209 49.722H60.8L68.225 69H64.607L62.798 63.897H55.103L53.294 69H49.811L57.209 49.722ZM56.021 61.332H61.907L59.018 53.043H58.937L56.021 61.332Z"
              fill="black"
              variants={svgChildVariants}
            />
            <motion.path
              className="svg__s"
              d="M14.266 62.574C14.266 63.312 14.392 63.942 14.644 64.464C14.896 64.986 15.247 65.418 15.697 65.76C16.147 66.084 16.66 66.327 17.236 66.489C17.83 66.633 18.469 66.705 19.153 66.705C19.891 66.705 20.521 66.624 21.043 66.462C21.565 66.282 21.988 66.057 22.312 65.787C22.636 65.517 22.87 65.211 23.014 64.869C23.158 64.509 23.23 64.149 23.23 63.789C23.23 63.051 23.059 62.511 22.717 62.169C22.393 61.809 22.033 61.557 21.637 61.413C20.953 61.161 20.152 60.927 19.234 60.711C18.334 60.477 17.218 60.18 15.886 59.82C15.058 59.604 14.365 59.325 13.807 58.983C13.267 58.623 12.835 58.227 12.511 57.795C12.187 57.363 11.953 56.904 11.809 56.418C11.683 55.932 11.62 55.437 11.62 54.933C11.62 53.961 11.818 53.124 12.214 52.422C12.628 51.702 13.168 51.108 13.834 50.64C14.5 50.172 15.256 49.83 16.102 49.614C16.948 49.38 17.803 49.263 18.667 49.263C19.675 49.263 20.62 49.398 21.502 49.668C22.402 49.92 23.185 50.307 23.851 50.829C24.535 51.351 25.075 51.999 25.471 52.773C25.867 53.529 26.065 54.411 26.065 55.419H22.69C22.6 54.177 22.177 53.304 21.421 52.8C20.665 52.278 19.702 52.017 18.532 52.017C18.136 52.017 17.731 52.062 17.317 52.152C16.903 52.224 16.525 52.359 16.183 52.557C15.841 52.737 15.553 52.989 15.319 53.313C15.103 53.637 14.995 54.042 14.995 54.528C14.995 55.212 15.202 55.752 15.616 56.148C16.048 56.526 16.606 56.814 17.29 57.012C17.362 57.03 17.641 57.111 18.127 57.255C18.631 57.381 19.189 57.525 19.801 57.687C20.413 57.849 21.007 58.011 21.583 58.173C22.177 58.317 22.6 58.425 22.852 58.497C23.482 58.695 24.031 58.965 24.499 59.307C24.967 59.649 25.354 60.045 25.66 60.495C25.984 60.927 26.218 61.395 26.362 61.899C26.524 62.403 26.605 62.907 26.605 63.411C26.605 64.491 26.38 65.418 25.93 66.192C25.498 66.948 24.922 67.569 24.202 68.055C23.482 68.541 22.663 68.892 21.745 69.108C20.827 69.342 19.891 69.459 18.937 69.459C17.839 69.459 16.804 69.324 15.832 69.054C14.86 68.784 14.014 68.37 13.294 67.812C12.574 67.254 11.998 66.543 11.566 65.679C11.134 64.797 10.909 63.762 10.891 62.574H14.266Z"
              fill="black"
              variants={svgChildVariants}
            />

            <motion.rect
              className="svg__border"
              x="1"
              y="1"
              width="78"
              height="78"
              stroke="black"
              stroke-width="2"
              variants={borderVariants}
            />
            <motion.rect
              className="svg__i_dot"
              x="54.4"
              y="13"
              width="3"
              height="3"
              fill="#de8927"
              variants={svgDotVariants}
            />
            <motion.rect
              className="svg__i_dot"
              x="60.6"
              y="13"
              width="3"
              height="3"
              fill="#de8927"
              variants={svgDotVariants}
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
    </div>
  );
};

export default MainPage;
