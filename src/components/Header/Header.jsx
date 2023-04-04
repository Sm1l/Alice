import React from "react";
import { motion, useTransform } from "framer-motion";
import Checkbox from "../Checkbox";

import "./header.scss";

const Header = ({ offsetY, scrollY }) => {
  const heightSizes = [350, 70];
  const imageSizes = [150, 50];
  const fontSizes = ["40px", "20px"];

  const height = useTransform(scrollY, offsetY, heightSizes);
  const logoWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const opacity = useTransform(scrollY, [20, 300], [1, 0]);

  return (
    <motion.header className="header" style={{ height }}>
      <div className="header__top">
        <motion.img
          src=""
          alt="Соловьёва Алиса логотип"
          className="header__logo"
          style={{ width: logoWidth, height: logoWidth }}
        />
        <motion.h2 className="header__name" style={{ fontSize }}>
          Соловьёва Алиса
        </motion.h2>
        <div className="header__toggle">
          <span className="header__check">Ораторское мастерство</span>
          <Checkbox />
          <span className="header__check">Актриса</span>
        </div>
      </div>
      <motion.div className="header__bottom" style={{ opacity }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam sapiente, suscipit odio totam debitis
          sit similique voluptatum velit quod, eius voluptatem, earum deserunt blanditiis impedit voluptates culpa omnis
          porro?
        </p>
      </motion.div>
    </motion.header>
  );
};

export default Header;
