import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

const EmployeeView = ({ onClose, user = null, setUser }) => {
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
    email:
      user === null
        ? yup
            .string()
            .email("E-mail is not valid!")
            .required("E-mail is required")
        : "",
    password:
      user === null
        ? yup
            .string()
            .required("Password is required!")
            .min(6, "Password has to be longer than 6 characters!")
        : "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [selectRole, setSelectRole] = useState(
    user === null ? "beautician" : user.role
  );
  const [selectGender, setSelectGender] = useState(
    user === null ? "Other" : user.gender
  );

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [viewOne, setViewOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(false);
  const vOne = viewOne ? "display" : "hidden";
  const vTwo = viewTwo ? "display" : "hidden";

  const formSubmit = async (data) => {
    setViewOne(false);
    setViewTwo(true);

    data.role = selectRole;
    data.gender = selectGender;

    if (user !== null) {
      data.email = user.email;
      data.password = user.password;
    }

    return user === null ? await newUser(data) : await updateUser(data);
  };

  async function newUser(payload) {
    await axios({
      method: "POST",
      url: "user/signup",
      responseType: "json",
      data: payload,
    }).then(() => handleOnClose());
    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  async function updateUser(payload) {
    await axios({
      method: "PATCH",
      url: `user/${user._id}`,
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
    setUser(null);
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
          {user === null ? "Add" : "Edit"} Employee
        </h2>
        {/* form section */}
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
                      defaultValue={user === null ? "" : user.first_name}
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
                      defaultValue={user === null ? "" : user.last_name}
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
                    defaultValue={user === null ? "" : user.phone}
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
                    defaultValue={user === null ? "" : user.email}
                    disabled={user === null ? false : true}
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
                    value={selectGender}
                    onChange={(e) => {
                      setSelectGender(e.target.value);
                    }}
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
                    value={selectRole}
                    onChange={(e) => {
                      setSelectRole(e.target.value);
                    }}
                  >
                    <option value="beautician">Beautician</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="mb-3 relative">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    placeholder="Password"
                    defaultValue={user === null ? "" : user.password}
                    disabled={user === null ? false : true}
                    {...register("password")}
                  />
                  <span
                    className="absolute top-0 right-3 bottom-0 flex items-center text-gray-dark"
                    onClick={user === null ? handleClick : ""}
                  >
                    {user === null ? (
                      show ? (
                        <RxEyeOpen />
                      ) : (
                        <RxEyeClosed />
                      )
                    ) : (
                      ""
                    )}
                  </span>

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
                      {user === null ? "Add" : "Edit"} Employee
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
                      {user === null ? "Creating..." : "Updating..."}
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
