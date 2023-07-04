import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";
import { ArrowRight } from "../../base/Arrow/Arrow";

import { animationSection } from "./animationSection";

import "./sectioncomponent.scss";

const SectionComponent = ({ title, side, children }) => {
  return (
    <motion.section
      className="sectioncomponent"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      {side === "right" && (
        <motion.div className="sectioncomponent__title-container" variants={animationSection}>
          <h3 className="sectioncomponent__title title">{title}</h3>
          <ArrowRight />
        </motion.div>
      )}

      <motion.div className="sectioncomponent__info ui-block" variants={animationSection}>
        {children}
      </motion.div>
      {side === "left" && (
        <motion.div className="sectioncomponent__title-container" variants={animationSection}>
          <h3 className="sectioncomponent__title title">{title}</h3>
          <ArrowLeft />
        </motion.div>
      )}
    </motion.section>
  );
};

export { SectionComponent };
