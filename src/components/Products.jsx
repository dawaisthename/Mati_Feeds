import React from "react";
import { Link } from "react-router-dom";
import diary from "../assets/images/diary.jpg";
import fetting from "../assets/images/fetting.jpg";
import poultry from "../assets/images/poultry.jpg";

function Products() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#9CDA0C] dark:text-white mb-12">
          Our Products
        </h2>
        <p className="text-2xl font-light text-center text-dark dark:text-white mb-12">
          Mati Feeds specializes in high-quality animal feed production with an
          emphasis on
        </p>

        <div className="flex flex-wrap justify-center gap-20">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="bg-white p-6 shadow-[4px_4px_10px_rgba(168,236,14,0.6)] dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-[6px_6px_12px_rgba(168,236,14,0.8)]">
              <img
                src={poultry}
                alt="Poultry Feeds"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                Poultry Feeds
              </h3>
              <p className="text-gray-500 text-center dark:text-gray-400">
                Custom mixes for both egg-laying hens and young chickens.
              </p>
              <div className="mt-4 text-center">
                <Link
                  to="/product"
                  className="text-[#9CDA0C] hover:text-[#7BBE08] font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-[4px_4px_10px_rgba(168,236,14,0.6)] dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-[6px_6px_12px_rgba(168,236,14,0.8)]">
              <img
                src={diary}
                alt="Dairy Feeds"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                Dairy Feeds
              </h3>
              <p className="text-gray-500 text-center dark:text-gray-400">
                Nutritional solutions designed for optimal milk production.
              </p>
              <div className="mt-4 text-center">
                <Link
                  to="/product"
                  className="text-[#9CDA0C] hover:text-[#7BBE08] font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-[4px_4px_10px_rgba(168,236,14,0.6)] dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-[6px_6px_12px_rgba(168,236,14,0.8)]">
              <img
                src={fetting}
                alt="Fattening Feeds"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                Fattening Feeds
              </h3>
              <p className="text-gray-500 text-center dark:text-gray-400">
                Customized feeds that promote healthy weight gain in livestock.
              </p>
              <div className="mt-4 text-center">
                <Link
                  to="/product"
                  className="text-[#9CDA0C] hover:text-[#7BBE08] font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Link to="contact">
            <button className="px-6 py-3 bg-[#9CDA0C] text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#9CDA0C] focus:outline-none focus:ring-2 focus:ring-blue-500">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
