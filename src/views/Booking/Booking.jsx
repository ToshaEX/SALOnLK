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

  const handleService = (input) => {
    setPickServices((arr) => arr.concat(input));
    console.log(pickServices);
  };

  return (
    <section id="booking" className="flex item-center p-10">
      <div className="bg-white w-[60%] ">
        <div className="px-20 py-10">
          <StepProgressBar step={index} />
        </div>

        <div className="px-10 pt-10">{PageDisplay()}</div>
        <div className="px-10 pb-2 flex justify-end items-center">
          <button
            type="submit"
            className="bg-[#273444] rounded-md h-[2.3rem] w-[8rem] border border-transparent px-4 text-[12px] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
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
    </section>
  );
};

export default Booking;
