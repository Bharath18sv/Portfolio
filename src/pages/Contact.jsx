import Title from "../components/Title";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-12 px-4 md:py-16">
      <div className="md:px-4 md:m-4 lg:m-20">
        <Title title="Contact Me" />

        {/* links container */}
        <div className="grid md:grid-cols-2 grid-cols-1 text-white mt-8 sm:mt-10 place-items-center gap-4 sm:gap-6">
          {/* left: social links */}
          <div className="grid grid-cols-1 w-full max-w-md">
            {/* LinkedIn */}
            <div className="m-2 sm:m-3">
              <a
                href="https://www.linkedin.com/in/bharath-s-v"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 transform hover:scale-[1.02] p-3 rounded"
              >
                <FaLinkedin className="w-4 h-6 sm:w-5 sm:h-7 text-blue-400" />
                <span className="text-base sm:text-lg font-bold">LinkedIn</span>
              </a>
            </div>

            {/* GitHub */}
            <div className="m-2 sm:m-3">
              <a
                href="https://github.com/Bharath18sv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 transform hover:scale-[1.02] p-3 rounded"
              >
                <FaGithub className="w-4 h-6 sm:w-5 sm:h-7" />
                <span className="text-base sm:text-lg font-bold">GitHub</span>
              </a>
            </div>

            {/* Instagram */}
            <div className="m-2 sm:m-3">
              <a
                href="https://www.instagram.com/_bharath_sv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 p-3 rounded transform hover:scale-[1.02] cursor-pointer"
              >
                <FaInstagram className="w-4 h-6 sm:w-5 sm:h-7 text-violet-500" />
                <span className="text-base sm:text-lg font-bold">
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* right: personal links */}
          <div className="grid grid-cols-1 w-full max-w-md">
            {/* Mail */}
            <div className="m-2 sm:m-3 flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 transform hover:scale-[1.02] p-3 rounded cursor-pointer">
              <FaEnvelope className="w-4 h-6 sm:w-5 sm:h-7 text-gray-400" />
              <span className="text-base sm:text-lg font-bold">
                svbharath2005@gmail.com
              </span>
            </div>
            {/* Contact */}
            <div className="m-2 sm:m-3">
              <a
                href="tel:+918073012368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 transform hover:scale-[1.02] p-3 rounded cursor-pointer"
              >
                <FaPhoneAlt className="w-4 h-6 sm:w-5 sm:h-7 text-green-600" />
                <span className="text-base sm:text-lg font-bold">
                  +91 8073012368
                </span>
              </a>
            </div>
            {/* Location */}
            <div className="m-2 sm:m-3 flex flex-row justify-center gap-3 border border-white/30 hover:border-white transition duration-300 transform hover:scale-[1.02] p-3 rounded">
              <FaMapMarkerAlt className="w-4 h-6 sm:w-5 sm:h-7 text-red-500" />
              <span className="text-base sm:text-lg font-bold">
                Tumkur, Karnataka
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
