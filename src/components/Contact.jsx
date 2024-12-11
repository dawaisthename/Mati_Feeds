import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-[#A8EC0E] to-white py-20 px-6 sm:px-8 lg:px-16 text-gray-900">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Contact Us
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-white text-lg font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-lg font-medium"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-lg font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#A8EC0E] font-bold py-3 rounded-md hover:bg-[#ffffffcc] transition"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg text-white font-bold">Contact</h3>
            <p>hi@green.com</p>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold">Based in</h3>
            <p>Ethiopia</p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-[#ffffffcc] text-[#A8EC0E] transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-[#ffffffcc] text-[#A8EC0E] transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-[#ffffffcc] text-[#A8EC0E] transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
