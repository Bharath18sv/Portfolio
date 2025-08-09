import React from "react";
import Title from "../components/Title";

function Experience() {
  return (
    <section id="experience">
      <div className="py-16 px-4 md:px-20 md:m-20">
        <Title title="Experience" />

        {/* CBA */}
        <div className="border border-white/30 hover:border-white text-white md:mx-20 md:px-7 py-2 transition duration-300 transform hover:scale-102 rounded-3xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 gap-2">
            {/* Image, role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-8 w-8 md:h-12 md:w-12 ">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="cba.png"
                  alt="CBA services"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-xl md:text-2xl">
                  Software Developer Apprentice
                </h1>
                <p className="text-left text-white/80">
                  Commonwealth Bank of Australia, India
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="md:font-bold">July 2025 - Present</p>
              <p className="text-white/80">Bengaluru, India</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-3 md:px-6 pb-4">
            <ul className="list-disc pl-8 space-y-2 text-sm sm:text-base">
              <li>
                I am currently undergoing a hands-on apprenticeship focused on
                the MERN Stack, Data Engineering, Cloud Computing, and AI
                fundamentals. This program is giving me real-time exposure to
                building and deploying scalable applications, while allowing me
                to continuously strengthen my practical skills across both
                frontend and backend technologies.
              </li>
              <li>
                As part of the apprenticeship, I’m actively contributing to live
                projects by developing full-stack modules, assisting in managing
                cloud infrastructure, and applying basic machine learning models
                to enhance application intelligence. I’m also learning to use
                DevOps tools like Docker and CI/CD pipelines to streamline
                development workflows and gain a deeper understanding of
                real-world software delivery practices.
              </li>
            </ul>
          </div>
        </div>

        {/* Devops */}
        <div className="border border-white/30 hover:border-white text-white md:mx-20 mt-5 md:px-7 py-2 transition transform hover:scale-102 duration-300 rounded-3xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 gap-2">
            {/* Image role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden w-8 h-8 md:h-12 md:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="elevateLabs.png"
                  alt="CBA services"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-xl md:text-2xl">DevOps Intern</h1>
                <p className="text-left">Elevate Labs</p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="md:font-bold">May 2025 - June 2025</p>
              <p>Bengaluru, India</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-6 pb-4">
            <ul className="list-disc pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Led and contributed to real-world DevOps projects, gaining
                hands-on experience with end-to-end software development
                workflows. This included configuring and automating CI/CD
                pipelines using tools like GitHub Actions, Jenkins, and Docker,
                as well as managing cloud infrastructure on AWS to support
                scalable and efficient deployments across different
                environments.
              </li>
              <li>
                Sharpened analytical thinking and problem-solving skills by
                identifying inefficiencies in deployment workflows and
                implementing automation strategies to reduce manual intervention
                and errors. This involved troubleshooting build failures,
                optimizing Docker containers, and ensuring robust version
                control using Git and GitHub, resulting in smoother, faster, and
                more reliable development cycles.
              </li>
            </ul>
          </div>
        </div>

        {/* SIC */}
        <div className="border border-white/30 hover:border-white text-white md:mx-20 mt-5 md:px-7 py-2 transition transform hover:scale-102 duration-300 rounded-3xl">
          {/* Top Section */}
          <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between p-6 gap-2">
            {/* Image role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-8 w-8 md:h-12 md:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="sic.png"
                  alt="CBA services"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-xl md:text-2xl">
                  Trainee - Python & IoT
                </h1>
                <p className="text-center md:text-left">
                  Samsung Innovation Campus
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="md:font-bold">Sept 2024 - Feb 2025</p>
              <p>Bengaluru, India</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-6 pb-4">
            <ul className="list-disc pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Completed comprehensive training in Python,DSA , and
                problem-solving, with an emphasis on building real-world,
                efficient solutions. The training focused on strengthening core
                programming concepts, optimizing algorithms, and developing
                logical thinking through hands-on coding challenges and
                practical use cases relevant to modern software development.
              </li>
              <li>
                Designed and developed real-time IoT solutions by integrating
                multiple sensors with Raspberry Pi, ESP32, and ThingSpeak. These
                projects involved collecting and transmitting sensor data,
                implementing real-time monitoring systems, and building
                end-to-end solutions that bridged hardware and cloud-based
                platforms — enabling remote analytics and automation across
                various IoT use cases.
              </li>
            </ul>
          </div>
        </div>

        {/* Web dev */}
        <div className="border border-white/30 hover:border-white text-white md:mx-20 mt-5 md:px-7 py-2 transition transform hover:scale-102 duration-300 rounded-3xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 gap-2">
            {/* Image role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-8 w-8 md:h-12 md:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="varcons.png"
                  alt="CBA services"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-xl md:text-2xl">
                  Web Developer Intern
                </h1>
                <p className="text-left">Varcons Technologies</p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right ">
              <p className="md:font-bold">May 2024 - June 2024</p>
              <p>Bengaluru, India</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-6 pb-4">
            <ul className="list-disc pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Developed and optimized responsive web interfaces using HTML,
                CSS, and JavaScript, ensuring seamless performance across
                various devices and screen sizes. Focused on creating clean,
                accessible, and user-friendly layouts while following modern
                design principles and best practices for cross-browser
                compatibility.
              </li>
              <li>
                Designed and implemented reusable UI components to improve
                front-end performance, consistency, and code maintainability.
                Leveraged modular coding techniques to reduce redundancy and
                support scalable development, enabling faster feature updates
                and easier collaboration across the team.
              </li>
            </ul>
          </div>
        </div>
        {/* scroll down */}
        {/* <div className="flex justify-center mt-20">
          <a
            href="#skills"
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

export default Experience;
