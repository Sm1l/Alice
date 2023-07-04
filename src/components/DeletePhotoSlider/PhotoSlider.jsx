import React, { useEffect, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { motion } from "framer-motion";
import { register } from "swiper/element/bundle";

import { SectionComponent } from "../SectionComponent";

import "./photoslider.scss";

// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";

import "./swiper.scss";

import imageLight from "../../components/SpeechWelcome/img/Alice.webp";
import imageDark from "../../components/SpeechWelcome/img/Alice_dark.webp";

register();

const PhotoSlider = () => {
  const photos = [imageLight, imageDark, imageLight, imageDark, imageLight, imageDark];
  const animation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  // useEffect(() => {
  //   const swiper = new Swiper(".swiper", {
  //     speed: 300,
  //     slidesPerView: 3,
  //     slidesPerGroup: 1,
  //     // watchSlidesProgress: true,
  //     // centerInsufficientSlides: "true",
  //     // loop: "true",
  //     spaceBetween: 50,
  //     createElements: true,
  //     navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       type: "bullets",
  //       clickable: "true",
  //     },
  //   });
  // }, []);

  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener("progress", (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener("slidechange", (e) => {
  //     console.log("slide changed");
  //   });
  // }, []);

  return (
    // <SectionComponent title="swiper" side="right">
    <motion.div
      className="photoslider__container"
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.3, once: true }}
    >
      <swiper-container
        class="swiper"
        slides-per-view="3"
        speed="600"
        space-between=" 20"
        slides-per-group="1"
        navigation="true"
        pagination="true"
        pagination-type="bullets"
        pagination-clickable="true"
        autoplay-delay="2000"
        // autoplay-disable-on-interaction="false"
        // loop="true"
        // breakpoints={{
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //   },
        //   1200: {
        //     width: 1000,
        //     slidesPerView: 2,
        //   },
        // }}
      >
        {photos.map((photo, i) => {
          return (
            <swiper-slide key={i}>
              <div className="photoslider__item _ibg" onClick={() => console.log("sliderphoto click")}>
                <img className="photoslider__img" src={photo} alt="фотография" />
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </motion.div>
    // </SectionComponent>
  );
};

export { PhotoSlider };

/* <div className="swiper">
<div className="swiper-wrapper">
  {photos.map((photo, i) => {
    return (
      <div className="swiper-slide" key={i}>
        <div className="photoslider__item _ibg" onClick={() => console.log("sliderphoto click")}>
          <img className="photoslider__img" src={photo} alt="фотография" />
        </div>
      </div>
    );
  })}
</div>
<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
<div className="swiper-pagination"></div>
</div> */
