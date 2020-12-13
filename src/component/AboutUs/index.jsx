import React, { Component } from "react";
import { Azri } from "../../asset";
import M from "materialize-css";

export default class index extends Component {
  componentDidMount() {
    const material = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(material);
  }
  render() {
    return (
      <div>
        <div id="about" className="container scrollspy">
          <div className="row">
            <h3 className="center">About Us</h3>
            <div className="col m6 s12">
              <h4>BACKGROUND INFO</h4>
              <p>
                I am a hard worker who always wants to learn something new
                especially in technology. Having experience in developing and
                implementing a java application through a project opportunity at
                a company in jakarta.
              </p>
            </div>
            <div className="col m3 s12 offset-m1">
              <img class="materialboxed responsive-img" src={Azri} alt="azri" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
