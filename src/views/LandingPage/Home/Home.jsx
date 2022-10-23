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
      className=" top-0 snap-center flex bg-hero-image bg-gray-dark bg-opacity-50  bg-blend-color xl:bg-cover bg-no-repeat h-screen sm:bg-auto  items-center"
    >
      <motion.div
        animate={spring}
        initial={{ translateX: "-100%", opacity: 0 }}
      >
        <div className="p-20 select-none rounded-md -translate-y-16">
          <span className="text-white font-bold text-6xl">
            A smooth Saloon <br />
            Experience in <br />
            your Town
          </span>
          <br />
          <div className="pt-4">
            <span className="text-gray-light/80 ">
              If you've ever wonder what hairstyles suit you and how you <br />
              should cut hair, here's a list of the top styles for all men.
            </span>
          </div>
          <div className="flex pt-2 justify-start">
            <button className="btn-primary">Book an Appointment</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
