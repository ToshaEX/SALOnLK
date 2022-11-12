import React from "react";
import Home from "./Home/Home";
import AboutUS from "./AboutUS/AboutUS";
import CTA from "./CTA/CTA";
import Features from "./Features/Features";
import Footer from "../../Components/Footer";
import ContactUS from "./ContactUS/ContactUS";

const LandingPage = () => {
  return (
    <>
      <Home />
      <AboutUS />
      <Features />
      <CTA />
      <ContactUS />
      <Footer />
    </>
  );
};

export default LandingPage;
