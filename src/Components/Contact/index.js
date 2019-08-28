import React, { Component } from "react";
import NavigationBar from "../Headers/header.js";
import ContactUs from "./contact/contact.js";
import LandingPage from "../Home/landing-page/landing.js"

class Contact extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
          <ContactUs />
          <LandingPage />
        </div>
    );
  }
}

export default Contact;
