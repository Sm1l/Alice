import React from "react";
import { motion } from "framer-motion";

import { animationSection } from "./animationSection";

import "./sectioncontentcomponent.scss";

const SectionContentComponent = ({ title, children }) => {
  return (
    <motion.section
      className="sectioncontentcomponent"
      initial="hidden"
      whileInView="visible"
      variants={animationSection}
      viewport={{ amount: 0.3, once: true }}
    >
      <h3 className="sectioncontentcomponent__title title">{title}</h3>
      {children}
    </motion.section>
  );
};

export { SectionContentComponent };
