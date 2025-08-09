import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <section id="contact">
      <div className="py-16 px-4 md:px-20 m-20">
        <Title title="Contact Me" />
        <div className="grid md:grid-cols-2 grid-rows-1 text-white">
          {/* social links */}
          <div className="border border-white/30 hover:border-white">
            <div>Linkedin</div>
            <div>Github</div>
            <div>Instagram</div>
          </div>
          {/* personal links */}
          <div>
            <div>
              {/* number */}
              <div>Mail</div>
              <div>Number</div>
              <div>Location</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
