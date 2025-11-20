import React from "react";
import Title from "../components/Title";

function Education() {
  return (
    <section id="education" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Education" />

        {/* Engineering */}
        <div className="border border-white/30 hover:border-white hover:scale-[1.02] transform transition duration-300 rounded-2xl text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 p-4 sm:p-5 md:p-7">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-4">
            {/* course and institution */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                BE - Information Science and Engineering
              </h1>
              <p className="mt-1 sm:mt-2 text-white/80 text-sm sm:text-base">
                Don Bosco Institute of Technology
              </p>
            </div>

            {/* marks and duration */}
            <div className="flex flex-col items-center">
              <span className="px-4 py-2 sm:px-5 sm:py-2 font-bold rounded-3xl bg-gray-600 hover:bg-blue-400 transform transition duration-300 outline-none text-sm sm:text-base">
                CGPA - 9.16
              </span>
              <span className="mt-2 text-white/80 text-sm">2022 - 2026</span>
            </div>
          </div>
        </div>

        {/* PUC */}
        <div className="border border-white/30 hover:border-white hover:scale-[1.02] transform transition duration-300 rounded-2xl text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 p-4 sm:p-5 md:p-7 mt-5 sm:mt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                Pre-University - PCMB
              </h1>
              <p className="mt-1 sm:mt-2 text-white/80 text-sm sm:text-base">
                Sri Sapthagiri PU College
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="px-4 py-2 sm:px-5 sm:py-2 font-bold rounded-3xl bg-gray-600 hover:bg-blue-400 outline-none text-sm sm:text-base">
                Grade - 91 %
              </span>
              <span className="mt-2 text-white/80 text-sm">2020 - 2022</span>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="border border-white/30 hover:border-white hover:scale-[1.02] transform transition duration-300 rounded-2xl text-white mx-2 sm:mx-4 md:mx-10 lg:mx-20 p-4 sm:p-5 md:p-7 mt-5 sm:mt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                High School
              </h1>
              <p className="mt-1 sm:mt-2 text-white/80 text-sm sm:text-base">
                Rotary English School
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="px-4 py-2 sm:px-5 sm:py-2 font-bold rounded-3xl bg-gray-600 hover:bg-blue-400 outline-none text-sm sm:text-base">
                Grade - 93 %
              </span>
              <span className="mt-2 text-white/80 text-sm">2017 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
