import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";

import SpeechWelcome from "../../components/SpeechWelcome";
import Hello from "../../components/Hello";
import About from "../../components/About";
import Education from "../../components/Education";
import Work from "../../components/Work";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";

import "./speechpage.scss";

const SpeechPage = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <motion.main className="speechpage" style={{ marginTop: marginTop }}>
      <SpeechWelcome />
      <Hello />
      <About />
      <Education />
      <Work />
      {/* <PhotoSlider /> */}
    </motion.main>
  );
};

export default SpeechPage;
