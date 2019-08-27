import React, { Component } from "react";
import NavigationBar from "../Headers/header.js";
import AboutUs from "./about/about.js"

class About extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
          <AboutUs />
        </div>
    );
  }
}

export default About;
