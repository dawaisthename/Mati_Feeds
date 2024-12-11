import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
    </>
  );
}

export default LandingPage;
