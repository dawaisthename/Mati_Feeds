import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import workers from "../assets/images/workers.jpg";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
function AboutusPage() {
  return (
    <>
      <Navbar />
      <div className="text-gray-800 min-h-screen">
        {/* Hero Section with Background Image */}
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${workers})` }} // Use the imported workers image as background
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to Mati Feeds
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Driving innovation in animal nutrition for a sustainable future.
            </p>
            <button className="px-8 py-4 bg-[#A8EC0E] text-white font-bold rounded-lg shadow-md hover:bg-[#94cc0e] transition ease-in-out duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Our Story Section: Timeline Style */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-[#A8EC0E] mb-8">
            Our Journey
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#A8EC0E]" />
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                {/* Timeline Item 1 */}
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/3 relative z-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <h3 className="font-bold text-xl mb-2">
                      Started the Journey
                    </h3>
                    <p>
                      In 2020, we took our first step into the agro-processing
                      industry, leveraging years of experience.
                    </p>
                  </div>
                  <div className="absolute -left-4 top-2 bg-[#A8EC0E] w-8 h-8 rounded-full shadow-lg"></div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/3 relative z-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <h3 className="font-bold text-xl mb-2">
                      Production Facility Setup
                    </h3>
                    <p>
                      We built a state-of-the-art facility to manufacture
                      premium animal feed products for the local market.
                    </p>
                  </div>
                  <div className="absolute -left-4 top-2 bg-[#A8EC0E] w-8 h-8 rounded-full shadow-lg"></div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/3 relative z-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <h3 className="font-bold text-xl mb-2">
                      Expanding Horizons
                    </h3>
                    <p>
                      Our products now serve a growing range of livestock, and
                      we're exploring opportunities for export.
                    </p>
                  </div>
                  <div className="absolute -left-4 top-2 bg-[#A8EC0E] w-8 h-8 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section: Cards with Hover Effect */}
        <section className="mb-20 px-6 ">
          <h2 className="text-3xl font-bold text-center text-[#A8EC0E] mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We embrace new technologies to create better solutions for the
                farming industry.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p>
                Our feeds are of the highest quality, crafted to improve
                livestock health and performance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p>
                We prioritize environmentally responsible practices in our
                operations and product development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision: Circular Design */}
        <section className="py-16 px-6 bg-[#A8EC0E] text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Circle */}
            <div className="text-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <p className="text-3xl text-black font-semibold">Mission</p>
              </div>

              <p className="text-xl font-medium text-center text-white">
                Delivering top-tier animal nutrition <br /> while supporting
                sustainable farming practices.
              </p>
            </div>

            {/* Vision Circle */}
            <div className="text-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <p className="text-3xl text-black font-semibold">Vision</p>
              </div>

              <p className="text-xl font-medium text-center text-white">
                To be Ethiopia's leading animal feed manufacturer <br /> with a
                strong international presence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section: Leadership Team */}
        <section className="py-10 px-6">
          <h2 className="text-3xl font-bold text-center text-[#A8EC0E] mb-8">
            Meet Our Leadership Team
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {/* CEO */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={profile3}
                alt="CEO"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Chief Executive Officer (CEO)</p>
              <p className="mt-4 text-gray-700">
                John oversees the entire operations of Mati Feeds and ensures
                the alignment of company strategies with its vision and mission.
              </p>
            </div>

            {/* CFO */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={profile3}
                alt="CFO"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Chief Financial Officer (CFO)</p>
              <p className="mt-4 text-gray-700">
                Jane manages the financial health of Mati Feeds, ensuring
                profitability and efficient allocation of resources.
              </p>
            </div>

            {/* CPO */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={profile3}
                alt="CPO"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Alice Johnson</h3>
              <p className="text-gray-600">Chief Product Officer (CPO)</p>
              <p className="mt-4 text-gray-700">
                Alice leads product development and quality assurance, ensuring
                that Mati Feeds offers the best nutritional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section with CTA */}
        <section className="py-5">
          <div className="text-center">
            <h2 className="text-3xl text-[#A8EC0E] font-bold mb-4">
              Join Our Journey
            </h2>
            <p class="text-2xl font-light text-center text-black dark:text-white mb-12">
              Together, we can build a more sustainable future in farming and
              animal nutrition.
            </p>
            <button className="px-8 py-4 bg-white text-[#A8EC0E] font-bold rounded-lg shadow-md hover:bg-[#94cc0e] transition ease-in-out duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutusPage;
