import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const [from_email, setEmail] = useState(""); // State to manage the email input
  const [status, setStatus] = useState(""); // State to handle status messages

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state when user types in the input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!from_email) {
      setStatus("Please enter both your email address.");
      return;
    }

    const serviceId = "service_f14h1ur";
    const templateId = "template_7hxga5g";
    const publicKey = "w--rOkwl-Kux4ORCX";

    try {
      // Send email with EmailJS, including name and email values
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_email, // Sender's email
          to_name: "Mati Feeds Team", // Recipient's name
          message: `User with email ${from_email} is interested in your service.`, // Customize message as needed
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus("Thank you for subscribing!");
        setEmail(""); // Reset email input after successful submission
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="bg-[#F5F5F5] text-[#333] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Copyright Section */}
        <div>
          <h3 className="text-xl font-bold text-[#A8EC0E] mb-4">Mati Feeds</h3>
          <p className="text-sm mb-4 leading-6">
            Copyright © 2024 Mati Feeds Ltd. <br />
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-[#A8EC0E] text-white rounded-full hover:bg-white hover:text-[#A8EC0E] transition"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#A8EC0E]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#A8EC0E]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#A8EC0E]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#A8EC0E]">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-[#A8EC0E]">
                Help center
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#A8EC0E]">
                Terms of service
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#A8EC0E]">
                Legal
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#A8EC0E]">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Up to Date */}
        <div>
          <h4 className="font-bold text-[#A8EC0E] mb-4">Stay up to date</h4>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              type="email"
              value={from_email}
              name="from_email"
              onChange={handleEmailChange}
              placeholder="Your email address"
              className="flex-1 p-2 rounded-md border-2 border-[#A8EC0E] focus:outline-none focus:ring-2 focus:ring-[#A8EC0E]"
            />
            <button
              type="submit"
              className="p-2 w-10 h-10 bg-[#A8EC0E] text-white rounded-full flex items-center justify-center hover:bg-[#8EC50D] transition"
            >
              <IoIosSend />
            </button>
          </form>
          {status && <div className="mt-2 text-sm text-gray-800">{status}</div>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
