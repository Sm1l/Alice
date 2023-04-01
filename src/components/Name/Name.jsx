import React from "react";

import "./name.scss";

const Name = () => {
  return (
    <div className="name">
      <h1 className="name__title">
        <span className="name__name">Алиса</span>
        <span className="name__surname">Соловьева</span>
        <span className="name__profession">
          Преподаватель сценичекой речи <br />и актерского мастерства
        </span>
      </h1>
    </div>
  );
};

export default Name;
