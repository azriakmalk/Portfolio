import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

export default class index extends Component {
  componentDidMount() {
    var parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax);
  }
  render() {
    return (
      <div>
        <div id="parallax" class="parallax-container scrollspy">
          <div class="parallax">
            <img src="https://lorempixel.com/900/650/nature" alt="parallax" />
          </div>
        </div>
      </div>
    );
  }
}
