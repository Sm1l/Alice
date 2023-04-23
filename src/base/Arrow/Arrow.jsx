import React from "react";

import "./arrow.scss";

const ArrowDown = () => {
  return (
    <svg
      className="arrow__down"
      width="5.5rem"
      height="7.5rem"
      viewBox="0 0 74 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="arrow" x1="35.9997" y1="0.943185" x2="36.9997" y2="88.9432" stroke="black" strokeWidth="10" />
      <line className="arrow" x1="3.436" y1="55.3677" x2="40.436" y2="90.3677" stroke="black" strokeWidth="10" />
      <line
        className="arrow"
        y1="-5"
        x2="50.9313"
        y2="-5"
        transform="matrix(-0.726468 0.6872 0.6872 0.726468 74 59)"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

const ArrowRight = () => {
  return (
    <svg
      className="arrow__right"
      width="5.5rem"
      height="7.5rem"
      viewBox="0 0 74 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="arrow" x1="35.9997" y1="0.943185" x2="36.9997" y2="88.9432" stroke="black" strokeWidth="10" />
      <line className="arrow" x1="3.436" y1="55.3677" x2="40.436" y2="90.3677" stroke="black" strokeWidth="10" />
      <line
        className="arrow"
        y1="-5"
        x2="50.9313"
        y2="-5"
        transform="matrix(-0.726468 0.6872 0.6872 0.726468 74 59)"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

const ArrowLeft = () => {
  return (
    <svg
      className="arrow__left"
      width="5.5rem"
      height="7.5rem"
      viewBox="0 0 74 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="arrow" x1="35.9997" y1="0.943185" x2="36.9997" y2="88.9432" stroke="black" strokeWidth="10" />
      <line className="arrow" x1="3.436" y1="55.3677" x2="40.436" y2="90.3677" stroke="black" strokeWidth="10" />
      <line
        className="arrow"
        y1="-5"
        x2="50.9313"
        y2="-5"
        transform="matrix(-0.726468 0.6872 0.6872 0.726468 74 59)"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

export { ArrowDown, ArrowRight, ArrowLeft };
