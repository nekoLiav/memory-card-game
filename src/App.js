import React, { useState } from "react";
import Cards from "./components/Cards";
import Scores from "./components/Scores";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <header>
        <p>Memory Card Game</p>
      </header>
      <div className="main">
        <div className="card-container">
          <Cards handleScore={setCurrentScore} />
        </div>
        <div className="score-container">
          <Scores currentScore={currentScore} />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
