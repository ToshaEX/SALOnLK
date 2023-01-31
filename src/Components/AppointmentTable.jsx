import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Table } from "./index";
import { Roles } from "../roles/roles";
import { slotsList } from "../views/Booking/BookingPages/slots";
import { appointmentArray, appointmentStatus } from "./appointmentStatus";

export default function AppointmentTable() {
  const [appointment, setAppointment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const { userId, role } = useSelector((state) => ({
    userId: state.user.userId,
    role: state.user.role,
  }));

  console.log(role);
  const columns = [
    {
      name: "Customer",
      selector: (row) => row.customerID,
      width: "150px",
      omit: role === Roles.USER,
    },
    {
      name: "Telephone",
      selector: (row) => row.customerTel,
      width: "150px",
      omit: role === Roles.USER,
    },
    {
      name: "Beautician",
      selector: (row) => row.beauticianID,
      width: "150px",
      omit: role === Roles.BEAUTICIAN,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.date).toLocaleDateString(),
      width: "120px",
    },
    {
      name: "Time",
      selector: (row) =>
        `${slotsList[row?.slots[0] - 1].timeSlot.split("-")[0]} - ${
          slotsList[row?.slots.at(-1) - 1].timeSlot.split("-")[1]
        }`,
      width: "160px",
    },
    {
      name: "Status",
      center: true,
      width: "160px",
      cell: (row) => (
        <div
          className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 rounded-full ${
            row.status === appointmentStatus.APPROVED
              ? "text-green"
              : row.status === appointmentStatus.PENDING
              ? "text-yellow"
              : row.status === appointmentStatus.REJECTED
              ? "text-orange"
              : "text-gray"
          }`}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>

          {row.status}
        </div>
      ),
    },
    {
      name: "Total",
      center: true,
      selector: (row) => {
        const prices = row.services.map((service, i) => service.price);
        return `Rs: ${prices.reduce((a, b) => a + b, 0)}`;
      },
      width: "120px",
    },
    {
      name: "Services",

      omit: role === Roles.BEAUTICIAN || role === Roles.ADMIN,
      selector: (row) => row.services.map((service, i) => service.name + ",\n"),
      width: "auto",
    },
    {
      name: "Manage Status",
      center: true,
      width: "160px",
      omit: role === Roles.USER,
      cell: (row) => (
        <div className="">
          <select
            id="role"
            defaultValue={row.status}
            className="w-auto text-sm outline-none cursor-pointer"
            onChange={async (e) => {
              await axios({
                method: "PATCH",
                url: `appointment/${row.id}`,
                data: { is_approved: e.target.value },
              }).then(() => setRefresh(!refresh));
            }}
          >
            {appointmentArray.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
      ),
    },
  ];

  useEffect(() => {
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
  }, [refresh]);

  if (isLoading) {
    return <div>Loading upto</div>;
  }
  if (appointment.length === 0) {
    <div> no data to show</div>;
  }

  return (
    <div className="w-full h-full">
      <Table
        columns={columns}
        rows={appointment.map((item, index) => ({
          id: item._id,
          customerID: item.user.first_name,
          customerTel: item.user.phone,
          beauticianID: item.beautician.first_name,
          slots: item.slots,
          status: item.is_approved,
          services: item.services,
          date: item.appointment_date,
        }))}
      />
    </div>
  );
}
