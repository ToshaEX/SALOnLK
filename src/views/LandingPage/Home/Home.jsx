import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const spring = {
    translateX: 0,
    opacity: 1,
    transition: { duration: 2, delay: 0 },
  };
  
  return (
    <section
      id="home"
      className="flex top-0 bg-[url('./assets/hero.jpg')] h-screen bg-blend-multiply bg-no-repeat items-center snap-center bg-black bg-opacity-10 md:bg-cover sm:bg-auto"
    >
      <motion.div
        animate={spring}
        initial={{ translateX: "-100%", opacity: 0 }}
      >
        <div className="text-center -translate-y-12 px-8 md:text-start md:p-8 md:-translate-y-16">
          <span className="text-white max-w-md font-bold text-[58px] leading-none">
            A smooth Saloon <br />
            Experience in <br />
            your Town
          </span>
          <br />
          <div className="pt-6">
            <span className="max-w-sm text-gray-light/80">
              If you've ever wonder what hairstyles suit you and how you <br />
              should cut hair, here's a list of the top styles for all men.
            </span>
          </div>
          <div className="flex pt-4 justify-center md:justify-start">
            <button className="btn-primary hover:bg-gray-dark">Book an Appointment</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
