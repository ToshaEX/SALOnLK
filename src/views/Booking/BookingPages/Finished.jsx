import React, { useState, useEffect } from "react";
import axios from "axios";

function Finished(props) {
  const { selectedServices, salary, b_id, date, timeTaken, handleFinished } =
    props;
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

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
        console.log("Failed to load Users", err);
      });

    axios({
      method: "GET",
      url: "user",
      responseType: "json",
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Users", err);
      });
  }, []);

  function iSChecked() {
    handleFinished(!checked);
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      {/* Display user selected all services and total price*/}
      <div className="px-3 mt-0 md:mt-5 mb-5 lg:mt-0 md:w-1/2 bg-white ">
        {/* selected services */}
        <div className="text-[14px] font-semibold pb-1">Selected Services</div>
        <div className=" shadow-md bg-[#f7f9fc] rounded-md">
          <div className="mt-1 p-2">
            {services
              .filter((val) => selectedServices.includes(val._id))
              .map((item, i) => {
                return (
                  <div key={i + "finished-list-1"}>
                    <div className="flex w-full justify-between items-center text-[14px] text-gray p-2 border-b">
                      <span>{item.name}</span>
                      <span>Rs:&nbsp;{item.price}</span>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Total price of the selected services */}
          <div className="flex w-full justify-between items-center mt-1 text-[15px] text-gray-dark p-2 px-4">
            <span>Total Price:</span>
            <span>Rs:&nbsp;{salary}</span>
          </div>
        </div>

        {/* confirm tick */}
        <div className="flex items-start mt-9">
          <div className="flex items-center h-5">
            <input
              id="agree"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
              onClick={() => {
                setChecked(!checked);
                iSChecked();
              }}
            />
          </div>

          <span className="ml-2 text-[14px] font-semibold">
            I confirm this appointment.
          </span>
        </div>
      </div>
      {/* Display beautician, date and time */}
      <div className="px-3 mt-5 mb-5 lg:mt-0 md:w-1/2 bg-white ">
        <div className="flex justify-between md:flex-col">
          {/* date */}
          <div>
            <div className="text-[14px] font-semibold pb-1">Selected Date</div>
            <div className="w-full text-[15px] text-gray-dark p-2 ">
              <span>{date}</span>
            </div>
          </div>
          {/* time */}
          <div>
            <div className="text-[14px] font-semibold pb-1">Selected Time</div>
            <div className="w-full text-[15px] text-gray-dark p-2 ">
              <span>{timeTaken}&nbsp;min</span>
            </div>
          </div>
        </div>

        {/* beautician */}
        <div className="mt-2 md:mt-0">
          <div className="text-[14px] font-semibold pb-1">
            Selected Beautician
          </div>
          <div>
            {users
              .filter((val) => val._id === b_id)
              .map((item, i) => {
                return (
                  <div key={i + "finished-list-2"}>
                    <div className="fw-full text-[15px] text-gray-dark p-2">
                      <span>
                        {item.first_name}&nbsp;{item.last_name}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finished;
