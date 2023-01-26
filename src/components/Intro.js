import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Intro.css";
import logo from "../assets/Yin_yang.svg.png";

class Intro extends Component {
  render() {
    return (
      <header className="center intro-component">
        <img src={logo} className="App-logo" alt="The Meditation Game" />
        <div className="zen-zone-intro">
          <h1>Welcome to The Meditation Game.</h1>
          <p>
            A minimalistic meditation game area built by Martin Potkonjak,
            designed to calm you down! Feel the Meditation!
          </p>
          <Link to="/games">
            <button>Let's get started</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Intro;
