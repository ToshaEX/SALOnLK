import React from "react";
import { motion } from "framer-motion";

const AboutUS = () => {

  const spring = {
    translateX: 0,
    opacity: 1,
    transition: { duration: 2, delay: 0 },
  };

  return (
    <section
      id="about-us"
      className="container flex flex-col items-center px-6 mx-auto space-y-5 md:space-x-10 md:flex-row md:space-y-0"
    > 
      <div className="hidden items-start py-28 md:flex">
        <div className="flex max-w-xl">
          <div>
            <img className="h-[222px] w-[123px] drop-shadow-xl mt-[150px] cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-1.png')} alt="ab1-img"/>
          </div>
          <div>
            <div className="flex">
              <img className="mx-5 h-[213px] w-[152px] drop-shadow-xl ml-5 mr-0 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-2.png')} alt="ab2-img"/>
              <img className="mx-5 h-[133px] w-[90px] drop-shadow-xl ml-5 mr-0 mt-[80px] cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-4.png')} alt="ab4-img"/>
            </div>
            <div className="flex">
              <img className="h-[180px] w-[119px] drop-shadow-xl ml-5 mt-5 mr-5 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-3.png')} alt="ab3-img"/>
              <img className="h-[169px] w-[112px] drop-shadow-xl mt-5 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-5.png')} alt="ab5-img"/>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={spring}
        initial={{ translateX: "100%", opacity: 0 }}
      >
        <div className="max-w-xl text-black p-4 sm:p-6 md:p-8">
            <div className="flex pt-2 justify-start">
              <span className="text-xl font-semibold text-[#777777]">About Us</span>
            </div>

            <div className="flex pt-4 justify-start">
              <span className="font-bold text-[58px] leading-none">Who We Are?</span>
            </div>
            
            <div className="flex pt-6 justify-start">
              <span className="text-base">
                SalonLK is the online destination for beauty & wellness professionals and clients. Professionals can showcase their work, connect with new and existing clients, and build their business. Clients can discover new services and providers, book appointments online, and get inspired.
              </span>
            </div>
          
            <div className="flex pt-3 justify-start pb-3 md:pt-2">
              <button className="btn-primary py-1.5 border-none text-white bg-primary hover:bg-[#9999] hover:text-black shadow-md text-sm">Learn More</button>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUS;
