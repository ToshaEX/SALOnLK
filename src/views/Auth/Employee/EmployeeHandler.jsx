import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeView from "./EmployeeView";
import EmployeeDelete from "./EmployeeDelete";
import { DataTable } from "../../../Components/index";

export default function EmployeeHandler() {
  const [select, setSelect] = useState("beautician");
  const [selectedService, SetSelectedService] = useState(null);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [isModalOpenTwo, SetIsModalOpenTwo] = useState(false);
  const [service, setServices] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, [isModalOpen, isModalOpenTwo]);

  const columns = [
    {
      field: "_id",
      width: 0,
      hide: true,
    },
    {
      field: "firstName",
      headerName: "FIRST NAME",
      width: 180,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lastName",
      headerName: "LAST NAME",
      width: 180,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "role",
      headerName: "ROLE",
      width: 150,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 180,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "CONTACT NO:",
      width: 180,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "gender",
      headerName: "GENDER:",
      width: 150,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col5",
      headerName: "",
      width: 80,
      cellClassName: "edit-column-cell",
    },
    {
      field: "col6",
      headerName: "",
      width: 80,
      cellClassName: "delete-column-cell",
    },
  ];

  const getClickedItem = (type, data) => {
    delete data.col5;
    delete data.col6;
    delete data.id;

    if (type === "edit") {
      SetSelectedService(data);
      SetIsModalOpen(true);
    } else if (type === "delete") {
      SetSelectedService(data);
      SetIsModalOpenTwo(true);
    }
  };

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
        <DataTable
          columns={columns}
          rows={service
            .filter((val) => val.role === select)
            .map((item, i) => ({
              id: i,
              _id: item._id,
              firstName: item.first_name,
              lastName: item.last_name,
              role: select,
              email: item.email,
              phone: item.phone,
              gender: item.gender,
              col5: "Edit",
              col6: "Delete",
            }))}
          callback={getClickedItem}
        />
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
