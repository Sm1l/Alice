import React, { useState } from "react";

import { ModalImg } from "../ModalImg";
import { Slider } from "../Slider";

import { imgList } from "./img/images";

const SliderWithModal = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Slider
        imgList={imgList}
        modalIsActive={modalIsActive}
        setModalIsActive={setModalIsActive}
        setSelectedImg={setSelectedImg}
      />
      <ModalImg modalIsActive={modalIsActive} setModalIsActive={setModalIsActive} selectedImg={selectedImg} />
    </>
  );
};

export { SliderWithModal };
