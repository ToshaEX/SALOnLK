import React, { useState } from "react";
import { BiGridAlt, BiUser } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function SideMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id="sidebar-mainSection" className="bg-[#f7f9fc] h-[100vh] px-5">
      <motion.div
        animate={{ width: isCollapsed ? "160px" : "40px" }}
        className=""
      >
        <div className="px-3 pb-5 pt-8 hidden md:flex md:justify-end">
          {isCollapsed ? (
            <HiOutlineMenuAlt3
              className="cursor-pointer text-xl text-primary/80"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            />
          ) : (
            <HiOutlineMenuAlt2
              className="cursor-pointer text-xl text-primary/80"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            />
          )}
        </div>
        {isCollapsed ? (
          <AnimatePresence>
            <motion.div className="pb-5 hidden md:block">
              <div className="text-xl font-bold border-b border-gray/100 pb-3">
                Menu
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          ""
        )}

        <section className="routes pt-10 md:pt-0">
          {Menu.map((item, index) => {
            return (
              <NavLink to={item.path}>
                <div
                  className="mb-2 flex justify-start rounded-md gap-3 items-center px-3 py-2 text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md"
                  key={index}
                >
                  <div className="text-xl">{item.icon}</div>
                  {isCollapsed ? (
                    <AnimatePresence>
                      <motion.span className="text-lg">{item.name}</motion.span>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
    </div>
  );
}
