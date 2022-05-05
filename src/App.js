import React from "react";
import Cards from "./components/Cards";
import Scores from "./components/Scores";

const App = () => {
  return (
    <div className="App">
      <header>
        <p>Memory Card Game</p>
      </header>
      <div className="main">
        <div className="card-container">
          <Cards />
        </div>
        <div className="score-container">
          <Scores />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
