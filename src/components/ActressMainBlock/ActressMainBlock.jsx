import React from "react";
import { motion, useTransform } from "framer-motion";

import "./actressmainblock.scss";

const ActressMainBlock = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <motion.main className="actressmainblock" style={{ marginTop: marginTop }}>
      <h2 className="actressmainblock__title title">Page under construction</h2>
    </motion.main>
  );
};

export default ActressMainBlock;
