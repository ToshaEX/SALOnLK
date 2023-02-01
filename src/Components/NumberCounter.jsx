import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import axios from "axios";

function NumberCounter() {
  const [users, setUsers] = useState(0);
  const [beauticians, setBeauticians] = useState(0);
  const [viewPorts, setViewPorts] = useState(false);

  useEffect(() => {
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
      url: "user/count?role=beautician",
      responseType: "json",
    })
      .then((res) => {
        setBeauticians(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);

  const details = [
    {
      endValue: 2,
      name: "Years of Experience",
    },
    {
      endValue: users,
      name: "Happy Customers",
    },
    {
      endValue: beauticians,
      name: "Number of Staff",
    },
    {
      endValue: 3,
      name: "Awards Received",
    },
  ];

  return (
    <div className="py-[2.5rem] md:px-[10rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center">
        {details.map((items, i) => {
          return (
            <div
              className="flex-col justify-center items-center text-center px-[1rem] py-[1rem] md:border-r border-[#C7C7C7] "
              key={"counter-list" + i}
            >
              <ScrollTrigger
                onEnter={() => setViewPorts(true)}
                onExit={() => setViewPorts(false)}
              >
                <strong className="font-semibold text-5xl" defaultValue={0}>
                  {viewPorts && (
                    <CountUp
                      start={0}
                      end={items.endValue}
                      duration={1}
                      delay={0}
                    ></CountUp>
                  )}
                </strong>
                <p className="font-normal text-xl mt-2 text-gray">
                  {items.name}
                </p>
              </ScrollTrigger>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NumberCounter;
