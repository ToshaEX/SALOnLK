import React, { useEffect, useState } from "react";
import { BiUser, BiDollar } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import axios from "axios";
import ProfitChart from "./Charts/ProfitChart";
import AppointmentTable from "../../Components/AppointmentTable";
import GoToTop from "../../GoToTop";

export default function Dashboard() {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState(0);
  const [appointments, setAppointments] = useState([]);

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

    axios({
      method: "GET",
      url: `appointment`,
      responseType: "json",
    })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);

  // use dummy percentages
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
      numbers: appointments.length,
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
      numbers: `Rs: ${0}`,
      percentage: "0.0",
      percentageValue: "balance",
      date: "Since last month",
      icon: <BiDollar />,
    },
  ];

  return (
    <div id="MainDashboard" className="min-h-screen p-10 bg-white">
      <div className="grid grid-cols-1">
        {/* first section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3">
          {/* number cards */}
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 md:col-span-1">
            {numberDetails.map((item, index) => {
              return (
                <div
                  className="bg-white rounded-md shadow-md overflow-hidden"
                  key={"dashboard-list-1" + index}
                >
                  <div className="flex justify-between items-center p-3 mt-1">
                    <p className="text-[13px]">{item.name}&nbsp;</p>
                    {item.icon}
                  </div>
                  <div className="px-3">
                    <div className="font-semibold text-[22px]">
                      {item.numbers}
                    </div>
                    <div className="flex items-center justify-between text-[15px] my-2">
                      <div
                        className={
                          item.percentageValue === "increase"
                            ? "text-green"
                            : item.percentageValue === "balance"
                            ? "text-yellow"
                            : "text-orange"
                        }
                      >
                        {item.percentageValue === "increase"
                          ? "+"
                          : item.percentageValue === "balance"
                          ? " "
                          : "-"}
                        {item.percentage}%
                      </div>

                      <div className="text-[9px] text-gray">{item.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* liner chart */}
          {/* use dummy data to display chart */}
          <div className="bg-white shadow-md rounded-md md:col-span-2 px-3 pt-3 pb-0 overflow-hidden text-[13px]">
            <ProfitChart />
          </div>
        </div>
        {/* second section */}
        <div className="mt-1">
          {/* appointment table */}
          <div className="shadow-md rounded-md">
            <AppointmentTable />
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
}
