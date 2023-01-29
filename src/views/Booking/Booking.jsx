import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Footer, StepProgressBar } from "../../Components/index";

const Booking = () => {
  const [index, setIndex] = useState(1);

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
    }
  };

  return (
    <section id="booking" className="flex justify-center item-center p-10">
      <div className="bg-white w-2/3 shadow-md rounded-md ">
        <div className="px-20 py-10">
          <StepProgressBar step={index} />
        </div>

        <div className="p-10 bg-green">hi</div>
        <div className="px-10 py-3 flex">
          <button
            type="submit"
            className="bg-[#273444] rounded-md h-[2.3rem] w-[9rem] border border-transparent px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            onClick={() => prevButton()}
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-[#273444] rounded-md h-[2.3rem] w-[9rem] border border-transparent px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            onClick={() => nextButton()}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
