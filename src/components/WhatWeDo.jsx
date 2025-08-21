import React from "react";
import product from "../assets/images/Artboard 5.jpg";
import service from "../assets/images/Artboard 10.jpg";
import industry from "../assets/images/Artboard 7.jpg";

const WhatWeDo = () => {
  return (
    <section className="relative bg-[#000033] py-20 px-6 sm:px-8 lg:px-16 text-gray-200">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl text-white font-bold mb-6 leading-tight">
          What We Do
        </h2>
        <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          We provide high-quality feed products, innovative services, and
          industry support to empower sustainable livestock farming and enhance
          productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Card 1 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={product}
              alt="Products"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-white group-hover:text-white mb-2">
              Products
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              High-quality feed products designed to ensure livestock health,
              growth, and productivity across various farming needs.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C]/20 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          {/* Card 2 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={service}
              alt="Services"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-white group-hover:text-white mb-2">
              Services
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              Innovative services to support livestock farmers, including feed
              consultation, supply management, and sustainable farming guidance.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C]/20 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          {/* Card 3 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#9CDA0C] transition-all duration-300">
            <img
              src={industry}
              alt="Industry Focus"
              className="h-45 w-full object-cover mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-white group-hover:text-white mb-2">
              Industry Focus
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              Supporting the livestock industry with tailored solutions,
              partnerships, and innovations that improve overall farm efficiency
              and sustainability.
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9CDA0C]/20 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
