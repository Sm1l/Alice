import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePageCheckbox } from "../../store/headerSlice";
import { BsSun, BsSunFill, BsMoonStars, BsMoonStarsFill } from "react-icons/bs";

import "./checkbox.scss";

const Checkbox = ({ handleClick }) => {
  const dispatch = useDispatch();
  const pageCheckbox = useSelector((store) => store.header.pageCheckbox);

  // const checkboxHandleChange = () => {
  //   dispatch(togglePageCheckbox());
  // };

  return (
    <div className="checkbox">
      <BsSun className="svg" />
      <div id="container">
        <div className="toggle">
          <input
            type="checkbox"
            name="toggle"
            className="check-checkbox"
            id="mytoggle"
            onClick={handleClick}
            // checked={pageCheckbox}
          />
          <label className="checklabel" htmlFor="mytoggle">
            <div id="background"></div>
            <span className="face">
              <span className="facecontainer">
                <span className="eye left"></span>
                <span className="eye right"></span>
                <span className="mouth"></span>
              </span>
            </span>
          </label>
        </div>
      </div>
      <BsMoonStars className="svg" />
    </div>
  );
};

export default Checkbox;
