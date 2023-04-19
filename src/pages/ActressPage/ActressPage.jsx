import React from "react";
import ActressMainBlock from "../../components/ActressMainBlock/ActressMainBlock";

import "./actresspage.scss";

const ActressPage = ({ offsetY, scrollY }) => {
  return <ActressMainBlock offsetY={offsetY} scrollY={scrollY} />;
};

export default ActressPage;
