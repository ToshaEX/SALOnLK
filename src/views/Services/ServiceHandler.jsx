import React, { useState, useEffect } from "react";
import axios from "axios";
import ServicesView from "./ServicesView";
import ServicesDelete from "./ServicesDelete";
import { DataTable } from "../../Components/index";

export default function ServiceHandler() {
  const [select, setSelect] = useState("Hair");
  const [selectSub, setSelectSub] = useState("Hair Cut");
  const [show, setShow] = useState("display");
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

  const columns = [
    {
      field: "_id",
      width: 0,
      hide: true,
    },
    {
      field: "name",
      headerName: "SERVICE NAME",
      width: 180,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "category",
      width: 0,
      hide: true,
    },
    {
      field: "sub_category",
      width: 0,
      hide: true,
    },
    {
      field: "description",
      headerName: "DESCRIPTION",
      width: 500,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "price",
      headerName: "PRICE",
      width: 110,
      cellClassName: "data-column-cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "time",
      headerName: "TIME",
      width: 110,
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
    data.price = parseInt(data.price.slice(4));
    data.time = parseInt(data.time.slice(0, data.time.length - 4));

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
    <div id="MainServiceHandler" className="bg-white p-10">
      <div>
        {/* heder section */}
        <div className="h-[3.5rem] pt-2 pb-2 gap-5 flex align-center text-center justify-start pr-[5rem]">
          <div>
            <button
              type="submit"
              className="rounded-md h-full border border-transparent bg-primary px-4 text-[12px] pt-[0.1rem] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
              onClick={() => SetIsModalOpen(true)}
            >
              Create new Service
            </button>
          </div>

          <div>
            <select
              className="md:w-[20rem] rounded-lg text-sm"
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
        <DataTable
          columns={columns}
          rows={service
            .filter((val) =>
              select === "Hair"
                ? val.sub_category === selectSub
                : val.category === select
            )
            .map((item, i) => ({
              id: i,
              _id: item._id,
              category: select,
              sub_category: selectSub,
              name: item.name,
              description: item.description,
              price: `Rs: ${item.price}`,
              time: `${item.time} min`,
              col5: "Edit",
              col6: "Delete",
            }))}
          callback={getClickedItem}
        />
      </div>

      {/* add create new service modal and update modal */}
      {isModalOpen && (
        <ServicesView
          onClose={SetIsModalOpen}
          service={selectedService}
          setService={SetSelectedService}
        />
      )}

      {/* add services delete modal */}
      {isModalOpenTwo && (
        <ServicesDelete
          onClose={SetIsModalOpenTwo}
          service={selectedService}
          setService={SetSelectedService}
        />
      )}
    </div>
  );
}
