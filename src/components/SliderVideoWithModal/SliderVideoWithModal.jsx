import React, { useState } from "react";

import { SliderVideo } from "../SliderVideo";
import { SectionContentComponent } from "../SectionContentComponent";

import { videoList } from "./videoList";

const SliderVideoWithModal = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <SectionContentComponent title="Видео">
      <SliderVideo
        videoList={videoList}
        modalIsActive={modalIsActive}
        setModalIsActive={setModalIsActive}
        setSelectedImg={setSelectedImg}
      />
    </SectionContentComponent>
  );
};

export { SliderVideoWithModal };
