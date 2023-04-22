import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "../../base/Arrow/Arrow";

import "./work.scss";

const Work = () => {
  return (
    <section className="work ">
      {/* <motion.div className="work__title-container">
        <h3 className="work__title title">
          Моя <br /> работа
        </h3>
        <ArrowRight />
      </motion.div> */}
      <motion.div className="work__info ui-block">
        <p className="work__text">Здесь будут видосики</p>
        <p className="work__text">Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
        <p className="work__text"> Здесь будут видосики</p>
      </motion.div>
      <motion.div className="work__title-container">
        <h3 className="work__title title">
          Мои <br /> работы
        </h3>
        <ArrowLeft />
      </motion.div>
    </section>
  );
};

export default Work;
