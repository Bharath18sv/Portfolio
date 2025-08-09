import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import RotatingText from "../components/RotatingText";
import Arrow from "../components/Arrow";

function Home() {
  return (
    <section
      id="home"
      className="overflow-hidden min-h-screen flex items-center justify-center px-6 py-16 pt-0 -mb-20"
    >
      {/* Flex Row: Profile Picture + Text Content */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Profile Picture */}
        <img
          src="/ProfilePic.jpeg"
          alt="Bharath"
          className="w-[400px] h-[400px] aspect-square object-cover rounded-full border-[4px] border-white shadow-blue-400 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:scale-105"
        />

        {/* Name + Info */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">Bharath S V</span>
          </h1>

          <RotatingText />

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-8 mt-4 text-4xl">
            <a
              href="https://github.com/Bharath18sv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-s-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-white hover:text-gray-400 transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            {/* View Resume button */}
            <a
              href="/resume.pdf" // or your external link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 px-8 py-4 rounded-4xl text-white text-lg hover:bg-blue-500 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer text-center"
            >
              View Resume
            </a>

            {/* Contact Me button */}
            <a
              href="/#contact" // your contact page route
              className="bg-transparent border border-white px-8 py-4 rounded-4xl text-white text-lg hover:bg-white transform hover:scale-110 hover:text-black transition duration-300 ease-in-out cursor-pointer text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll Down"
          className="animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
        >
          ↓
        </a>
      </div>
    </section>
  );
}

export default Home;
