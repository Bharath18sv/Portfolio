import React from "react";
import Title from "../components/Title";

function Experience() {
  return (
    <section id="experience" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Experience" />

        {/* CBA */}
        <div className="border border-white/30 hover:border-white text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 px-4 sm:px-6 py-4 transition duration-300 transform hover:scale-[1.02] rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Image, role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-3 sm:gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="cba.png"
                  alt="CBA services"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Software Developer Apprentice
                </h1>
                <p className="text-left text-white/80 text-sm sm:text-base">
                  Commonwealth Bank of Australia, India
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                July 2025 - Present
              </p>
              <p className="text-white/80 text-sm">Remote</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
              <li>
                I am currently undergoing a hands-on apprenticeship focused on
                the MERN Stack, Data Engineering, Cloud Computing, and AI
                fundamentals. This program is giving me real-time exposure to
                building and deploying scalable applications, while allowing me
                to continuously strengthen my practical skills across both
                frontend and backend technologies.
              </li>
              <li>
                As part of the apprenticeship, I'm actively contributing to live
                projects by developing full-stack modules, assisting in managing
                cloud infrastructure, and applying basic machine learning models
                to enhance application intelligence. I'm also learning to use
                DevOps tools like Docker and CI/CD pipelines to streamline
                development workflows and gain a deeper understanding of
                real-world software delivery practices.
              </li>
            </ul>
          </div>
        </div>

        {/* SIC */}
        <div className="border border-white/30 hover:border-white text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 mt-5 sm:mt-6 px-4 sm:px-6 py-4 transition transform hover:scale-[1.02] duration-300 rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Image role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-3 sm:gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="sic.png"
                  alt="Samsung Innovation Campus"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Trainee - Python & IoT
                </h1>
                <p className="text-center sm:text-left text-sm sm:text-base">
                  Samsung Innovation Campus
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                Sept 2024 - Feb 2025
              </p>
              <p className="text-sm">Bengaluru, India</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
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
      </div>
    </section>
  );
}

export default Experience;
