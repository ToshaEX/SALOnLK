import React, { useEffect, useState } from "react";
import GoToTop from "../../GoToTop";
import { BiUser, BiDollar } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import axios from "axios";
import ProfitChart from "./Charts/ProfitChart";
import ServiceChart from "./Charts/ServiceChart";
import {
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export default function Dashboard() {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    axios({
      method: "GET",
      url: "service",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });

    axios({
      method: "GET",
      url: "user/count?role=user",
      responseType: "json",
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);

  const numberDetails = [
    {
      name: "Total Customers",
      numbers: users,
      percentage: "14.32",
      percentageValue: "increase",
      date: "Since last month",
      icon: <BiUser />,
    },
    {
      name: "Total Appointments",
      numbers: "1024",
      percentage: "12.24",
      percentageValue: "decrease",
      date: "Since last month",
      icon: <IoMdCalendar />,
    },
    {
      name: "Total Services",
      numbers: services.length,
      percentage: "5.67",
      percentageValue: "increase",
      date: "Since last month",
      icon: <RiScissorsFill />,
    },
    {
      name: "Profit",
      numbers: `Rs: ${52510}`,
      percentage: "18.46",
      percentageValue: "increase",
      date: "Since last month",
      icon: <BiDollar />,
    },
  ];

  return (
    <div
      id="MainDashboard"
      className="h-screen border-r border-gray-200 w-60 p-10 bg-white"
    >
      <div className="grid grid-cols-1 grid-rows-2 gap-3">
        {/* first section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 md:h-[15.5rem]">
          {/* number cards */}
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 md:col-span-1">
            {numberDetails.map((item, index) => {
              return (
                <div
                  className="bg-white rounded-md shadow-md"
                  key={"dashboard-list-1" + index}
                >
                  <div className="flex justify-between items-center p-3 mt-1">
                    <p className="text-[13px]">{item.name}&nbsp;</p>
                    {item.icon}
                  </div>
                  <div className="px-3">
                    <StatGroup>
                      <Stat>
                        <StatNumber>{item.numbers}</StatNumber>
                        <div className="flex items-center justify-between md:mb-2">
                          <StatHelpText>
                            <StatArrow type={item.percentageValue} />
                            {item.percentage}%
                          </StatHelpText>
                          <div className="text-[8px] text-gray ">
                            {item.date}
                          </div>
                        </div>
                      </Stat>
                    </StatGroup>
                  </div>
                </div>
              );
            })}
          </div>
          {/* liner chart */}
          <div className="bg-white shadow-md rounded-md md:col-span-2 px-3 pt-3 pb-0 overflow-hidden text-[13px]">
            <ProfitChart />
          </div>
        </div>

        {/* second section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 md:row-span-6 md:h-[20rem]">
          {/* customer vs services chart */}
          <div className="shadow-md rounded-md md:col-span-2">
            appointment list
          </div>
          {/* bookings */}
          <div className="shadow-md rounded-md md:col-span-1 overflow-hidden text-[13px] bg-white p-3">
            <ServiceChart />
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
}
