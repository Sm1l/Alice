import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";
import { ArrowRight } from "../../base/Arrow/Arrow";

import "./sectioncomponent.scss";

const SectionComponent = ({ title, side, children }) => {
  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };
  return (
    <motion.section
      className="sectioncomponent"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      {side === "right" && (
        <motion.div className="sectioncomponent__title-container" variants={textAnimation} custom={1}>
          <h3 className="sectioncomponent__title title">{title}</h3>
          <ArrowRight />
        </motion.div>
      )}

      <motion.div className="sectioncomponent__info ui-block" variants={textAnimation}>
        {children}
      </motion.div>
      {side === "left" && (
        <motion.div className="sectioncomponent__title-container" variants={textAnimation} custom={1}>
          <h3 className="sectioncomponent__title title">{title}</h3>
          <ArrowLeft />
        </motion.div>
      )}
    </motion.section>
  );
};

export default SectionComponent;
