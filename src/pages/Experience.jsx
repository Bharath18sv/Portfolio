import React from "react";
import Title from "../components/Title";

const Highlight = ({ children }) => (
  <span className="text-white font-bold">{children}</span>
);

function Experience() {
  return (
    <section id="experience" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Experience" />

        {/* Johnson Controls */}
        <div className="border border-white/30 hover:border-white text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 mt-5 sm:mt-6 px-4 sm:px-6 py-4 transition duration-300 transform hover:scale-[1.02] rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Image, role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-3 sm:gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="experience/JCI-logo.png"
                  alt="Johnson Controls"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  IT Intern
                </h1>
                <p className="text-left text-white/80 text-sm sm:text-base">
                  Johnson Controls
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                Jan 2026 - June 2026
              </p>
              <p className="text-white/80 text-sm">Hybrid</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3 text-white/80">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Provided end-to-end administration and troubleshooting for <Highlight>Microsoft 365</Highlight>, <Highlight>Microsoft Teams</Highlight>, and <Highlight>Teams Phone</Highlight> System environments by analysing logs, configurations, and service
                dependencies to resolve access, collaboration, and telephony
                issues across distributed enterprise systems. Managed user
                requests through <Highlight>ServiceNow</Highlight>, including mailbox administration,
                Distribution Group management, Teams configuration updates, and
                access modifications while consistently meeting SLA targets.
              </li>
              <li>
                Administered the <Highlight>NICE CXone</Highlight> contact center platform by
                performing user provisioning, role-based access control updates,
                and operational support. Monitored Voice Quality Metrics (VQM),
                real-time call analytics, and agent performance dashboards to
                proactively identify, investigate, and reduce call connectivity
                and quality issues, improving overall contact center reliability
                and user experience.
              </li>
            </ul>
          </div>
        </div>

        {/* THWorks */}
        <div className="border border-white/30 hover:border-white text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 mt-5 px-4 sm:px-6 py-4 transition duration-300 transform hover:scale-[1.02] rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Image, role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-3 sm:gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="experience/THWorks.jpeg"
                  alt="Johnson Controls"
                />
              </span>
              {/* Role and Company */}
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Software Developer Intern
                </h1>
                <p className="text-left text-white/80 text-sm sm:text-base">
                  THWorks
                </p>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="text-center sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                Nov 2025 - Jan 2026
              </p>
              <p className="text-white/80 text-sm">Bengaluru</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3 text-white/80">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Developed and maintained scalable <Highlight>Node.js</Highlight> microservices as part of an event-driven automation platform, where I customized text-to-speech (TTS) and speech-to-text (STT) pipelines to support AI-powered text and image generation based on user inputs. Additionally, I integrated enterprise and third-party applications such as LinkedIn, Slack, and other external services using <Highlight>OAuth 2.0</Highlight> and <Highlight>REST</Highlight> APIs, enabling seamless automated content publishing and cross-platform workflow orchestration.
              </li>
              <li>
                Contributed to the development of a <Highlight>React Native</Highlight> mobile application by implementing offline data synchronization capabilities, AI-powered speech-to-notes processing, and contact management features. The application also leveraged local <Highlight>Large Language Model (LLM)</Highlight> integration to provide intelligent offline assistance, enhancing user productivity and delivering a robust mobile experience across varying network conditions.
              </li>
            </ul>
          </div>
        </div>

        {/* CBA */}
        <div className="border border-white/30 hover:border-white text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 mt-5 sm:mt-6 px-4 sm:px-6 py-4 transition duration-300 transform hover:scale-[1.02] rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Image, role and company*/}
            <div className="flex justify-center items-start sm:items-center gap-3 sm:gap-4">
              {/* image */}
              <span className="relative flex shrink-0 rounded-full overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src="experience/cba.png"
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
                July 2025 - December 2025
              </p>
              <p className="text-white/80 text-sm">Remote</p>
            </div>
          </div>

          {/* Description List */}
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3 text-white/80">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Successfully completed a hands-on apprenticeship focused on <Highlight>JavaScript</Highlight>, <Highlight>Linux</Highlight>, the <Highlight>MERN</Highlight> Stack, and <Highlight>AWS</Highlight> fundamentals. The program provided practical exposure to building and deploying scalable applications while strengthening my understanding of both frontend and backend development concepts.
              </li>
              <li>
                During the apprenticeship, I worked on real-world projects and gained experience in developing full-stack applications, working with cloud services on AWS, and utilizing Linux-based development environments. As part of the program, I successfully designed and presented two projects, demonstrating my ability to apply technical concepts to solve practical problems and effectively communicate solutions to stakeholders.
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
                  src="experience/sic.png"
                  alt="Samsung Innovation Campus"
                />
              </span>
              {/* Role and Company */}
              <div className="text-white/80">
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
          <div className="px-2 sm:px-4 md:px-6 pb-4 pt-3 text-white/80">
            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base">
              <li>
                Completed comprehensive training in <Highlight>Python</Highlight>, <Highlight>DSA</Highlight>, and
                problem-solving, with an emphasis on building real-world,
                efficient solutions. The training focused on strengthening core
                programming concepts, optimizing algorithms, and developing
                logical thinking through hands-on coding challenges and
                practical use cases relevant to modern software development.
              </li>
              <li>
                Designed and developed real-time IoT solutions by integrating
                multiple sensors with <Highlight>Raspberry Pi</Highlight>, <Highlight>ESP32</Highlight>, and <Highlight>ThingSpeak</Highlight>. These
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
