import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <footer
          class="indigo darken-4
 white-text center"
        >
          <p class="flow-text">
            Azri Akmal Kurniawan <FontAwesomeIcon icon={faHeart} size="3x" />{" "}
            Devi Novianti
          </p>
        </footer>
      </div>
    );
  }
}
