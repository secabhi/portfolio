import React, { useEffect, useState } from "react";
import Cards from "../Cards";

const Carousel = ({ cards, handleClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardCount = cards.length;
  const visibleCards = 3; // Number of cards visible in the active screen

  // Function to go to the next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
  };

  // Function to go to the previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cardCount - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="carousel rounded-box w-full">
        {cards.map((card, index) => (
          <div key={index} className="carousel-item w-1/3">
            <Cards key={index} {...card} onClick={() => handleClick(index)} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {cards.map((_, index) => (
          <a key={index} href={`#image${index}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
