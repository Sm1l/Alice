import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";

import "./work.scss";

const Work = () => {
  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { duration: 0.8, delay: custom * 0.3 } }),
  };
  return (
    <motion.section className="work " initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.div className="work__info ui-block" variants={textAnimation} custom={2}>
        <p className="work__text">Здесь будут видосики</p>
        <p className="work__text">Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur beatae dolores molestiae sapiente
          porro eos sed illo? Nulla, delectus beatae molestiae eaque corporis culpa? Libero modi eos perspiciatis
          expedita.
        </p>
        <p className="work__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur beatae dolores molestiae sapiente
          porro eos sed illo? Nulla, delectus beatae molestiae eaque corporis culpa? Libero modi eos perspiciatis
          expedita.
        </p>
      </motion.div>
      <motion.div className="work__title-container" variants={textAnimation} custom={1}>
        <h3 className="work__title title">Мои работы</h3>
        <ArrowLeft />
      </motion.div>
    </motion.section>
  );
};

export default Work;
