import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";

import { motion, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../components/Header/img/Liaslogo.svg";

import SocialWhatsApp from "../../components/Social/SocialWhatsApp";
import SocialTelephone from "../../components/Social/SocialTelephone";
import SocialInstagram from "../../components/Social/SocialInstagram";
import SocialEmail from "../../components/Social/SocialEmail";
import SocialVkontakte from "../../components/Social/SocialVkontakte";
import SocialKinopoisk from "../../components/Social/SocialKinopoisk";

import { Classic } from "@theme-toggles/react";

import "./mainpage.scss";

const MainPage = ({ offsetY, scrollY }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.theme);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  const MotionLogo = motion(Logo);

  //*animation
  const heightSizes = [400, 70];
  const imageSizes = [150, 50];
  const fontSizes = ["40px", "20px"];

  const headerHeight = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const opacity = useTransform(scrollY, [20, 300], [1, 0]);

  const mainVariants = {
    visible: (i) => ({ opacity: 1, transition: { delay: i * 1 } }),
    hidden: { opacity: 0 },
  };

  //*theme

  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="mainpage">
      <header className="mainpage__header ">
        <motion.div
          className="mainpage__toggle "
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <Classic duration={750} onToggle={changeTheme} />
        </motion.div>
      </header>
      <motion.main
        className="mainpage__main"
        // style={{ height: headerHeight }}
        // variants={mainVariants}
        // initial="hidden"
        // animate="visible"
        // custom={2}
      >
        <motion.div className="mainpage__logocontainer">
          {/* // initial={{ backgroundColor: "transparent" }}
        // animate={{ backgroundColor: "yellow" }}
        // transition={{ duration: 4, repeat: Infinity, delay: 1, repeatType: "reverse" }}> */}
          <MotionLogo className="mainpage__logo" />
        </motion.div>
        <motion.h1 className="mainpage__title title">Соловьёва Алиса</motion.h1>
        <motion.nav className="mainpage__linkcontainer">
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
        </motion.nav>
        {/* <motion.p className="mainpage__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita odit esse quod rem perspiciatis. Officia
          debitis libero officiis veritatis veniam, nemo ea in culpa voluptatem id, quod autem dolor.
        </motion.p> */}
      </motion.main>
      <footer className="mainpage__footer">
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
      </footer>
    </div>
  );
};

export default MainPage;
