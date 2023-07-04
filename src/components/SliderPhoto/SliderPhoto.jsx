import React from "react";
import { SliderWithModal } from "../SliderWithModal/SliderWithModal";
import { SectionContentComponent } from "../SectionContentComponent";

const SliderPhoto = () => {
  return (
    <>
      <SectionContentComponent title="Фото">
        <SliderWithModal />
      </SectionContentComponent>
    </>
  );
};

export { SliderPhoto };
