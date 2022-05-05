import React from "react";

const Scores = (props) => {
  return (
    <div className="scores">
      <p>Current Score: {props.currentScore}</p>
      <p>Highest Score: {props.highScore}</p>
    </div>
  );
};

export default Scores;
