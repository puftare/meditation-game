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
            A minimalistic meditation game built by{" "}
            <a
              href="https://github.com/puftare"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Martin Potkonjak
            </a>
            , designed to calm you down! Feel the Meditation!
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
