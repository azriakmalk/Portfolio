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
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, iusto dolores dignissimos ipsum eum, esse vero,
                dolorem atque unde iste exercitationem mollitia ducimus amet
                sunt quos. Debitis voluptatem dolorem maxime.
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
