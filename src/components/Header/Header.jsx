import React from "react";
import Checkbox from "../Checkbox";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <p className="header__logo">Соловьёва Алиса</p>
      <div className="header__toggle">
        <span className="header__check">Ораторское мастерство</span>
        <Checkbox />
        <span className="header__check">Актриса</span>
      </div>
    </header>
  );
};

export default Header;
