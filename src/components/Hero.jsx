import React from "react";
import milking from "../assets/images/milking.png";
import co1 from "../assets/images/co1.jpg";
import co2 from "../assets/images/co2.jpg";
import co3 from "../assets/images/co3.jpg";
import co4 from "../assets/images/co4.jpg";

function Hero() {
  return (
    <>
      <section class="bg-[#F5F7FA] dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-5xl dark:text-white">
              Feed Well Agro Fauna Trading PLC
            </h1>
            <h3 class="max-w-2xl mb-6 font-bold text-[#A8EC0E] lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Innovative Animal Nutrition Solutions
            </h3>
            <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Empowering sustainable agriculture with quality feed products
              designed for livestock health and growth.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#A8EC0E] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div class="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
            <img
              src={milking}
              class="w-full max-w-xs h-auto object-cover"
              alt="Company Logo"
            />
          </div>
        </div>
      </section>

      {/* Our Clients section starts */}
      <section class="bg-white dark:bg-gray-900 py-16">
        <div class="max-w-screen-xl mx-auto px-4">
          <h2 class="text-4xl font-extrabold text-center text-[#A8EC0E] dark:text-white mb-12">
            Our Clients
          </h2>
          <p class="text-2xl font-light text-center text-dark dark:text-white mb-12">
            We have been working with some Fortune 500+ clients
          </p>

          <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            <div class="flex justify-center">
              <img
                src={co1}
                alt="Client 1"
                class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div class="flex justify-center">
              <img
                src={co2}
                alt="Client 2"
                class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div class="flex justify-center">
              <img
                src={co3}
                alt="Client 3"
                class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div class="flex justify-center">
              <img
                src={co4}
                alt="Client 4"
                class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
