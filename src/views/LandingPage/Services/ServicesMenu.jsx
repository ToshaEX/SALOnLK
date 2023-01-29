import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nail from "../../../assets/nail-polish.png";
import Brow from "../../../assets/mascara.png";
import Cosmetology from "../../../assets/hair-comb.png";
import Hair from "../../../assets/woman-hair.png";
import Makeup from "../../../assets/makeup.png";
import Massage from "../../../assets/massage.png";

const ServicesMenu = () => {
  const [text, setText] = useState(
    "Get your nails done for great mood. Simple pleasures can make your week, not just day."
  );

  const [nailLine, setNailLine] = useState(true);
  const [browsLine, setBrowsLine] = useState(false);
  const [cosLine, setCosLine] = useState(false);
  const [hairLine, setHairLine] = useState(false);
  const [makeupLine, setMakeupLine] = useState(false);
  const [massageLine, setMassageLine] = useState(false);

  function CheckLine(lineName) {
    if (lineName === "Nails") {
      setNailLine(true);
      setBrowsLine(false);
      setCosLine(false);
      setHairLine(false);
      setMakeupLine(false);
      setMassageLine(false);
    } else if (lineName === "Brow") {
      setBrowsLine(true);
      setNailLine(false);
      setCosLine(false);
      setHairLine(false);
      setMakeupLine(false);
      setMassageLine(false);
    } else if (lineName === "Cosmetology") {
      setCosLine(true);
      setBrowsLine(false);
      setHairLine(false);
      setNailLine(false);
      setMakeupLine(false);
      setMassageLine(false);
    } else if (lineName === "Hair") {
      setHairLine(true);
      setCosLine(false);
      setBrowsLine(false);
      setNailLine(false);
      setMakeupLine(false);
      setMassageLine(false);
    } else if (lineName === "MakeUp") {
      setMakeupLine(true);
      setCosLine(false);
      setBrowsLine(false);
      setNailLine(false);
      setHairLine(false);
      setMassageLine(false);
    } else if (lineName === "Massage") {
      setMassageLine(true);
      setCosLine(false);
      setBrowsLine(false);
      setNailLine(false);
      setHairLine(false);
      setMakeupLine(false);
    }
  }

  const servicesList = [
    {
      name: "Nails",
      description:
        "Get your nails done for great mood. Simple pleasures can make your week, not just day.",
      img: Nail,
      line: nailLine,
    },
    {
      name: "Brow",
      description:
        "Brows can change it all. Try out styling and tinting your brows and see the difference.",
      img: Brow,
      line: browsLine,
    },
    {
      name: "Cosmetology",
      description:
        "Indulge a little longer with a customized facial to help achieve your skin goals in 60-90 minutes.",
      img: Cosmetology,
      line: cosLine,
    },
    {
      name: "Hair",
      description:
        "Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!",
      img: Hair,
      line: hairLine,
    },
    {
      name: "MakeUp",
      description:
        "Complete your service with beautiful makeup and simply be amazing with complete look.",
      img: Makeup,
      line: makeupLine,
    },
    {
      name: "Massage",
      description:
        "There are some things in life where it's better to receive than to give, and massage is one of them.",
      img: Massage,
      line: massageLine,
    },
  ];

  return (
    <div className="p-0 md:p-[3rem]">
      <div className="text-center mb-[18px]">
        <h2 className="font-bold text-[40px] leading-none tracking-tight px-[3rem] pt-[3rem] md:px-0 md:pt-0">
          Service Menu
        </h2>
      </div>

      <div className="p-[1.5rem] flex items-center justify-between pt-10 pb-[18px] text-center mx-auto md:justify-center md:gap-20 md:mb-[20px]">
        {servicesList.map((item, i) => {
          return (
            <div key={"services-list-1" + i}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setText(item.description);
                  CheckLine(item.name);
                }}
              >
                <div className="h-[45px] w-[45px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                  <img
                    className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                    src={item.img}
                    alt="service-list"
                  />
                </div>
                <div className="hidden md:block">
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="h-[2px] bg-[#273444]" hidden={!item.line}></div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center px-[3rem] md:px-0">
        <div className="text-center max-w-md">
          <span
            id="textParagraph"
            className="font-regular text-[18px] leading-none tracking-tight text-gray"
          >
            {text}
          </span>
        </div>
      </div>

      <div className="flex pt-8 justify-center pb-[3rem] md:pb-0">
        <Link to="/services">
          <button className="btn-primary text-[#273444] border-[#273444] hover:bg-gray-dark hover:text-white">
            View Service Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesMenu;
