import React from "react";
import GameSwitch from "./GameSwitch";
import GameSwirl from "./GameSwirl";
import GameBreak from "./GameBreak";
import StartGame from "./StartGame";

const Game = ({ name, time, completedGame }) => {
  switch (name) {
    case "swirl":
      return <GameSwirl time={time} completedGame={completedGame} />;
    case "break":
      return <GameBreak time={time} completedGame={completedGame} />;
    case "switch":
      return <GameSwitch time={time} completedGame={completedGame} />;
    default:
      return <StartGame />;
  }
};

export default Game;
