import React from "react";
import "./checkbox.scss";

const Checkbox = () => {
  return (
    <div className="checkbox">
      <div id="container">
        <div className="toggle">
          <input type="checkbox" name="toggle" className="check-checkbox" id="mytoggle" />
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
