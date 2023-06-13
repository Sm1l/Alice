import React from "react";
import SliderComponent from "../SliderComponent";
import SectionComponent from "../SectionComponent";

import "./sliderphoto.scss";

import imageLight from "../../components/SpeechWelcome/img/Alice.webp";
import imageDark from "../../components/SpeechWelcome/img/Alice_dark.webp";

const PhotoSlider = () => {
  const photos = [imageLight, imageDark, imageLight, imageDark, imageLight, imageDark];
  return (
    <SliderComponent children={photos}>
      {photos.map((photo) => (
        <div className="sliderphoto__container _ibg">
          <img src={photo} alt="Work"></img>
        </div>
      ))}
    </SliderComponent>
  );
};

export default PhotoSlider;
