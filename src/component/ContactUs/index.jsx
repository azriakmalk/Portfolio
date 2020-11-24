import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class index extends Component {
  render() {
    return (
      <div>
        <div id="contact" class="container scrollspy">
          <h3 class="center">Contact Us</h3>
          <div class="row">
            <div class="col m5 s12">
              <div class="card-panel blue darken-2 center">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                <h5>Contact</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  corporis.
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3304611284252!2d106.88871681748324!3d-6.352363332565062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecc20ec276ab%3A0x9fd4b24285fad3b!2zNsKwMjEnMDguNSJTIDEwNsKwNTMnMjAuOCJF!5e0!3m2!1sid!2sid!4v1606242556078!5m2!1sid!2sid"
                title="maps"
                width="100%"
                height="200"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
              {/* <ul class="collection with-header">
                <li class="collection-header">
                  <h4>Our Office</h4>
                </li>
                <li class="collection-item">Azri Akmal Kurniawan</li>
                <li class="collection-item">Jl.Raya Lap Tembak No.3a</li>
                <li class="collection-item">Jakarta, Indoneia</li>
              </ul> */}
            </div>
            <div class="col m7 s12">
              <form>
                <div class="card-panel">
                  <h5>Please fill out this form</h5>
                  <div class="input-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="validate"
                      required
                    />
                    <label for="name">Name</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="validate"
                    />
                    <label for="name">Email</label>
                  </div>
                  <div class="input-field">
                    <input type="text" name="phone" id="phone" />
                    <label for="phone">Phone Number</label>
                  </div>
                  <div class="input-field">
                    <textarea
                      name="message"
                      id="message"
                      class="materialize-textarea"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                  <button type="submit" class="btn blue darken-2">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
