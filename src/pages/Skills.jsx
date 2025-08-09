import React from "react";
import Title from "../components/Title";

function Skills() {
  return (
    <section id="skills" className="">
      <div className="px-4 md:px-20 m-20">
        <Title title="Skills & Tools" />

        <div className="grid grid-cols-1 md:grid-cols-2 text-white mx-20 gap-5">
          {/* Programming Languages */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-102 duration-300 rounded-2xl mt-10 pb-2">
            {/* Title */}
            <h1 className=" text-center m-4 font-bold text-xl">
              Programming Languages
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-4">
              {/* Python */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Python</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-medium">Java</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-102 duration-300 rounded-2xl mt-10 pb-2">
            {/* Title */}
            <h1 className=" text-center m-4 font-bold text-xl">
              Frontend Frameworks
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-4">
              {/* Tailwind */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-medium">React.js</span>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Next.js</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-102 duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className=" text-center m-4 font-bold text-xl">
              Backend Technologies
            </h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-4">
              {/* Nodejs */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="Nodejs"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Node.js</span>
              </div>

              {/* Express.js */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Express"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-medium">Express.js</span>
              </div>

              {/* Mongodb */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg"
                  alt="MongDB"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">MongoDB</span>
              </div>

              {/* DynamoDB */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg"
                  alt="DynamoDb"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">DynamoDB</span>
              </div>

              {/* Lambda */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img src="Lambda.png" alt="Lambda" className="w-5 h-5" />
                <span className="text-sm font-medium">Lambda</span>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="border border-white/30 hover:border-white transform transition hover:scale-102 duration-300 rounded-2xl pb-2">
            {/* Title */}
            <h1 className=" text-center m-4 font-bold text-xl">DevOps</h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-4">
              {/* Linux */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                  alt="Linux"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Linux</span>
              </div>

              {/* Jenkins */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
                  alt="Java"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-medium">Jenkins</span>
              </div>

              {/* Docker */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Docker</span>
              </div>

              {/* Git */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Git</span>
              </div>

              {/* Bash */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                  alt="Bash"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Bash</span>
              </div>
            </div>
          </div>
        </div>

        {/* AWS */}
        <div className="mx-20 text-white">
          <div className="border border-white/30 hover:border-white transform transition hover:scale-102 duration-300 rounded-2xl mt-5 pb-2">
            {/* Title */}
            <h1 className=" text-center m-4 font-bold text-xl">AWS Services</h1>

            {/* skills */}
            <div className="flex justify-center flex-wrap gap-4">
              {/* EC2 */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="EC2.png"
                  alt="EC2"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">EC2</span>
              </div>

              {/* IAM */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="IAM.png"
                  alt="IAM"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-medium">IAM</span>
              </div>

              {/* EFS */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="EFS.png"
                  alt="EFS"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">EFS</span>
              </div>

              {/* S3 */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="S3.png"
                  alt="S3"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">S3</span>
              </div>

              {/* Cloudwatch */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="CloudWatch.png"
                  alt="CloudWatch"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">CloudWatch</span>
              </div>

              {/* VPC */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="VPC.png"
                  alt="VPC"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">VPC</span>
              </div>

              {/* Route53 */}
              <div className="flex flex-col items-center md:flex-row gap-2 px-4 py-1 m-2 bg-gray-700 hover:bg-blue-400 text-white rounded-2xl transition duration-300">
                <img
                  src="Route53.png"
                  alt="Route53"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Route53</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

//  Frontend & Backend Frameworks
//           <div>
//             <h1>Frontend & Backend Frameworks</h1>
//           </div>
//           {/* Devops */}
//           <div>
//             <h1>Devops</h1>
//           </div>
//           {/* AWS */}
//           <div>
//             <h1>AWS</h1>
//           </div>
{
  /* <div>
        <div>
          <Title title="Skills & tools"/>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {[
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Linux",
              "AWS EC2",
              "AWS S3",
              "IAM",
              "EBS",
              "EFS",
              "MongoDB",
              "CI/CD",
              "Jenkins",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-500 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div> */
}
