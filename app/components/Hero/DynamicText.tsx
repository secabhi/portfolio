"use client"
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const DynamicTextWithAOS = () => {
  const texts = ["Designer", "Developer", "Teacher", "Learner"];
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [texts.length]);

  return (
    <div>
      <h1 data-aos="fade-up" data-aos-duration="1000" className="">
        <span className={colors[currentIndex]}>{texts[currentIndex]}</span>
      </h1>
    </div>
  );
};

export default DynamicTextWithAOS;
