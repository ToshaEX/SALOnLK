import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="flex bg-[url('./assets/hero.jpg')] h-screen bg-cover bg-center bg-blend-multiply bg-no-repeat items-center bg-black bg-opacity-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewPort={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-center -translate-y-12 px-8 ml-0 md:text-start md:p-8 md:-translate-y-16 md:ml-10">
          <span className="text-white max-w-md font-bold text-[52px] pl-[0.7rem] leading-none tracking-tight justify-center md:text-[58px] md:justify-start md:pl-0">
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
            <Link to="/booking">
              <button className="btn-primary hover:bg-gray-dark">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
