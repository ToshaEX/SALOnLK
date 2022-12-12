import React from "react";
import Home from "./Home/Home";
import CTA from "./CTA/CTA";
import Footer from "../../Components/Footer";
import ServicesMenu from "./Services/ServicesMenu";
import OurStory from "./AboutUS/OurStory";
import Products from "./Features/products";
import Reviews from "./Reviews/Reviews";

const LandingPage = () => {
  return (
    <>
      <Home />
      <ServicesMenu />
      <OurStory />
      <CTA />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
};

export default LandingPage;
