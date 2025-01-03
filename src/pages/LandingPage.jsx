import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import QualityAssurance from "../components/QualityAssurance";
import FAQPage from "../components/FAQPage";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <BannerTwo />
      <AboutUs />
      <QualityAssurance />
      <Banner />

      <FAQPage />

      <Footer />
    </>
  );
}

export default LandingPage;
