import React from "react";

function Arrow() {
  return (
    <div>
      <div className="absolute bottom-10 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll Down"
          className="animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
        >
          ↓
        </a>
      </div>
    </div>
  );
}

export default Arrow;
