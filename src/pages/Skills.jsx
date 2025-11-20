import React from "react";
import Title from "../components/Title";

function Skills() {
  return (
    <section id="skills" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Skills & Tools" />

        <div className="grid grid-cols-1 md:grid-cols-2 text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 gap-4 sm:gap-5">
          {/* Programming Languages */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className="text-center m-4 font-bold text-lg sm:text-xl">
              Programming Languages
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
              {/* Python */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Python</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium">
                  Java (Core)
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">
                  JavaScript
                </span>
              </div>

              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className="text-center m-4 font-bold text-lg sm:text-xl">
              Backend Technologies
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
              {/* Nodejs */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="Nodejs"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Node.js</span>
              </div>

              {/* Express.js */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Express"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium">
                  Express.js
                </span>
              </div>

              {/* Mongoose */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
                  alt="Mongoose"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Mongoose</span>
              </div>

              {/* FastAPI */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
                  alt="FastAPI"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium">FastAPI</span>
              </div>

              {/* Lambda */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="Lambda.png"
                  alt="Lambda"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Lambda</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className="text-center m-4 font-bold text-lg sm:text-xl">
              Frontend Frameworks
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
              {/* Tailwind */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">
                  Tailwind CSS
                </span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium">React.js</span>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Next.js</span>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className="text-center m-4 font-bold text-lg sm:text-xl">
              Databases
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
              {/* Mongodb */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg"
                  alt="MongoDB"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">MongoDB</span>
              </div>

              {/* Postgres */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
                  alt="Postgres"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AWS */}
        <div className="mx-2 sm:mx-4 md:mx-10 lg:mx-20 text-white mt-5 sm:mt-6">
          <div className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className="text-center m-4 font-bold text-lg sm:text-xl">
              DevOps & Cloud Services
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
              {/* Linux */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                  alt="Linux"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Linux</span>
              </div>
              {/* Bash */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                  alt="Bash"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Bash</span>
              </div>
              {/* Jenkins */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
                  alt="Jenkins"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium">Jenkins</span>
              </div>

              {/* Docker */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Docker</span>
              </div>

              {/* Git */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Git</span>
              </div>
              {/* EC2 */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="EC2.png"
                  alt="EC2"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">EC2</span>
              </div>

              {/* S3 */}
              <div className="flex flex-col items-center sm:flex-row gap-2 px-3 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img src="S3.png" alt="S3" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">S3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
