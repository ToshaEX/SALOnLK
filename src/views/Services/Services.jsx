import React, { useState, useEffect, useRef } from "react";
import { CTA, Footer, FAQ } from "../../Components/index";
import axios from "axios";
import { Link } from "react-scroll";
import {
  Hair,
  MakeUp,
  Brows,
  Nails,
  Cosmetology,
  Massage,
} from "./ServiceTypes/index";

import NailImg from "../../assets/nail-polish.png";
import BrowImg from "../../assets/mascara.png";
import CosmetologyImg from "../../assets/hair-comb.png";
import HairImg from "../../assets/woman-hair.png";
import MakeupImg from "../../assets/makeup.png";
import MassageImg from "../../assets/massage.png";

import { useSelector } from "react-redux";

const Services = () => {
  const [service, setServices] = useState([]);
  const [isLoading, setSIsLoading] = useState(true);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/service",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
        setSIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
        setSIsLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Service Menu Section */}
      <div className="bg-[url('./assets/services-bg.png')]">
        <div className="p-[3rem] text-white">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              Service Menu
            </h2>
          </div>

          <div className="text-center pt-[2rem]">
            <span className="text-[17px] tracking-tight md:text-[18px]">
              We enhance individual beauty with state-of-the-art technologies
              and <br /> personalized service. Our professional team is ready to
              provide the <br /> greatest service you've ever had.
            </span>
          </div>

          <div className="flex pt-[3rem] justify-center">
            <button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Service Selection Section */}
      <div className="">
        <div className="relative">
          <div className="hidden text-center w-[50px] sticky top-0 px-[20px] md:p-[4rem] md:block">
            <div className="h-[20px]"></div>
            <Link
              to="Hair"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] pt-5 pb-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={HairImg} alt="hair" />
                </div>
                <div className="serviceName">
                  <span>Hair</span>
                </div>
              </div>
            </Link>

            <Link
              to="Makeup"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={MakeupImg} alt="makeup" />
                </div>
                <div className="serviceName">
                  <span>MakeUp</span>
                </div>
              </div>
            </Link>

            <Link
              to="Brows"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={BrowImg} alt="mascara" />
                </div>
                <div className="serviceName">
                  <span>Brow</span>
                </div>
              </div>
            </Link>

            <Link
              to="Nails"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={NailImg} alt="nail" />
                </div>
                <div className="serviceName">
                  <span className="">Nails</span>
                </div>
              </div>
            </Link>

            <Link
              to="Cosmetology"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={CosmetologyImg} alt="comb" />
                </div>
                <div className="serviceName">
                  <span>Cosmetology</span>
                </div>
              </div>
            </Link>

            <Link
              to="Massage"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[34px] w-[34px] m-auto mb-[7px] md:h-[48px] md:w-[48px]">
                  <img src={MassageImg} alt="massage" />
                </div>
                <div className="serviceName">
                  <span>Massage</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Hair Details Section */}
          <Hair service={service} />

          {/* MakeUp Details Section */}
          <MakeUp service={service} />

          {/* Brows Details Section */}
          <Brows service={service} />

          {/* Nails Details Section */}
          <Nails service={service} />

          {/* Cosmetology Details Section */}
          <Cosmetology service={service} />

          {/* Massage Details Section */}
          <Massage service={service} />
        </div>
      </div>

      {/* import CTA Section */}
      <CTA />

      {/* Frequently asked Section */}
      <FAQ />

      {/* import footer Section */}
      <Footer />
    </div>
  );
};

export default Services;
