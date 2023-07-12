import React from "react";
import Home from "./Home/Home";
import ServicesMenu from "./Services/ServicesMenu";
import OurStory from "./AboutUS/OurStory";
import Reviews from "./Reviews/Reviews";
import { CTA, Footer } from "../../Components/index";
import GoToTop from "../../GoToTop";
import Gallery from "./Features/Gallery";

const LandingPage = () => {
  return (
    <>
      <Home />
      <ServicesMenu />
      <OurStory />
      <CTA />
      <Gallery />
      <Reviews />
      <Footer />
      <GoToTop />
    </>
  );
};

export default LandingPage;
