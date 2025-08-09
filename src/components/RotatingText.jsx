import React, { useState, useEffect } from "react";

function RotatingText() {
  const phrases = [
    "Final Year Information Science Student",
    "Software Developer Apprentice",
    "Aspiring DevOps Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 500);
    }, 3000); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-semibold transition-opacity duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {phrases[currentIndex]}
    </h2>
  );
}

export default RotatingText;
