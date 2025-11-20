import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import RotatingText from "../components/RotatingText";
import Arrow from "../components/Arrow";

function Home() {
  return (
    <section
      id="home"
      className="overflow-hidden min-h-screen flex items-center justify-center px-4 py-12 md:py-16 pt-8"
    >
      {/* Flex Row: Profile Picture + Text Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Profile Picture */}
        <img
          src="/ProfilePic.jpeg"
          alt="Bharath"
          className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 aspect-square object-cover rounded-full shadow-violet-500 shadow-sm border-4 border-violet-400 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-md hover:scale-105 mt-8 md:mt-0"
        />

        {/* Name + Info */}
        <div className="text-center md:text-left space-y-5 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Bharath S V
            </span>
          </h1>

          <RotatingText />

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 md:gap-8 mt-6 text-3xl md:text-4xl">
            <a
              href="https://github.com/Bharath18sv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transform hover:scale-110 transition duration-300 ease-in-out"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-s-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:svbharath2005@gmail.com"
              className="text-white hover:text-gray-100 transform hover:scale-110 transition duration-300 ease-in-out"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 mx-4 md:mx-0">
            {/* View Resume button */}
            <a
              href="/resume.pdf"
              className="px-6 py-3 md:px-8 md:py-4 rounded-4xl text-white text-base md:text-lg bg-blue-400 hover:bg-blue-500 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer text-center"
            >
              View Resume
            </a>
            {/* Contact Me button */}
            <a
              href="/#contact"
              className="px-6 py-3 md:px-8 md:py-4 rounded-4xl text-white text-base md:text-lg bg-transparent border border-white hover:bg-white transform hover:scale-105 hover:text-black transition duration-300 ease-in-out cursor-pointer text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* scroll down */}
      <div className="absolute bottom-8 md:bottom-20 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll Down"
          className="hidden md:block animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
        >
          ↓
        </a>
      </div>
    </section>
  );
}

export default Home;
