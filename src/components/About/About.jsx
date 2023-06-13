import React from "react";
import SectionComponent from "../SectionComponent";

const About = () => {
  return (
    <SectionComponent
      title="Обо мне"
      side="left"
      children={
        <>
          <ul className="sectioncomponent__list">
            <li className="sectioncomponent__item">
              14+ лет стаж преподавания по ораторскому искусству, сценическому движению и пластике как у детей от 6 лет,
              так и у взрослых.
            </li>
            <li className="sectioncomponent__item">
              Преподаватель ораторского мастерства в одной из ведущих Российских школ ораторского искусства "Король
              Говорит".
            </li>
            <li className="sectioncomponent__item">
              Магистр в области психолого-педагогического образования, автор научной работы...
            </li>
            <li className="sectioncomponent__item">Актриса театра (театр НАТ) и кино.</li>
            <li className="sectioncomponent__item">Главный ...руководитель/режиссер проекта "....." МГППУ</li>
            <li className="sectioncomponent__item">Теле и радиоведущая.</li>
          </ul>
        </>
      }
    />
  );
};

export default About;
