import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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

    const serviceId = "service_kx9s4uo";
    const templateId = "template_aupeoru";
    const publicKey = "WMQmPd6JPoTHz4QLo";

    try {
      // Send email with EmailJS, including name and email values
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_email, // Sender's email
          company_name: "Mati Feeds Team", // Recipient's name
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Copyright Section */}
        <div>
          <h3 className="text-xl font-bold text-[#9CDA0C] mb-4">Mati Feeds</h3>
          <p className="text-sm mb-4 leading-6">
            Copyright © 2024 Mati Feeds Ltd. <br />
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1QAPhaNfgy/?mibextid=qi2Omg"
              className="p-2 bg-[#9CDA0C] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security feature to prevent security vulnerabilities
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.tiktok.com/@mati_feeds?_t=8scTtRqhnlN&_r=1"
              className="p-2 bg-[#9CDA0C] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security feature to prevent security vulnerabilities
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/company/mati-animals-feed/"
              className="p-2 bg-[#9CDA0C] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-[#9CDA0C] mb-4">Company</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#9CDA0C]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#9CDA0C]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#9CDA0C]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-[#9CDA0C]">
                Product
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#9CDA0C]">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        {/* <div>
          <h4 className="font-bold text-[#9CDA0C] mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-[#9CDA0C]">
                Help center
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#9CDA0C]">
                Terms of service
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#9CDA0C]">
                Legal
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#9CDA0C]">
                Privacy policy
              </a>
            </li>
          </ul>
        </div> */}

        {/* Stay Up to Date */}
        <div>
          <h4 className="font-bold text-[#9CDA0C] mb-4">Stay up to date</h4>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              type="email"
              value={from_email}
              name="from_email"
              onChange={handleEmailChange}
              placeholder="Your email address"
              className="flex-1 p-2 rounded-md border-2 border-[#9CDA0C] focus:outline-none focus:ring-2 focus:ring-[#9CDA0C]"
            />
            <button
              type="submit"
              className="p-2 w-10 h-10 bg-[#9CDA0C] text-white rounded-full flex items-center justify-center hover:bg-[#8EC50D] transition"
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
