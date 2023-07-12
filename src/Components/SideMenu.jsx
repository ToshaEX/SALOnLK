import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGridAlt } from "react-icons/bi";
import { RiScissorsFill, RiPieChartFill } from "react-icons/ri";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

export default function SideMenu() {
  const sideMenuList = [
    {
      name: "Dashboard",
      icon: <BiGridAlt />,
      path: "/manage",
    },
    {
      name: "Services",
      icon: <RiScissorsFill />,
      path: "/service-handler",
    },
    {
      name: "Employee",
      icon: <FiUsers />,
      path: "/employee-handler",
    },
    {
      name: "Charts",
      icon: <RiPieChartFill />,
      path: "/chart-handler",
    },
  ];

  const [navSize, changeNavSize] = useState("small");

  return (
    <div
      id="sidebar-mainSection"
      className={`w-[53px] px-1 bg-primary min-h-screen mini:w-[38px] md:px-4 md:w-[75px] ${
        navSize === "small" ? " " : "md:px-5 md:min-w-[200px]"
      }`}
    >
      <div className="routes pt-10 md:pt-0 ">
        {/* side bar toggle button */}
        <div
          className={`mb-[2rem] flex ${
            navSize === "small" ? "justify-center" : "justify-end"
          }`}
        >
          <div
            className={`hidden ${navSize === "small" ? "hidden" : "md:block"}`}
          >
            <HiOutlineMenuAlt3
              className="mt-[13.2px] text-white text-xl cursor-pointer"
              onClick={() => {
                if (navSize === "small") {
                  changeNavSize("large");
                } else {
                  changeNavSize("small");
                }
              }}
            />
          </div>
          <div
            className={`hidden ${navSize === "small" ? "md:block" : "hidden"}`}
          >
            <HiOutlineMenuAlt2
              className="mt-[13px] text-white text-xl cursor-pointer"
              onClick={() => {
                if (navSize === "small") {
                  changeNavSize("large");
                } else {
                  changeNavSize("small");
                }
              }}
            />
          </div>
        </div>
        {/* side bar item list */}
        <div className="hidden md:block">
          {sideMenuList.map((item, index) => {
            return (
              <Link to={item.path} key={"side-menu-list" + index}>
                <div className="py-[4.8px]">
                  <div
                    className={`${
                      navSize === "small" ? "justify-center" : "justify-start"
                    } mb-2 flex  rounded-md gap-4 items-center py-[0.7rem] text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md md:px-3`}
                  >
                    <span
                      className={`text-xl text-white ${
                        navSize === "small" ? "pt-[2px]" : " "
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div className={navSize === "small" ? "hidden" : "block"}>
                      <span className="text-sm md:text-md font-extralight text-white">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="block md:hidden">
          {sideMenuList.map((item, index) => {
            return (
              <Link to={item.path} key={"side-menu-lists" + index}>
                <div className="py-[4.8px]">
                  <div
                    className={`mb-2 flex justify-center rounded-md items-center py-[0.7rem] text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md`}
                  >
                    <span className={`text-xl text-white`}>{item.icon}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
