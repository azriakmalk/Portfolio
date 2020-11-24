import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import About from "./component/AboutUs";
import Parallax from "./component/Parallax";
import Portfolio from "./component/Portfolio";
import Contact from "./component/ContactUs";
import "materialize-css/dist/css/materialize.min.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <About />
        <Parallax />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
