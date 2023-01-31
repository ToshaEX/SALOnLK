import React from "react";
import { Link } from "react-router-dom";
import AppointmentTable from "../../Components/AppointmentTable";
import GoToTop from "../../GoToTop";

const AppointmentHandler = () => {
  return (
    <div id="MainAppointmentHandler" className="bg-white p-10 min-h-screen">
      {/* header section */}
      <div className="pt-2 pb-2 flex flex-col gap-2 justify-start md:gap-5 md:pr-[5rem] md:flex-row">
        <div>
          <Link to="/booking">
            <button
              type="submit"
              className="rounded-md h-[2.5rem] w-[12rem] border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            >
              Book an appointment
            </button>
          </Link>
        </div>
      </div>

      {/* table view section */}
      <AppointmentTable />

      <GoToTop />
    </div>
  );
};

export default AppointmentHandler;
