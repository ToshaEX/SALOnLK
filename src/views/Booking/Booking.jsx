import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FAQ, Footer, StepProgressBar } from "../../Components/index";
import ServicePicker from "./BookingPages/ServicePicker";

const Booking = () => {
  const [index, setIndex] = useState(1);

  const nextButton = () => {
    setIndex((currentPage) => currentPage + 1);
  };

  const PageDisplay = () => {
    if (index === 1)
      return (
        <ServicePicker nextStep={nextButton} handleService={handleService} />
      );
  };

  const [pickServices, setPickServices] = useState([]);

  const handleService = (serviceData, option) => {
    if (option === "add") {
      setPickServices((arr) => arr.concat(serviceData));
      console.log(pickServices);
    } else if (option === "remove") {
      setPickServices((arr) => arr.filter((item) => item !== serviceData));
      console.log(pickServices);
    }
  };

  return (
    <section id="booking" className="h-[110vh]">
      <div className="bg-[url('./assets/booking.png')] relative">
        <div className="p-[3rem] text-white">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              Book Now
            </h2>
          </div>

          <div className="text-center pt-[2rem]">
            <span className="text-[17px] tracking-tight md:text-[18px]">
              Personalize your service and schedule your appointment today!
            </span>
          </div>

          <div className="flex py-[3rem] justify-center">
            <button className=""></button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center absolute right-0 left-0 bottom-0 top-[23rem]">
        <div className="bg-white w-[60%] pt-5 rounded-md shadow-md">
          <div className="px-20 py-10">
            <StepProgressBar step={index} />
          </div>

          <div className="px-10 pt-10">{PageDisplay()}</div>
          <div className="px-20 pb-5 flex justify-end items-center">
            <button
              type="submit"
              className="bg-[#273444] rounded-md h-[2.3rem] w-[8rem] border border-transparent text-[12px] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
              onClick={() => {
                if (index < 4) {
                  setIndex((currPage) => currPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
