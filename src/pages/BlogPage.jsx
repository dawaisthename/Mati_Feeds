import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Importance of Animal Nutrition",
      excerpt:
        "Animal nutrition is key to livestock health and productivity. This post explores the importance of balanced diets in animals.",
      date: "December 12, 2024",
      link: "/blog/importance-of-animal-nutrition",
    },
    {
      id: 2,
      title: "Sustainable Farming Practices",
      excerpt:
        "Sustainability in farming ensures long-term agricultural productivity. Learn how sustainable practices are reshaping the industry.",
      date: "December 10, 2024",
      link: "/blog/sustainable-farming-practices",
    },
    {
      id: 3,
      title: "Feeding Your Livestock in Winter",
      excerpt:
        "Winter brings unique challenges to feeding livestock. This post provides tips for maintaining optimal nutrition during the cold months.",
      date: "December 5, 2024",
      link: "/blog/feeding-livestock-in-winter",
    },
  ];
  return (
    <>
      <Navbar />{" "}
      <div className="bg-[#F5F5F5] text-gray-800 min-h-screen py-16 px-6 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-center text-[#A8EC0E] mb-12">
          Blog
        </h1>

        <div className="max-w-7xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 mb-8 rounded-lg shadow-md hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-[#A8EC0E] mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-lg mb-4">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-[#A8EC0E] hover:text-[#94cc0e] font-semibold"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
