import React from "react";
import Title from "../components/Title";

function AboutMe() {
  return (
    <section id="about" className="">
      <div className="md:py-10 md:m-20">
        {/* Heading */}
        <Title title="About Me" />

        {/* Paragraphs */}
        <div className="flex flex-col space-y-6 text-lg leading-relaxed text-white border border-white/30 hover:border-white transform transition duration-300 hover:scale-102 m-5 md:mx-40 p-10 rounded-2xl">
          <p>
            Hi, I’m <strong>Bharath S V</strong>, a Final Year Information
            Science student at Don Bosco Institute of Technology. I'm currently
            a{" "}
            <strong className="text-blue-400">
              Software Developer Apprentice
            </strong>{" "}
            at <strong>CBA Services Pvt Ltd</strong>, where I'm gaining industry
            exposure while building a solid foundation in software development.
            I bring strong communication, teamwork, and quick learning abilities
            to every environment I work in.
          </p>

          <p>
            I have hands-on experience in modern development practices including
            version control, scripting, cloud fundamentals, and automation
            workflows. I'm actively deepening my understanding of core computer
            science principles and exploring scalable, production-ready tools
            used in DevOps and software engineering.
          </p>

          <p>
            Outside of tech, I enjoy freestyle Singing and Dancing which help
            keep my creativity flowing.
          </p>

          <p>
            I’m always excited to connect with like-minded individuals and teams
            —{" "}
            <span className="text-blue-400 font-medium">
              let’s connect and build something impactful!
            </span>
          </p>
        </div>

        {/* scroll down */}
        {/* <div className="flex justify-center mt-20">
          <a
            href="#education"
            aria-label="Scroll Down"
            className="animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
          >
            ↓
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default AboutMe;
