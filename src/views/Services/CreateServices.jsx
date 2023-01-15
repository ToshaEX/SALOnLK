import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateServices = ({ visible, onClose }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required!"),
    price: yup
      .number()
      .typeError("Price is not a number")
      .positive("Price is not a positive number")
      .integer("Price should be a number")
      .required("Price is required"),
    time: yup
      .number()
      .positive("Time is not a positive number")
      .typeError("Time is not a number")
      .integer("Time should be a number")
      .required("Time is required!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [select, setSelect] = useState("Hair");
  const [selectSub, setSelectSub] = useState("Hair Cut");
  const [show, setShow] = useState("display");

  const [viewOne, setViewOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(false);
  const vOne = viewOne ? "display" : "hidden";
  const vTwo = viewTwo ? "display" : "hidden";

  const formSubmit = async (data) => {
    setViewOne(false);
    setViewTwo(true);

    data.category = select;
    data.sub_category = select === "Hair" ? selectSub : "";
    return await newService(data);
  };

  async function newService(payload) {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3000/service",
      responseType: "json",
      data: payload,
    });
    reset();
    setViewOne(true);
    setViewTwo(false);
    console.log(JSON.stringify(data));
  }

  if (!visible) return null;

  const handleOnClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full pb-10 pt-6 px-9 md:px-12 md:w-1/2 bg-white rounded-lg">
        <div className="flex justify-end items-center">
          <button
            className="text-xl focus:outline-none pl-5"
            onClick={handleOnClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <h2 className="text-3xl mb-4">Create New Services</h2>

        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex justify-between align-center gap-5">
              <div className="w-1/2">
                <div className="mb-3 mt-5">
                  <select
                    className="w-full rounded-lg text-sm"
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

                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Name"
                    {...register("name")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.name?.message}
                  </p>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Price"
                    {...register("price")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.price?.message}
                  </p>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Time"
                    {...register("time")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.time?.message}
                  </p>
                </div>
              </div>

              <div className="w-1/2 mt-5">
                <div className={show}>
                  <div className="mb-3">
                    <select
                      className="w-full rounded-lg text-sm"
                      id="sub_category"
                      value={selectSub}
                      onChange={(e) => {
                        setSelectSub(e.target.value);
                      }}
                    >
                      <option value="Hair Cut">Hair cut</option>
                      <option value="Color">Color</option>
                    </select>
                  </div>
                </div>

                <div className="mb-[0.3rem]">
                  <textarea
                    id="description"
                    rows="6"
                    className="w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description..."
                    {...register("description")}
                  />

                  <p className="text-[#ff6347] text-[12px]">
                    {errors.description?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-[1rem] flex justify-center">
              <button
                type="submit"
                className="flex w-1/2 justify-center rounded-md border border-transparent bg-primary px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <div className={vOne}>
                  <div>
                    <div className="bg-primary px-4 text-xs uppercase bg-gray-50 text-white flex justify-center py-2">
                      Create Service
                    </div>
                  </div>
                </div>
                <div className={vTwo}>
                  <div className="flex items-center justify-center py-1">
                    <img
                      src={
                        require("../../assets/Spinner-1.9s-44px.svg").default
                      }
                      alt="mySvgImage"
                    />
                    <div className="bg-primary px-4 text-xs uppercase bg-gray-50 text-white">
                      Creating...
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateServices;
