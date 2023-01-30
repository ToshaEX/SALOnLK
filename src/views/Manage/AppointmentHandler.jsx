import React, { useState } from "react";
import AppointmentTable from "../../Components/AppointmentTable";
import GoToTop from "../../GoToTop";

const AppointmentHandler = () => {
  const [selectDate, setSelectDate] = useState();

  return (
    <div id="MainAppointmentHandler" className="bg-white p-10 min-h-screen">
      {/* heder section */}
      <div className="pt-2 pb-2 flex flex-col gap-2 justify-start md:gap-5 md:pr-[5rem] md:flex-row">
        <div className="w-[18rem]">
          <input
            type="date"
            className="md:w-[20rem] w-[10rem] rounded-lg text-sm"
            onChange={(e) => {
              setSelectDate(e.target.value);
            }}
          />
        </div>
      </div>

      {/* table view section */}
      <AppointmentTable />

      <GoToTop />
    </div>
  );
};

export default AppointmentHandler;
