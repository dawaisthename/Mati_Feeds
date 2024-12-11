import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-[#333] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Copyright Section */}
        <div>
          <h3 className="text-xl font-bold text-[#A8EC0E] mb-4">Mati Feeds</h3>
          <p className="text-sm mb-4">
            Copyright © 2024 Nexcent Ltd. <br />
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A8EC0E]">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Up to Date */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Stay up to date</h4>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-2 rounded-md border-2 border-[#A8EC0E] focus:outline-none focus:ring-2 focus:ring-[#A8EC0E]"
            />
            <button
              type="submit"
              className="p-2 bg-[#A8EC0E] text-white rounded-md hover:bg-[#8EC50D] transition"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
