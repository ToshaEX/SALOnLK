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
      className="flex bg-[url('./assets/hero.jpg')] h-screen bg-cover bg-center bg-blend-multiply bg-no-repeat items-center bg-black bg-opacity-10"
    >
      <motion.div
        initial={{ translateX: "-100%", opacity: 0 }}
        animate={spring}
      >
        <div className="text-center -translate-y-12 px-8 ml-0 md:text-start md:p-8 md:-translate-y-16 md:ml-10">
          <span className="text-white max-w-md font-bold text-[58px] leading-none tracking-tight justify-center md:justify-start">
            A Smooth Saloon <br />
            Experience in <br />
            your Town
          </span>
          <br />
          <div className="pt-6 justify-center md:justify-start">
            <span className="max-w-sm text-gray-light/80 tracking-tight">
              If you've ever wonder what hairstyles suit you and how you <br />
              should cut hair, here's a list of the top styles for you!
            </span>
          </div>
          <div className="flex pt-4 justify-center md:justify-start">
            <button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
