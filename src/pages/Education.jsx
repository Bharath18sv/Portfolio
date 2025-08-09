import React from "react";
import Title from "../components/Title";

function Education() {
  return (
    <section id="education">
      <div className="md:py-10 px-3 md:px-20 md:m-20">
        <Title title="Education" />

        {/* Engineering */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white md:mx-20 p-4 md:p-7 ">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
            {/* course and institution */}
            <div className="flex flex-col flex-wrap md:items-start items-center">
              <h1 className="text-xl text-center md:text-2xl font-bold">
                BE - Information Science and Engineering
              </h1>
              <p className="md:mt-2 text-white/80">
                Don Bosco Institute of Technology
              </p>
            </div>

            {/* marks and duration */}
            <div className="flex flex-col items-center">
              <span className=" px-3 md:py-2 font-bold rounded-3xl bg-gray-600 hover:bg-blue-400 transform transition duration-300 outline-none">
                CGPA - 9.16
              </span>
              <span className="mt-2 text-white/80">2022 - 2026</span>
            </div>
          </div>
        </div>

        {/* PUC */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white md:mx-20 p-4 md:p-7 mt-5">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="flex flex-col md:items-start items-center">
              <h1 className="text-xl md:text-2xl font-bold">
                Pre-University - PCMB
              </h1>
              <p className="md:mt-2 text-white/80">
                Sri Sapthagiri PU College
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className=" px-3 md:py-2 font-bold rounded-3xl bg-gray-600  hover:bg-blue-400 outline-none">
                Grade - 91 %
              </span>
              <span className="mt-2 text-white/80">2020 - 2022</span>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="border border-white/30 hover:border-white hover:scale-102 transform transition duration-300 rounded-2xl text-white md:mx-20 p-4 md:p-7 mt-5">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="flex flex-col flex-wrap md:items-start items-center">
              <h1 className="text-xl md:text-2xl font-bold">High School</h1>
              <p className="md:mt-2 text-white/80">Rotary English School</p>
            </div>

            <div className="flex flex-col items-center">
              <span className=" px-3 md:py-2 font-bold rounded-3xl bg-gray-600 hover:bg-blue-400 outline-none">
                Grade - 93 %
              </span>
              <span className="mt-2 text-white/80">2017 - 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="-mt-10 flex justify-center">
        <a
          href="#experience"
          aria-label="Scroll Down"
          className="animate-bounce text-white text-3xl hover:text-blue-400 transition cursor-pointer"
        >
          ↓
        </a>
      </div> */}
    </section>
  );
}

export default Education;
