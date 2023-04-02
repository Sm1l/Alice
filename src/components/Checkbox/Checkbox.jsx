import React from "react";
import "./checkbox.scss";

const Checkbox = () => {
  return (
    <div className="checkbox">
      <div id="container">
        <div class="toggle">
          <input type="checkbox" name="toggle" class="check-checkbox" id="mytoggle" />
          <label class="check-label" for="mytoggle">
            <div id="background"></div>
            <span class="face">
              <span class="face-container">
                <span class="eye left"></span>
                <span class="eye right"></span>
                <span class="mouth"></span>
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
