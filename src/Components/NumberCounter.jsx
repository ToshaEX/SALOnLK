import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function NumberCounter() {
  const [viewPort, setViewPort] = useState(false);

  const details = [
    {
      endValue: 2,
      name: "Years of Experience",
    },
    {
      endValue: 1056,
      name: "Happy Customers",
    },
    {
      endValue: 26,
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
                onEnter={() => setViewPort(true)}
                onExit={() => setViewPort(false)}
              >
                <strong className="font-semibold text-5xl" defaultValue={0}>
                  {viewPort && (
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
