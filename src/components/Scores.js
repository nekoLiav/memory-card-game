import React, { useState, useEffect } from "react";

const Scores = (props) => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (props.currentScore > highScore) {
      setHighScore(props.currentScore);
    }
  }, [props.currentScore]);

  return (
    <div className="scores">
      {props.currentScore === 9 ? (
        <p>You Win! :D</p>
      ) : (
        <div>
          <p>Current Score: {props.currentScore}</p>
          <p>Highest Score: {highScore}</p>
        </div>
      )}
    </div>
  );
};

export default Scores;
