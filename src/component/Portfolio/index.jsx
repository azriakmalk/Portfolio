import React, { Component } from "react";
import M from "materialize-css";
import { Sanduk } from "../../asset";

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
                src="http://lorempixel.com/900/650/animals/"
                alt="teknik2"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/business/"
                alt="teknik3"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/city/"
                alt="teknik4"
              />
            </div>
          </div>
          <div className="row">
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/fashion/"
                alt="teknik1"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/people/"
                alt="teknik2"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/transport/"
                alt="teknik3"
              />
            </div>
            <div className="col m3">
              <img
                class="materialboxed responsive-img"
                src="http://lorempixel.com/900/650/nightlife/"
                alt="teknik4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
