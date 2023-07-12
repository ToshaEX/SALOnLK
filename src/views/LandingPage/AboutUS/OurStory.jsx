import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Group from "../../../assets/Group 1.png";

const OurStory = () => {
  const isDesktop = window.innerWidth >= 1024;
  return (
    <div className="bg-[#f7f9fc] py-[3rem] px-[2rem] relative mini:px-[1rem] md:py-0 md:px-[3rem] lg:px-[2rem]">
      {isDesktop ? (
        <motion.div
          initial="hidden"
          className="block justify-center lg:flex md:gap-5 lg:gap-10"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="lg:pb-10">
            <Image />
          </div>
          <div className="flex flex-col justify-start">
            <div className="lg:pt-14 xl:pt-16">
              <Title />
            </div>
            <TextAndButton />
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="md:pt-10">
            <Title />
          </div>
          <motion.div
            initial="hidden"
            className="block justify-center lg:flex md:gap-5 lg:gap-10"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image />
            <TextAndButton />
          </motion.div>
        </div>
      )}
    </div>
  );
};

const Title = () => {
  return (
    <h2 className="font-bold text-[36px] leading-none tracking-tight mini:text-[32px] md:text-[40px]">
      Our Story
    </h2>
  );
};

const Image = () => {
  return (
    <div>
      <img
        className="w-[600px] drop-shadow-xl cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
        src={Group}
        alt="team"
      />
    </div>
  );
};

const TextAndButton = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex-col items-center pt-[8px]"
    >
      <div className="flex justify-center items-center min-w-full text-center pt-6 max-w-md md:pt-[2rem] lg:text-start ">
        <span className="text-base tracking-tight">
          We started as a small beauty studio in Colombo, Sri Lanka. Our main
          idea was to create the best beauty studio in the world. Can there be
          compromises in the best studio in the world?
          <p className="pt-[4px]">
            Our answer is always no, we care about the best quality, we hire the
            best specialists and provide the best customer service. This
            approach allowed us to grow and create awesome team that is
            passionate about everything we do.
          </p>
        </span>
      </div>

      <div className="flex pt-4 justify-center md:py-[2rem] lg:justify-start">
        <Link to="/about-us">
          <button className="btn-primary text-[#273444] border-[#273444] mb-3 hover:bg-gray-dark hover:text-white mini:text-[14px]">
            Meet Our Staff
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default OurStory;
