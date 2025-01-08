"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: "ease-out", // Easing type
      once: false, // Whether animation should happen only once
      offset: 100, // Offset from the element
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Scroll to see the animation</h1>

      {/* Animated Element */}
      <div
        className="w-64 h-64 bg-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold"
        data-aos="fade-up"
      >
        I move up on scroll
      </div>

      {/* Add more elements */}
      <div
        className="w-64 h-64 bg-green-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold mt-20"
        data-aos="fade-up"
      >
        Another element
      </div>
    </div>
  );
};

export default ScrollAnimation;
