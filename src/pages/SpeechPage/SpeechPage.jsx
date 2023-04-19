import React from "react";
// import MainSpeech from "../../components/MainSpeech/MainSpeech";
// import SpeechMainBlock from "../../components/SpeechMainBlock";
import SpeechMainBlock from "../../components/SpeechMainBlock/SpeechMainBlock";

import "./speechpage.scss";

const SpeechPage = ({ offsetY, scrollY }) => {
  return <SpeechMainBlock offsetY={offsetY} scrollY={scrollY} />;
  // <MainSpeech offsetY={offsetY} scrollY={scrollY} />;
};

export default SpeechPage;
