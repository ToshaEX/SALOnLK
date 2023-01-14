import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [select, setSelect] = useState("Hair");
  return (
    <div className="py-[4.5rem] md:py-[6rem]">
      {/* main container */}
      <div className="container mx-auto md:flex">
        {/* services add section */}
        <div className="bg-blue w-full py-10 px-9 md:px-12 md:w-1/2">
          <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            className="w-full"
          >
            <option value="Hair">Hair</option>
            <option value="Makeup">Makeup</option>
            <option value="Brows">Brows</option>
            <option value="Nails">Nails</option>
            <option value="Cosmetology">Cosmetology</option>
            <option value="Massage">Massage</option>
          </select>
          <h1>{select}</h1>

          <div>
            <div className="bg-white p-2 mt-1 flex justify-between">
              <div>
                <h3>Clipper Cut</h3>
                <h4>$39</h4>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="bg-white p-2 mt-1 flex justify-between">
              <div>
                <h3>Hair Cut</h3>
                <h4>$29</h4>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        {/* booking services display section */}
        <div className="bg-green w-full py-10 px-9 md:px-12 md:w-1/2">
          <div className="flex justify-center">
            <h2>Selected Services</h2>
          </div>
          <div>
            <div className="bg-white p-2 mt-1">
              <h3>Clipper Cut</h3>
              <h4>$39</h4>
            </div>
            <div className="bg-white p-2 mt-1">
              <h3>Clipper Cut</h3>
              <h4>$39</h4>
            </div>
            <div className="bg-white p-2 mt-1">
              <h3>Clipper Cut</h3>
              <h4>$39</h4>
            </div>
          </div>
          <div>
            <h2>Total amount {"$100"}</h2>
          </div>
          <div>
            <select>
              <option>8.00 am - 9.00 am</option>
              <option>9.00 am - 10.00 am</option>
              <option>10.00 am - 11.00 am</option>
              <option>11.00 am - 12.00 pm</option>
              <option>1.00 pm - 2.00 pm</option>
              <option>2.00 pm - 3.00 pm</option>
              <option>4.00 pm - 5.00 pm</option>
              <option>5.00 pm - 6.00 pm</option>
            </select>
          </div>
          <div>
            <input type="date" />
          </div>
          <div>
            <input type="text" placeholder="special note" />
          </div>
          <div className="flex pt-[3rem] justify-center">
            <button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
