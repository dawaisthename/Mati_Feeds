import React from "react";

function Banner() {
  return (
    <section className="bg-[#F5F7FA] dark:bg-gray-900-white py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D2D] mb-6">
          Explore our innovative solutions for <br />
          <span className="text-[#A8EC0E]">
            healthier, more productive livestock!
          </span>
        </h2>
      </div>
    </section>
  );
}

export default Banner;
