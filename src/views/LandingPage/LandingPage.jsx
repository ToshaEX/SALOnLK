import React from "react";
import Home from "./Home/Home";
import ServicesMenu from "./Services/ServicesMenu";
import OurStory from "./AboutUS/OurStory";
import Products from "./Features/products";
import Reviews from "./Reviews/Reviews";
import { CTA, Footer } from "../../Components/index";

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
