import React from "react";
import "./photo.scss";
import photo from "./kvoka.jpg";

const Photo = () => {
  return (
    <div className="photo">
      <p className="photo__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi vitae saepe adipisci! Nobis, deleniti aut?
        Officiis, consequatur quae alias qui natus quidem asperiores numquam minima autem recusandae ea voluptatem quia?
      </p>
      <p className="photo__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi vitae saepe adipisci! Nobis, deleniti aut?
        Officiis, consequatur quae alias qui natus quidem asperiores numquam minima autem recusandae ea voluptatem quia?
      </p>
      <div className="photo__photo _ibg">
        <img src={photo} alt="Фотография Соловьевой Алисы" />
      </div>
    </div>
  );
};

export default Photo;
