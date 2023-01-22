import React, { useState, useEffect } from "react";
import axios from "axios";
import ServicesView from "./ServicesView";
import ServicesDelete from "./ServicesDelete";
import { Table } from "../../Components/index";

export default function ServiceHandler() {
  const [select, setSelect] = useState("Hair");
  const [selectSub, setSelectSub] = useState("Hair Cut");
  const [show, setShow] = useState("display");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const [services, setServices] = useState([]);

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

  const columns = [
    {
      name: "SERVICE NAME",
      selector: (row) => row.name,
      maxWidth: "180px",
      wrap: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => row.description,
      grow: 2,
      wrap: true,
    },
    {
      name: "PRICE",
      selector: (row) => row.price,
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "TIME",
      selector: (row) => row.time,
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
      setSelectedService(data);
      setIsModalOpen(true);
    } else if (type === "delete") {
      setSelectedService(data);
      setIsModalOpenTwo(true);
    }
  };

  function filterDataById(dataId) {
    return services.filter((val) => val._id === dataId)[0];
  }

  return (
    <div id="MainServiceHandler" className="bg-white p-10 min-h-screen">
      {/* heder section */}
      <div className="pt-2 pb-2 flex flex-col gap-2 justify-start md:gap-5 md:pr-[5rem] md:flex-row">
        <div>
          <button
            type="submit"
            className="rounded-md h-[2.5rem] w-[10.3rem] border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
            onClick={() => setIsModalOpen(true)}
          >
            Create new Service
          </button>
        </div>

        <div>
          <select
            className="md:w-[20rem] w-[10rem] rounded-lg text-sm"
            id="category"
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
              if (e.target.value === "Hair") {
                setShow("display");
              } else {
                setShow("hidden");
              }
            }}
          >
            <option value="Hair">Hair</option>
            <option value="Makeup">Makeup</option>
            <option value="Brows">Brows</option>
            <option value="Nails">Nails</option>
            <option value="Cosmetology">Cosmetology</option>
            <option value="Massage">Massage</option>
          </select>
        </div>

        <div className={show}>
          <select
            className="md:w-[20rem] rounded-lg text-sm"
            id="sub_category"
            value={selectSub}
            onChange={(e) => {
              setSelectSub(e.target.value);
            }}
          >
            <option value="Hair Cut">Hair Cut</option>
            <option value="Color">Color</option>
          </select>
        </div>
      </div>

      {/* list view section */}
      <Table
        columns={columns}
        rows={services
          .filter((val) =>
            select === "Hair"
              ? val.sub_category === selectSub
              : val.category === select
          )
          .map((item, i) => ({
            id: item._id,
            category: select,
            sub_category: selectSub,
            name: item.name,
            description: item.description,
            price: `Rs: ${item.price}`,
            time: `${item.time} min`,
          }))}
      />

      {/* add create new service modal and update modal */}
      {isModalOpen && (
        <ServicesView
          onClose={setIsModalOpen}
          service={selectedService}
          setService={setSelectedService}
        />
      )}

      {/* add services delete modal */}
      {isModalOpenTwo && (
        <ServicesDelete
          onClose={setIsModalOpenTwo}
          service={selectedService}
          setService={setSelectedService}
        />
      )}
    </div>
  );
}
