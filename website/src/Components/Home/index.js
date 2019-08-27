import React, { Component } from "react";
import NavigationBar from "../Headers/header.js";
import LandingPage from "./landing-page/landing.js";
import LandingText from "./landing-pagetext/landingtext.js";
import TimeUnit from "./time_unit/time_unit.js";

class About extends Component {
  render() {
    return (
        <div>
            <NavigationBar />
            <LandingPage />
            <LandingText />
            <TimeUnit />
        </div>
    );
  }
}

export default About;
