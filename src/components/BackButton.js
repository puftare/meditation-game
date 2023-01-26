import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Yin_yang.svg.png";

const BackButton = ({ endGame }) => (
  <Link to="/">
    <div
      className="back"
      onClick={(event) => {
        endGame(event);
      }}
    >
      <img src={logo} className="App-logo" alt="The Meditation Game" />
    </div>
  </Link>
);

export default BackButton;
