import React, { useState } from "react";

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isOpen = (index) => openIndex === index;

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-[#ffffff] py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#9CDA0C]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="border border-[#9CDA0C] rounded-lg p-4">
              <button
                type="button"
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-[#9CDA0C] focus:outline-none"
                onClick={() => toggleAnswer(1)}
              >
                <span>What is Mati Feeds?</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    isOpen(1) ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen(1) && (
                <p className="mt-4 text-gray-700">
                  Mati Feeds is a premium provider of high-quality animal feed
                  tailored to meet the nutritional needs of various livestock.
                </p>
              )}
            </div>

            {/* Question 2 */}
            <div className="border border-[#9CDA0C] rounded-lg p-4">
              <button
                type="button"
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-[#9CDA0C] focus:outline-none"
                onClick={() => toggleAnswer(2)}
              >
                <span>How can I place an order?</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    isOpen(2) ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen(2) && (
                <p className="mt-4 text-gray-700">
                  You can place an order through our website, by phone, or by
                  contacting our local distributors.
                </p>
              )}
            </div>

            {/* Question 3 */}
            <div className="border border-[#9CDA0C] rounded-lg p-4">
              <button
                type="button"
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-[#9CDA0C] focus:outline-none"
                onClick={() => toggleAnswer(3)}
              >
                <span>Do you offer custom feed formulations?</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    isOpen(3) ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen(3) && (
                <p className="mt-4 text-gray-700">
                  Yes, we can create custom feed formulations to meet specific
                  nutritional requirements for your livestock.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQPage;
