import React from "react";
import part from "../assets/images/part.png";
import tes from "../assets/images/tes.png";
import cert from "../assets/images/cert.png";

const QualityAssurance = () => {
  return (
    <section className="bg-[#000033] py-20 px-6 sm:px-8 lg:px-16 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
          Our Commitment to <span className="text-[#9CDA0C]">Quality</span>
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
          We are passionate about quality. From extensive testing and
          industry-leading certifications to global partnerships, we ensure our
          products exceed expectations at every step.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          <div className="relative group p-6 bg-white rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={tes} // Replace with your test-related illustration image
              alt="Testing"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Rigorous Testing
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
              Every product is put through a series of intensive tests to ensure
              durability and performance under the most demanding conditions.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C] to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          <div className="relative group p-6 bg-white rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={cert} // Replace with your certification-related illustration image
              alt="Certifications"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Certified Excellence
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
              Our products meet and exceed global standards with certifications
              from top industry authorities, ensuring the best quality possible.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C] to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          <div className="relative group p-6 bg-white rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={part} // Replace with your partnership-related illustration image
              alt="Partnerships"
              className="h-45 w-full object-cover mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Trusted Partnerships
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
              We collaborate with leading innovators worldwide to deliver
              top-tier products, combining the best minds and technologies.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C] to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
