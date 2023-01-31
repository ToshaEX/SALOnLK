import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeView from "./EmployeeView";
import EmployeeDelete from "./EmployeeDelete";
import { Table } from "../../../Components/index";
import GoToTop from "../../../GoToTop";

export default function EmployeeHandler() {
  const [select, setSelect] = useState("beautician");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
  }, [isModalOpen, isModalOpenTwo]);

  const columns = [
    {
      name: "FIRST NAME",
      selector: (row) => row.first_name,
    },
    {
      name: "LAST NAME",
      selector: (row) => row.last_name,
    },
    {
      name: "ROLE",
      selector: (row) => row.role,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      width: "180px",
    },
    {
      name: "CONTACT NO",
      selector: (row) => row.phone,
    },
    {
      name: "GENDER",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "",
      center: true,
      button: true,
      cell: (row) => (
        <button onClick={() => getClickedItem("edit", row.id)}>Edit</button>
      ),
      style: {
        color: "rgb(39 52 68 / 1)",
      },
    },
    {
      name: "",
      button: true,
      center: true,
      cell: (row) => (
        <button onClick={() => getClickedItem("delete", row.id)}>Delete</button>
      ),
      style: {
        color: "rgb(248 113 113)",
      },
    },
  ];

  const getClickedItem = (type, id) => {
    let data = filterDataById(id);

    if (type === "edit") {
      setSelectedUser(data);
      setIsModalOpen(true);
    } else if (type === "delete") {
      setSelectedUser(data);
      setIsModalOpenTwo(true);
    }
  };

  function filterDataById(dataId) {
    return users.filter((val) => val._id === dataId)[0];
  }

  return (
    <div id="MainEmployeeHandler" className="bg-white p-10 min-h-screen">
      {/* header section */}
      <div className="pt-2 pb-2 flex flex-col gap-2 justify-start md:gap-5 md:flex-row">
        <div>
          <button
            type="submit"
            className="rounded-md h-[2.5rem] w-[10rem] border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Employee
          </button>
        </div>

        <div className="md:w-[18rem]">
          <select
            id="role"
            value={select}
            className="md:w-[20rem] w-[10rem] rounded-lg text-sm"
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
      <div className="w-[68vw] md:w-full">
        <Table
          columns={columns}
          rows={users
            .filter((val) => val.role === select)
            .map((item, i) => ({
              id: item._id,
              first_name: item.first_name,
              last_name: item.last_name,
              role: select,
              email: item.email,
              phone: item.phone,
              gender: item.gender,
            }))}
          isExtended={false}
        />
      </div>

      {/* add create new employee modal and update modal */}
      {isModalOpen && (
        <EmployeeView
          onClose={setIsModalOpen}
          user={selectedUser}
          setUser={setSelectedUser}
        />
      )}
      {/* add employee delete modal */}
      {isModalOpenTwo && (
        <EmployeeDelete
          onClose={setIsModalOpenTwo}
          user={selectedUser}
          setUser={setSelectedUser}
        />
      )}

      <GoToTop />
    </div>
  );
}
