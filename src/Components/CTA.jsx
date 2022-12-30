import React from "react";

const CTA = () => {
  return (
    <div className="py-[3rem] md:px-[10rem] md:flex md:justify-between md:items-baseline">
      <div id="1" className="md:pt-0">
        <div className="w-[50px] h-[50px] m-auto mb-[22px]">
          <img
            className="drop-shadow-xl"
            src={require("../assets/smartphone.png")}
            alt="phone"
          />
        </div>
        <span
          id="productName"
          className="relative block text-[16px] font-bold text-center"
        >
          Contact
        </span>
        <div className="pt-[2px]">
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            T: 070 9485 756
          </span>
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            info@salonlk.com
          </span>
        </div>
      </div>

      <div id="2" className="pt-10 md:pt-0">
        <div className="w-[50px] h-[50px] m-auto mb-[22px]">
          <img
            className="drop-shadow-xl"
            src={require("../assets/time.png")}
            alt="time"
          />
        </div>
        <span
          id="productName"
          className="relative block text-[16px] font-bold text-center"
        >
          Hours
        </span>
        <div className="pt-[2px]">
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            Mon - Fri: 8 am - 8 pm
          </span>
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            Sat: 9 am - 6 pm
          </span>
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            Sun: 9 am - 4 pm
          </span>
        </div>
      </div>

      <div id="3" className="pt-10 md:pt-0">
        <div className="w-[50px] h-[50px] m-auto mb-[22px]">
          <img
            className="drop-shadow-xl"
            src={require("../assets/pin.png")}
            alt="pin"
          />
        </div>
        <span
          id="productName"
          className="relative block text-[16px] font-bold text-center"
        >
          Location
        </span>
        <div className="pt-[2px]">
          <span
            id="productPrice"
            className="relative block text-[14px] text-gray text-center"
          >
            No: 186/7 Royal Street, <br /> Colombo 07, Sri Lanka
          </span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
