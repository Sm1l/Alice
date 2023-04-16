import React from "react";
import MainSpeech from "../../components/MainSpeech/MainSpeech";

import "./speechpage.scss";

const SpeechPage = ({ offsetY, scrollY }) => {
  return <MainSpeech offsetY={offsetY} scrollY={scrollY} />;
};

export default SpeechPage;
