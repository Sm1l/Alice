import React from "react";
import Checkbox from "../Checkbox";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <span className="header__speech">Ораторское мастерство</span>
      <Checkbox />
      <span className="header__speech">Актриса</span>
    </header>
  );
};

export default Header;
