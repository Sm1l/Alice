import React from "react";
import SectionComponent from "../SectionComponent";

const Work = () => {
  return (
    <SectionComponent
      title="Мои работы"
      side="left"
      children={
        <>
          <p className="sectioncomponent__text">Здесь будут видосики</p>
          <p className="sectioncomponent__text">Здесь будут видосики</p>
          <p className="sectioncomponent__text"> Здесь будут видосики</p>
          <p className="sectioncomponent__text"> Здесь будут видосики</p>
          <p className="sectioncomponent__text"> Здесь будут видосики</p>
          <p className="sectioncomponent__text"> Здесь будут видосики</p>
          <p className="sectioncomponent__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur beatae dolores molestiae
            sapiente porro eos sed illo? Nulla, delectus beatae molestiae eaque corporis culpa? Libero modi eos
            perspiciatis expedita.
          </p>
          <p className="sectioncomponent__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur beatae dolores molestiae
            sapiente porro eos sed illo? Nulla, delectus beatae molestiae eaque corporis culpa? Libero modi eos
            perspiciatis expedita.
          </p>
        </>
      }
    />
  );
};

export default Work;
