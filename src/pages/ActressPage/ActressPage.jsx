import React from "react";
import MainActress from "../../components/MainActress";

import "./actresspage.scss";

const ActressPage = ({ offsetY, scrollY }) => {
  return <MainActress offsetY={offsetY} scrollY={scrollY} />;
};

export default ActressPage;
