import React from 'react';
import { motion } from "framer-motion";


const OurStory = ()=>{

    const spring = {
        translateX: 0,
        opacity: 1,
        transition: { duration: 2, delay: 0 },
      };

    return(
        <div className="bg-[#f7f9fc] p-[3rem] md:py-0 md:px-[7rem]">
            
            <div className="text-center md:absolute md:pt-2 md:right-[27.2rem] md:mt-[4rem] z-10">
                <h2 className="font-bold text-[40px] leading-none tracking-tight">Our Story</h2>
            </div>

            <motion.div
                initial={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{delay: 1.5}}
            >
                <div className='block md:flex md:gap-10'>
                    <div className=''>
                        <img
                            className="w-[600px] drop-shadow-xl cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:pb-10"
                            src={require("../../../assets/Group 1.png")}
                            alt=""
                        />
                    </div>

                    <motion.div
                        animate={spring}
                        initial={{ translateX: "100%", opacity: 0 }} 
                        className="flex-col items-center pt-[8px]"
                        >

                        <div className="text-center pt-6 max-w-md md:text-start md:pt-[8rem]">
                            <span className="text-base tracking-tight"> 
                                We started as a small beauty studio in Colombo, Sri Lanka. Our main idea was to create the best beauty studio in the world. Can there be compromises in the best studio in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service. This approach allowed us to grow and create awesome team that is passionate about everything we do.
                            </span>
                        </div>

                        <div className="flex pt-8 justify-center md:justify-start">
                            <button className="btn-primary text-[#273444] border-[#273444] hover:bg-gray-dark hover:text-white">Meet Our Staff</button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            
            
        </div>
    )
}

export default OurStory;