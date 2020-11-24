import React, { Component } from "react";
import M from "materialize-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class index extends Component {
  componentDidMount() {
    const sidenav = document.querySelectorAll(".sidenav");
    const scroll = document.querySelectorAll(".scrollspy");
    M.Sidenav.init(sidenav);
    M.ScrollSpy.init(scroll, {
      scrollOffset: 60,
    });
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav id="navbar" className="indigo scrollspy">
            <div className="container">
              <div class="nav-wrapper">
                <a href="#home" class="brand-logo">
                  AAK
                </a>
                <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
                  <FontAwesomeIcon icon={faBars} />
                </a>
                <ul class="right hide-on-med-and-down">
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#parallax">Skills</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#parallax">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
