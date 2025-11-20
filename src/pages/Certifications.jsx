import React, { useState } from "react";
import Title from "../components/Title";

function Certifications() {
  // Certification data with image paths, names, and organizations
  const certifications = [
    {
      id: 8,
      imagePath: "/certifications/PearlThoughts-Certificate.png",
      name: "Frontend Development",
      organization: "PearlThoughts",
    },
    {
      id: 2,
      imagePath: "/certifications/Devops-certificate.png",
      name: "DevOps",
      organization: "Elevate Labs",
    },
    {
      id: 1,
      imagePath: "/certifications/C&P_Certificate.jpg",
      name: "Coding & Programming",
      organization: "Samsung Innovation Campus",
    },
    {
      id: 6,
      imagePath: "/certifications/IoT_Certificate.jpg",
      name: "Internet of Things (IoT)",
      organization: "Samsung Innovation Campus",
    },

    {
      id: 4,
      imagePath: "/certifications/HR_Python.png",
      name: "Python (Basic)",
      organization: "HackerRank",
    },
    {
      id: 7,
      imagePath: "/certifications/NPTEL_JAVA.png",
      name: "Programming in Java",
      organization: "NPTEL",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Certifications" />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-white/30 hover:border-white transform transition hover:scale-[1.02] duration-300 rounded-2xl p-4 flex flex-col items-center bg-gray-800/50 backdrop-blur-sm cursor-pointer h-full"
              onClick={() => openModal(cert)}
            >
              <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                <img
                  src={cert.imagePath}
                  alt={cert.name}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="text-white text-base md:text-lg font-medium text-center">
                {cert.name}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm mt-2 text-center">
                {cert.organization}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for certificate preview */}
      {isModalOpen && selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-gray-800/50 hover:bg-gray-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-3 sm:p-4 bg-gray-900">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center">
                  {selectedCert.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  {selectedCert.organization}
                </p>
              </div>
              <div className="flex items-center justify-center p-2 sm:p-4 bg-gray-800">
                <img
                  src={selectedCert.imagePath}
                  alt={selectedCert.name}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
