import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

export default class index extends Component {
  componentDidMount() {
    const slider = document.querySelectorAll(".slider");
    M.Slider.init(slider);
  }
  render() {
    return (
      <div>
        <div id="home" class="slider scrollspy">
          <ul class="slides">
            <li>
              <img src="https://lorempixel.com/900/650/food" alt="1" />
              <div class="caption center-align">
                <h3>Center Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/900/650/nature" alt="2" />
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/900/650/cats" alt="3" />
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://lorempixel.com/900/650/sports" alt="4" />
              <div class="caption center-align">
                <h3>Center Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
