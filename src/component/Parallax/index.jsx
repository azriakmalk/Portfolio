import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";
import { Parallax } from "../../asset";

export default class index extends Component {
  componentDidMount() {
    const parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax);
  }
  render() {
    return (
      <div>
        <div id="parallax" class="parallax-container scrollspy">
          <div class="parallax">
            <img src={Parallax} alt="parallax" />
          </div>
        </div>
      </div>
    );
  }
}
