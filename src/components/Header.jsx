import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full backdrop-blur-lg z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex flex-wrap flex:col sm:flex-row text-sm justify-evenly gap-6 text-blue-300 md:text-lg font-medium w-full pt-1">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-white transition">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li> */}
            <li>
              <a href="#certifications" className="hover:text-white transition">
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
