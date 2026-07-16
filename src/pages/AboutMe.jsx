import React from "react";
import Title from "../components/Title";

function AboutMe() {
  return (
    <section id="about" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-10">
        {/* Heading */}
        <Title title="About Me" />

        {/* Paragraphs */}
        <div className="flex flex-col space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-white border border-white/30 hover:border-white transform transition duration-300 hover:scale-[1.02] m-4 sm:m-5 md:mx-10 lg:mx-40 p-6 sm:p-8 md:p-10 rounded-2xl">
          <p>
            Hi, I'm <strong>Bharath S V</strong>, a Information
            Science Graduate from Don Bosco Institute of Technology. I'm passionate about software development and always eager to learn and grow. I bring strong communication, teamwork, and quick learning abilities
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
            Outside of tech, I enjoy freestyle <strong>Singing</strong> and <strong>Dancing</strong> which help
            keep my creativity flowing.
          </p>

          <p>
            I'm always excited to connect with like-minded individuals and teams
            —{" "}
            <span className="text-blue-400 font-medium">
              let's connect and build something impactful!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
