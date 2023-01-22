import React from "react";
import { BiGridAlt, BiUser } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { NavLink } from "react-router-dom";

export default function SideMenu() {
  const Menu = [
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
      name: "Settings",
      icon: <SlSettings />,
      path: "/manage",
    },
  ];

  return (
    <div
      id="sidebar-mainSection"
      className="bg-primary h-auto px-5 min-w-[70px] md:min-w-[200px]"
    >
      <div className="pb-5 pt-8 hidden md:block">
        <div className="text-xl font-light border-b border-gray/100 pb-3 text-white">
          Menu
        </div>
      </div>
      <section className="routes pt-10 md:pt-0">
        {Menu.map((item, index) => {
          return (
            <NavLink to={item.path} key={"side-menu-list" + index}>
              <div className="mb-2 flex justify-start rounded-md gap-3 items-center px-1 py-2 text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md md:px-3">
                <div className="text-xl text-white">{item.icon}</div>

                <span className="text-md font-extralight text-white hidden md:block">
                  {item.name}
                </span>
              </div>
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
