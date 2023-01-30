import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectGameType extends Component {
  render() {
    return (
      <section className="center vertical">
        <h1 className="section-select">Select your Game</h1>
        <div className="section-options">
          <Link to="swirl">
            <button>SWIRL</button>
          </Link>
          <Link to="break">
            <button>BREAK</button>
          </Link>
          <Link to="switch">
            <button>SWITCH</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default SelectGameType;
