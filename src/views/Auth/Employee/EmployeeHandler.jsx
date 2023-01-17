import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeView from "./EmployeeView";
import EmployeeDelete from "./EmployeeDelete";

export default function EmployeeHandler() {
  const [select, setSelect] = useState("beautician");
  const [selectedService, SetSelectedService] = useState(null);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [isModalOpenTwo, SetIsModalOpenTwo] = useState(false);
  const [service, setServices] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/service",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, [isModalOpen, isModalOpenTwo]);

  return (
    <div id="MainEmployeeHandler" className="bg-white p-10">
      <div>
        {/* heder section */}
        <div className="h-[3.5rem] p-2 gap-5 flex align-center text-center justify-start pr-[5rem]">
          <div>
            <button
              type="submit"
              className="rounded-md h-full border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
              onClick={() => SetIsModalOpen(true)}
            >
              Add New Employee
            </button>
          </div>

          <div>
            <select
              className="md:w-[20rem] rounded-lg text-sm"
              id="role"
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option value="beautician">Beautician</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {/* list view section */}
        <div className="p-3">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Full name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Contact No:</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Email</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Gender</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {service
                  .filter((val) => val.role === select)
                  .map((item, i) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray"
                      key={item._id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.first_name}&nbsp;{item.last_name}
                      </th>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.gender}</td>

                      <td className="px-6 py-4 text-right text-primary/80 cursor-pointer">
                        <div
                          onClick={() => {
                            SetSelectedService(item);
                            SetIsModalOpen(true);
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-orange cursor-pointer">
                        <div
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => {
                            SetSelectedService(item);
                            SetIsModalOpenTwo(true);
                          }}
                        >
                          Delete
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* add create new employee modal and update modal */}
      {isModalOpen && (
        <EmployeeView
          onClose={SetIsModalOpen}
          service={selectedService}
          setService={SetSelectedService}
        />
      )}
      {/* add employee delete modal */}
      {isModalOpenTwo && (
        <EmployeeDelete
          onClose={SetIsModalOpenTwo}
          service={selectedService}
          setService={SetSelectedService}
        />
      )}
    </div>
  );
}
