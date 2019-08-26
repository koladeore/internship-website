import React, { Component } from "react";
import NavigationBar from "../Headers/header.js";
import LandingPage from "./landing-page/landing.js";
import LandingText from "./landing-pagetext/landingtext.js";

class Home extends Component {
  render() {
    return (
        <div>
            <NavigationBar />
            <LandingPage />
            <LandingText />
        </div>
    );
  }
}

export default Home;
