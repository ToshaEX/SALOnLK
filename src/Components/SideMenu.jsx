import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGridAlt, BiUser } from "react-icons/bi";
import { RiScissorsFill, RiPieChartFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
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
      name: "Calendar",
      icon: <IoMdCalendar />,
      path: "/",
    },
    {
      name: "Charts",
      icon: <RiPieChartFill />,
      path: "/chart-handler",
    },
    {
      name: "Settings",
      icon: <SlSettings />,
      path: "/",
    },
  ];

  const [navSize, changeNavSize] = useState("large");

  return (
    // <Flex
    //   pos="sticky"
    //   minHeight="100vh"
    //   boxShadow="0 0 12px 0 rgba(0, 0, 0, 0.05)"
    //   w={navSize === "small" ? "75px" : "200px"}
    //   flexDir="column"
    //   justifyContent="space-between"
    //   bg="#273444"
    // >
    //   <Flex
    //     p="5%"
    //     flexDir="column"
    //     w="100%"
    //     alignItems={navSize === "small" ? "center" : "flex-start"}
    //     as="nav"
    //   >
    //     <IconButton
    //       background="none"
    //       mt={5}
    //       _hover={{ background: "none" }}
    //       icon={
    //         navSize === "small" ? (
    //           <HiOutlineMenuAlt3 className="mt-[13px] text-white text-xl" />
    //         ) : (
    //           <HiOutlineMenuAlt2 className="text-white text-xl" />
    //         )
    //       }
    //       onClick={() => {
    //         if (navSize === "small") {
    //           changeNavSize("large");
    //         } else {
    //           changeNavSize("small");
    //         }
    //       }}
    //     />

    //     {sideMenuList.map((item, index) => {
    //       return (
    //         <Flex
    //           mt={5}
    //           flexDir="column"
    //           w="100%"
    //           alignItems={navSize === "small" ? "center" : "flex-start"}
    //           key={index + "sidebar-list"}
    //         >
    //           <Menu>
    //             <Link to={item.path}>
    //               <MenuButton
    //                 w={navSize === "small" ? "100%" : "180px"}
    //                 _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
    //                 p={3}
    //                 //backgroundColor={"#AEC8CA"}
    //                 borderRadius={8}
    //               >
    //                 <Flex>
    //                   <div className="text-xl text-gray mt-0.5">
    //                     {item.icon}
    //                   </div>
    //                   <Text
    //                     ml={5}
    //                     display={navSize === "small" ? "none" : "flex"}
    //                     color="white"
    //                   >
    //                     {item.name}
    //                   </Text>
    //                 </Flex>
    //               </MenuButton>
    //             </Link>
    //           </Menu>
    //         </Flex>
    //       );
    //     })}
    //   </Flex>
    // </Flex>
    <div
      id="sidebar-mainSection"
      className="bg-primary h-auto px-5 min-w-[70px] md:min-w-[200px]"
    >
      <section className="routes pt-10 md:pt-0">
        <div className="mb-[3rem]"></div>
        <div className={navSize === "small" ? "w-[75px]" : "w-[200px]"}>
          {sideMenuList.map((item, index) => {
            return (
              <Link to={item.path} key={"side-menu-list" + index}>
                <div className="mb-2 flex justify-start rounded-md gap-3 items-center px-1 py-2 text-primary/80 hover:bg-gray/90 hover:text-white hover:shadow-md md:px-3">
                  <div className="text-xl text-white">{item.icon}</div>
                  <span className="text-md font-extralight text-white hidden md:block">
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
