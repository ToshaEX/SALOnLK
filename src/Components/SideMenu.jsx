import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGridAlt, BiUser } from "react-icons/bi";
import { RiScissorsFill, RiPieChartFill } from "react-icons/ri";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";

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
      icon: <BiUser />,
      path: "/employee-handler",
    },
    {
      name: "Charts",
      icon: <RiPieChartFill />,
      path: "/chart-handler",
    },
  ];

  const [navSize, changeNavSize] = useState("large");

  return (
    <div
      id="sidebar-mainSection"
      className={
        navSize === "small"
          ? "w-[75px] bg-primary px-[1.34rem] md:px-4 min-h-screen"
          : "w-[200px] bg-primary px-5 min-h-screen"
      }
    >
      <div className="routes pt-10 md:pt-0 ">
        {/* side bar toggle button */}
        <div className="mb-[2rem] flex justify-end cursor-pointer">
          <div className={navSize === "small" ? "hidden" : "block"}>
            <HiOutlineMenuAlt3
              className="mt-[13px] text-white text-xl"
              onClick={() => {
                if (navSize === "small") {
                  changeNavSize("large");
                } else {
                  changeNavSize("small");
                }
              }}
            />
          </div>
          <div className={navSize === "small" ? "block px-3" : "hidden"}>
            <HiOutlineMenuAlt2
              className="mt-[13px] text-white text-xl"
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
        <div>
          {sideMenuList.map((item, index) => {
            return (
              <Link to={item.path} key={"side-menu-list" + index}>
                <div className="py-[4.8px]">
                  <div className="mb-2 flex justify-start rounded-md gap-4 items-center py-[0.7rem] text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md md:px-3">
                    <span className="text-xl text-white">{item.icon}</span>
                    <div className={navSize === "small" ? "hidden" : "block"}>
                      <span className="text-md font-extralight text-white ">
                        {item.name}
                      </span>
                    </div>
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
