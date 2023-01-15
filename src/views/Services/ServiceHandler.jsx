import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateServices from "./CreateServices";
import EditServices from "./EditServices";

const ServiceHandler = () => {
  const [select, setSelect] = useState("Hair");
  const [selectSub, setSelectSub] = useState("Hair Cut");
  const [show, setShow] = useState("display");

  const [service, setServices] = useState([]);

  const [visibility, setVisibility] = useState(false);
  const handleOnClose = () => setVisibility(false);

  const [visibility2, setVisibility2] = useState(false);
  const handleOnClose2 = () => setVisibility2(false);

  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [time, setTime] = useState();

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
  }, []);

  return (
    <div className="bg-white p-10">
      <div>
        {/* heder section */}
        <div className=" h-[3.5rem] p-2 gap-5 flex align-center text-center justify-start">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-primary px-4 text-xs uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setVisibility(true)}
          >
            Create new Service
          </button>

          <select
            className="w-[20rem] rounded-lg text-sm"
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

          <div className={show}>
            <select
              className="w-[20rem] rounded-lg text-sm"
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
        <div className="p-3">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Service name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Description</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Price</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Time</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {service
                  .filter((val) =>
                    select === "Hair"
                      ? val.sub_category === selectSub
                      : val.category === select
                  )
                  .map((item, i) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray"
                      key={i}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.description}</td>
                      <td className="px-6 py-4">Rs:&nbsp;{item.price}</td>
                      <td className="px-6 py-4">{item.time}&nbsp;min</td>

                      <td className="px-6 py-4 text-right text-green">
                        <div
                          onClick={() => {
                            setVisibility2(true);
                            setName(item.name);
                            setDesc(item.description);
                            setPrice(item.price);
                            setTime(item.time);
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-orange">
                        <a
                          href="/"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* add create new service modal */}
      <CreateServices visible={visibility} onClose={handleOnClose} />

      {/* add edit services modal */}
      <EditServices
        visible={visibility2}
        onClose={handleOnClose2}
        categoryValue={select}
        sub_categoryValue={selectSub}
        nameValue={name}
        descValue={desc}
        priceValue={price}
        timeValue={time}
      />
    </div>
  );
};

export default ServiceHandler;
