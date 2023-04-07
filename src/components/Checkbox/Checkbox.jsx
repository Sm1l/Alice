import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePageCheckbox } from "../../store/headerSlice";

import "./checkbox.scss";

const Checkbox = () => {
  const dispatch = useDispatch();
  const pageCheckbox = useSelector((store) => store.header.pageCheckbox);
  // console.log(pageCheckbox);
  // const [checked, setChecked] = useState(false);
  // console.log(checked);

  const checkboxHandleChange = () => {
    dispatch(togglePageCheckbox());
    // setChecked(!checked);
  };

  return (
    <div className="checkbox">
      <div id="container">
        <div className="toggle">
          <input
            type="checkbox"
            name="toggle"
            className="check-checkbox"
            id="mytoggle"
            onChange={checkboxHandleChange}
            checked={pageCheckbox}
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
    </div>
  );
};

export default Checkbox;
