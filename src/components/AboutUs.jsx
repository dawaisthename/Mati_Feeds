import React from "react";
import workers from "../assets/images/workers.jpeg";
import { Link } from "react-router-dom";
import workers3 from "../assets/images/workers3.png";

function AboutUs() {
  return (
    <section class="py-16 bg-white dark:bg-gray-900">
      {/* <div class="max-w-screen-xl mx-auto px-4 mb-16">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-extrabold text-[#9CDA0C] dark:text-white mb-4">
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
      </div> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="text-3xl font-extrabold text-[#9CDA0C] dark:text-white mb-4">
              Who Are We
            </h2>

            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Mati Feeds was founded in 2024 and is transforming livestock
              farming with innovative, high-quality animal feed solutions. Based
              in Sheger City, Oromia Region, we enhance animal health and
              productivity while supporting sustainable agriculture.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src={workers}
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src={workers3}
              alt="office content 2"
            />
            <div class="mt-8 flex justify-center items-center">
              <Link to="/about">
                <button class="px-3 py-2 bg-[#9CDA0C] text-white font-light rounded-lg shadow-md hover:bg-white hover:text-[#9CDA0C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            <h2 class="text-3xl font-extrabold text-[#9CDA0C] dark:text-white mb-4">
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
