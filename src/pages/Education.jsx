import React from "react";
import Title from "../components/Title";

function Education() {
  return (
    <section id="education">
      <div className="py-16 px-4 md:px-20 m-20">
        <Title title="Education" />

        {/* Engineering */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white mx-20 p-7 mt-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                BE - Information Science and Engineering
              </h1>
              <p className="mt-2">Don Bosco Institute of Technology</p>
            </div>

            <div className="flex flex-col items-center">
              <span className=" px-3 py-2 font-bold rounded-3xl bg-blue-500 hover:bg-blue-600 transform transition duration-300 outline-none">
                CGPA - 9.18
              </span>
              <span className="mt-2">2022 - 2026</span>
            </div>
          </div>
        </div>

        {/* PUC */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white mx-20 p-7 mt-5">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-bold">Pre-University - PCMB</h1>
              <p className="mt-2">Sri Sapthagiri PU College</p>
            </div>

            <div className="flex flex-col items-center">
              <span className=" px-3 py-2 font-bold rounded-3xl bg-blue-500  hover:bg-blue-600 outline-none">
                Grade - 91 %
              </span>
              <span className="mt-2">2020 - 2022</span>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white mx-20 p-7 mt-5">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-bold">High School</h1>
              <p className="mt-2">Rotary English School</p>
            </div>

            <div className="flex flex-col items-center">
              <span className=" px-3 py-2 font-bold rounded-3xl bg-blue-500 hover:bg-blue-600 outline-none">
                Grade - 93 %
              </span>
              <span className="mt-2">2017 - 2020</span>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-10 flex justify-center">
        <a
          href="#experience"
          aria-label="Scroll Down"
          className="animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
        >
          ↓
        </a>
      </div>
    </section>
  );
}

export default Education;
