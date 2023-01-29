import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";
import { Select, Input, Textarea } from "@chakra-ui/react";

const ServicesView = ({ onClose, service = null, setService }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required!"),
    price: yup
      .number()
      .typeError("Price should be a number")
      .positive("Price is not a positive number")
      .integer("Price should be a number")
      .required("Price is required"),
    time: yup
      .number()
      .positive("Time is not a positive number")
      .typeError("Time should be a number")
      .integer("Time should be a number")
      .required("Time is required!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [select, setSelect] = useState(
    service === null ? "Hair" : service.category
  );
  const [selectSub, setSelectSub] = useState(
    service === null
      ? "Hair Cut"
      : service.sub_category === ""
      ? "Hair Cut"
      : service.sub_category
  );

  const [show, setShow] = useState(select === "Hair" ? false : true);

  const [viewOne, setViewOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(false);
  const vOne = viewOne ? "display" : "hidden";
  const vTwo = viewTwo ? "display" : "hidden";

  const formSubmit = async (data) => {
    setViewOne(false);
    setViewTwo(true);

    data.category = select;
    data.sub_category = select === "Hair" ? selectSub : "";
    return service === null
      ? await newService(data)
      : await updateService(data);
  };

  async function newService(payload) {
    await axios({
      method: "POST",
      url: "service",
      responseType: "json",
      data: payload,
    }).then(() => handleOnClose());
    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  async function updateService(payload) {
    await axios({
      method: "PATCH",
      url: `service/${service._id}`,
      responseType: "json",
      data: payload,
    }).then(() => {
      handleOnClose();
    });

    reset();
    setViewOne(true);
  }

  const handleOnClose = () => {
    onClose(false);
    setService(null);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full pb-8 pt-6 px-9 md:px-10 md:w-1/2 bg-white rounded-lg">
        <div className="flex justify-end items-center">
          <button
            className="text-xl focus:outline-none pl-5"
            onClick={handleOnClose}
          >
            <RiCloseCircleLine />
          </button>
        </div>
        <h2 className="text-3xl mb-4">
          {service === null ? "Create" : "Edit"} Services
        </h2>

        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex justify-between align-center gap-5">
              <div className="w-1/2">
                <div className="mb-3 mt-5">
                  <Select
                    id="category"
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                      if (e.target.value === "Hair") {
                        setShow(false);
                      } else {
                        setShow(true);
                      }
                    }}
                  >
                    <option value="Hair">Hair</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Brows">Brows</option>
                    <option value="Nails">Nails</option>
                    <option value="Cosmetology">Cosmetology</option>
                    <option value="Massage">Massage</option>
                  </Select>
                </div>

                <div className="mb-3">
                  <Input
                    type="text"
                    id="name"
                    defaultValue={service === null ? "" : service.name}
                    placeholder="Name"
                    {...register("name")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.name?.message}
                  </p>
                </div>

                <div className="flex gap-2 w-full">
                  <div className="mb-3">
                    <Input
                      type="number"
                      id="price"
                      defaultValue={service === null ? "" : service.price}
                      placeholder="Price"
                      {...register("price")}
                    />
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.price?.message}
                    </p>
                  </div>

                  <div className="mb-3">
                    <Input
                      type="number"
                      id="time"
                      placeholder="Time Duration"
                      defaultValue={service === null ? "" : service.time}
                      {...register("time")}
                    />
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.time?.message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 mt-5">
                <div>
                  <div className="mb-3">
                    <Select
                      id="sub_category"
                      value={selectSub}
                      disabled={show}
                      onChange={(e) => {
                        setSelectSub(e.target.value);
                      }}
                    >
                      <option value="Hair Cut">Hair cut</option>
                      <option value="Color">Color</option>
                    </Select>
                  </div>
                </div>

                <div className="mb-[0.3rem]">
                  <Textarea
                    id="description"
                    rows="4"
                    defaultValue={service === null ? "" : service?.description}
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
                      {service === null ? "Create" : "Update"} Service
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
                      {service === null ? "Creating..." : "Updating..."}
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

export default ServicesView;
