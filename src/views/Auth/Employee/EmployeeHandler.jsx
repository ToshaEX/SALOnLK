import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeView from "./EmployeeView";
import EmployeeDelete from "./EmployeeDelete";
import { Table } from "../../../Components/index";

export default function EmployeeHandler() {
  const [select, setSelect] = useState("beautician");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/",
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
      maxWidth: "180px",
      wrap: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => row.last_name,
      maxWidth: "180px",
      wrap: true,
    },
    {
      name: "ROLE",
      selector: (row) => row.role,
      maxWidth: "180px",
      wrap: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      maxWidth: "180px",
      wrap: true,
    },
    {
      name: "CONTACT NO:",
      selector: (row) => row.phone,
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "GENDER",
      selector: (row) => row.gender,
      sortable: true,
      maxWidth: "100px",
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
      {/* heder section */}
      <div className="pt-2 pb-2 flex flex-col gap-2 justify-start md:gap-5 md:pr-[5rem] md:flex-row">
        <div>
          <button
            type="submit"
            className="rounded-md h-[2.5rem] w-[10rem] border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Employee
          </button>
        </div>

        <div>
          <select
            className="md:w-[20rem] w-[10rem] rounded-lg text-sm"
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
      <Table
        columns={columns}
        rows={users
          .filter((val) => val.role === select)
          .map((item, i) => ({
            id: item._id,
            firstName: item.first_name,
            lastName: item.last_name,
            role: select,
            email: item.email,
            phone: item.phone,
            gender: item.gender,
          }))}
      />

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
    </div>
  );
}
