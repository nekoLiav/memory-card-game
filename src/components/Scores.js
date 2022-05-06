import React from "react";

const Scores = (props) => {
  return (
    <div className="scores">
      {props.currentScore === 9 && <p className="win">You Win! :D</p>}
      {props.currentScore < 9 && (
        <div>
          <p>Current Score: {props.currentScore}</p>
          <p>Highest Score: {props.highScore}</p>
        </div>
      )}
    </div>
  );
};

export default Scores;
