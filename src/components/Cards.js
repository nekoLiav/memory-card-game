import React, { useEffect, useState } from "react";
import img1 from "../assets/Giyu_anime.png";
import img2 from "../assets/Kyojuro_anime.png";
import img3 from "../assets/Tengen_anime.png";
import img4 from "../assets/Shinobu_anime.png";
import img5 from "../assets/Obanai_anime.png";
import img6 from "../assets/Sanemi_anime.png";
import img7 from "../assets/Gyomei_anime.png";
import img8 from "../assets/Muichiro_anime.png";
import img9 from "../assets/Mitsuri_anime.png";
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
      }, 3000);
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
    const cardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

  const images = [
    { img: img1, text: "Tomioka Giyū" },
    { img: img2, text: "Rengoku Kyōjurō" },
    { img: img3, text: "Uzui Tengen" },
    { img: img4, text: "Kochō Shinobu" },
    { img: img5, text: "Iguro Obanai" },
    { img: img6, text: "Shinazugawa Sanemi" },
    { img: img7, text: "Himejima Gyōmei" },
    { img: img8, text: "Tokitō Muichirō" },
    { img: img9, text: "Kanroji Mitsuri" },
  ];

  return (
    <div className="main">
      <div className="card-container">
        <div className="cards">
          {cards.map((card) => (
            <div
              className="card"
              key={card}
              onClick={() => handleCardClick(card)}
            >
              <img className="card-img" src={images[card].img}></img>
              <p>{images[card].text}</p>
            </div>
          ))}
        </div>
      </div>
      <Scores
        currentScore={roundClickedCards.length}
        highScore={sessionClickedCards.length}
      />
    </div>
  );
};

export default Cards;
