import React from "react";
import { useScroll } from "framer-motion";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import "./speechpage.scss";

const SpeechPage = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 500];
  // const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <>
      {/* <Header offsetY={offsetY} scrollY={scrollY} /> */}
      <Main offsetY={offsetY} scrollY={scrollY} />
      {/* <Footer /> */}
    </>
  );
};

export default SpeechPage;
