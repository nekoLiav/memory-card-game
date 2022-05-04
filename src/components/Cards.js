import React, { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, []);

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

    return setCards(cardArray);
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <div key={card} onClick={shuffleCards}>
          <p>{card}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
