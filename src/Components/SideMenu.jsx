import React from "react";
import { BiGridAlt, BiUser } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const Menu = [
    {
      name: "Dashboard",
      icon: <BiGridAlt className="tex-2xl" />,
      path: "/manage",
    },
    {
      name: "Services",
      icon: <RiScissorsFill className="tex-2xl" />,
      path: "/service-handler",
    },
    {
      name: "Employee",
      icon: <BiUser className="tex-2xl" />,
      path: "/employee-handler",
    },
    {
      name: "Settings",
      icon: <SlSettings className="tex-2xl" />,
      path: "/manage",
    },
  ];

  return (
    <div
      id="MainSideMenu"
      className="h-screen bg-white border-r border-primary/80 p-8 mt-[1rem]"
    >
      <div>
        <div className="text-xl font-bold border-b border-gray/100 pb-3">
          Menu
        </div>
        <ul className="space-y-7 mt-6">
          {Menu.map((item, index) => {
            return (
              <Link to={item.path}>
                <li
                  className="mb-2 flex justify-start rounded-md gap-3 items-center px-3 py-2 text-primary hover:bg-gray/90 hover:text-white hover:shadow-md"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <span className="text-base">{item.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
