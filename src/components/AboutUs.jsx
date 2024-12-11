import React from "react";
import workers from "../assets/images/workers.jpg";
import workers3 from "../assets/images/workers3.png";

function AboutUs() {
  return (
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl mx-auto px-4 mb-16">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-extrabold text-[#A8EC0E] dark:text-white mb-4">
              Who Are We
            </h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Mati Feeds, founded in 2020, is transforming livestock farming
              with innovative, high-quality animal feed solutions. Based in
              Sheger City, Oromia Region, we enhance animal health and
              productivity while supporting sustainable agriculture
            </p>
          </div>

          <div class="md:w-1/2">
            <img
              src={workers}
              alt="About Us Image"
              class="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <img
              src={workers3}
              alt="Our Mission Image"
              class="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-extrabold text-[#A8EC0E] dark:text-white mb-4">
              Our Mission
            </h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              To deliver superior animal nutrition solutions through innovation
              and sustainability, while fostering local economic growth and
              supporting farmers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
