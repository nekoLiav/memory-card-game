import React, { useEffect, useState } from "react";
import Scores from "./Scores";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [roundClickedCards, setRoundClickedCards] = useState([]);
  const [sessionClickedCards, setSessionClickedCards] = useState([]);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    if (roundClickedCards.length === 9) {
      setTimeout(() => {
        setRoundClickedCards([]);
      }, 5000);
    } else {
      setCards(shuffleCards());
    }
  }, [roundClickedCards]);

  useEffect(() => {
    if (sessionClickedCards.length === 9) {
      setSessionClickedCards([]);
    }
  }, [sessionClickedCards]);

  const handleCardClick = (key) => {
    if (roundClickedCards.length < 9) {
      if (roundClickedCards.includes(key)) {
        setRoundClickedCards([]);
      } else {
        setRoundClickedCards((clicked) => [...clicked, key]);
      }
      if (!sessionClickedCards.includes(key)) {
        setSessionClickedCards((clicked) => [...clicked, key]);
      }
    }
  };

  //Fisher-Yates Shuffle, courtesy of stackoverflow
  const shuffleCards = () => {
    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentIndex = cardArray.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cardArray[currentIndex], cardArray[randomIndex]] = [
        cardArray[randomIndex],
        cardArray[currentIndex],
      ];
    }

    return cardArray;
  };

  return (
    <div className="main">
      <div className="card-container">
        <div className="cards">
          {cards.map((card) => (
            <div key={card} onClick={() => handleCardClick(card)}>
              <p>{card}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="score-container">
        <Scores
          currentScore={roundClickedCards.length}
          highScore={sessionClickedCards.length}
        />
      </div>
    </div>
  );
};

export default Cards;
