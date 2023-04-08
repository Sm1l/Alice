import React from "react";

import "./actresspage.scss";
import MainActress from "../../MainActress/MainActress";

const ActressPage = ({ offsetY, scrollY }) => {
  return <MainActress offsetY={offsetY} scrollY={scrollY} />;
};

export default ActressPage;
