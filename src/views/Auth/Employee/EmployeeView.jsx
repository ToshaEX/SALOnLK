import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";

const EmployeeView = ({ onClose, service = null, setService }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone: yup
      .string()
      .required("Contact number is required")
      .matches(phoneRegExp, "Contact number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    email: yup
      .string()
      .email("E-mail is not valid!")
      .required("E-mail is required"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password has to be longer than 6 characters!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [select, setSelect] = useState("Hair");
  const [selectSub, setSelectSub] = useState(
    service === null ? "Hair Cut" : service.sub_category
  );
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
    return service === null
      ? await newService(data)
      : await updateService(data);
  };

  async function newService(payload) {
    await axios({
      method: "post",
      url: "http://localhost:3000/service",
      responseType: "json",
      data: payload,
    }).then(() => handleOnClose());
    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  async function updateService(payload) {
    await axios({
      method: "patch",
      url: `http://localhost:3000/service/${service._id}`,
      responseType: "json",
      data: payload,
    }).then(() => handleOnClose());
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
          {service === null ? "Add" : "Edit"} Employee
        </h2>

        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex justify-between align-center gap-5">
              <div className="w-1/2">
                <div className="flex gap-2 mt-5 mb-3">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="First Name"
                      {...register("first_name")}
                    />
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.first_name?.message}
                    </p>
                  </div>

                  <div>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="Last Name"
                      {...register("last_name")}
                    />
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.last_name?.message}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Contact Number"
                    {...register("phone")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.phone?.message}
                  </p>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Email address"
                    {...register("email")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              <div className="w-1/2 mt-5">
                <div className="mb-3">
                  <select
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    defaultValue={"Male"}
                    {...register("gender")}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <select
                    id="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    defaultValue={"beautician"}
                    {...register("role")}
                  >
                    <option value="beautician">Beautician</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.password?.message}
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
                      {service === null ? "Add" : "Edit"} Employee
                    </div>
                  </div>
                </div>
                <div className={vTwo}>
                  <div className="flex items-center justify-center py-1">
                    <img
                      src={
                        require("../../../assets/Spinner-1.9s-44px.svg").default
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

export default EmployeeView;