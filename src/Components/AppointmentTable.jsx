import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Table } from "./index";

export default function AppointmentTable() {
  const [appointment, setAppointment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state.user.userId);

  const columns = [
    {
      name: "Customer ID",
      selector: (row) => row.customerID,
      width: "150px",
    },
    {
      name: "Beautician ID",
      selector: (row) => row.beauticianID,
      width: "150px",
    },

    // {
    //   name: "Services",
    //   selector: (row) => row.services,
    //   width: "200px",
    // },
    {
      name: "Date",
      selector: (row) => row.date,
      width: "120px",
    },
    {
      name: "",
      center: true,
      button: true,
      cell: (row) => <button onClick={() => ""}>Approve</button>,
      style: {
        color: "rgb(39 52 68 / 1)",
      },
    },

    {
      name: "",
      center: true,
      button: true,
      cell: (row) => <button onClick={() => ""}>Done</button>,
      style: {
        color: "rgb(39 52 68 / 1)",
      },
    },
    {
      name: "",
      button: true,
      center: true,
      cell: (row) => <button onClick={() => ""}>Delete</button>,
      style: {
        color: "rgb(248 113 113)",
      },
    },
  ];

  useEffect(() => {
    console.log("runnn");
    axios({
      method: "GET",
      url: `appointment/user/all/${userId}`,
      responseType: "json",
    })
      .then((res) => {
        setAppointment(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to load Users", err);
      });
  }, []);

  if (isLoading) {
    return <div>hitan upto</div>;
  }

  return (
    <div className="w-full h-full">
      <Table
        columns={columns}
        rows={appointment.map((item, index) => ({
          id: item._id,
          customerID: item.user,
          beauticianID: item.beautician,
          // services: item.services,
          date: item.appointment_date,
        }))}
      />
    </div>
  );
}
