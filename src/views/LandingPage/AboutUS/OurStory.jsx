import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Group from "../../../assets/Group 1.png";

const OurStory = () => {
  return (
    <div className="bg-[#f7f9fc] p-[3rem] md:py-0 md:px-[7rem]">
      <div className="text-center z-10 md:absolute md:pt-2 md:right-[26.3rem] md:mt-[4rem]">
        <h2 className="font-bold text-[40px] leading-none tracking-tight">
          Our Story
        </h2>
      </div>

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
        <div className="block md:flex md:gap-10">
          <div>
            <img
              className="w-[600px] drop-shadow-xl cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:pb-10"
              src={Group}
              alt="team"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewPort={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex-col items-center pt-[8px]"
          >
            <div className="text-center pt-6 max-w-md md:text-start md:pt-[8rem]">
              <span className="text-base tracking-tight">
                We started as a small beauty studio in Colombo, Sri Lanka. Our
                main idea was to create the best beauty studio in the world. Can
                there be compromises in the best studio in the world?
                <p className="pt-[4px]">
                  Our answer is always no, we care about the best quality, we
                  hire the best specialists and provide the best customer
                  service. This approach allowed us to grow and create awesome
                  team that is passionate about everything we do.
                </p>
              </span>
            </div>

            <div className="flex pt-4 justify-center md:justify-start">
              <Link to="/about-us">
                <button className="btn-primary text-[#273444] border-[#273444] mb-3 hover:bg-gray-dark hover:text-white">
                  Meet Our Staff
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;
