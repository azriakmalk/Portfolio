import React, { Component } from "react";
import M from "materialize-css";
import { Pf2, Pf3, Pf4, Pf5, Pf6, Pf7, Pf8, Sanduk } from "../../asset";

export default class index extends Component {
  componentDidMount() {
    const materialboxed = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(materialboxed);
  }
  render() {
    return (
      <div>
        <div id="portfolio" className="container scrollspy">
          <h3 className="center">Portfolio</h3>
          <div className="row">
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Sanduk}
                alt="teknik1"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf2}
                alt="teknik2"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf3}
                alt="teknik3"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf4}
                alt="teknik4"
              />
            </div>
          </div>
          <div className="row">
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf5}
                alt="teknik1"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf6}
                alt="teknik2"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf7}
                alt="teknik3"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src={Pf8}
                alt="teknik4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
