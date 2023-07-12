import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import RegImg from "../../../assets/Group 2.png";
import { Footer } from "../../../Components/index";

const Register = () => {
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
      .min(6, "Password has to be longer than 6 characters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Must contain one uppercase, one lowercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords are not the same!")
      .required("Password confirmation is required!"),
    agree: yup
      .bool()
      .test(
        "agree",
        "You have to agree with our Terms and Conditions!",
        (value) => value === true
      )
      .required("You have to agree with our Terms and Conditions!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const history = useHistory();
  const [viewOne, setViewOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(false);
  const vOne = viewOne ? "display" : "hidden";
  const vTwo = viewTwo ? "display" : "hidden";

  const formSubmit = (data) => {
    Object.assign(data, { role: "user" });
    setViewOne(false);
    setViewTwo(true);

    const newDetails = Object.keys(data).reduce((object, key) => {
      if (key !== "agree" && key !== "confirmPassword") {
        object[key] = data[key];
      }
      return object;
    }, {});

    registerUser(newDetails);
  };

  async function registerUser(payload) {
    await axios({
      method: "POST",
      url: "user/signup",
      responseType: "json",
      data: payload,
    })
      .then(() => {
        toast.success("Successfully Registered");
        history.push("/sign-in");
      })
      .catch((errors) => {
        toast.error("There is an error!");
      });

    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  return (
    <>
      <div className="min-h-screen bg-[#f7f9fc] px-8 mini:px-4 flex justify-center items-center md:p-5">
        <div className="bg-white rounded-xl mx-auto p-2 shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* form section */}
          <div className="p-3 md:py-8 lg:px-10">
            <div className="pb-6">
              <h2 className="text-3xl pb-3 font-semibold">Create an account</h2>
              <span className="text-[14px] text-gray">
                Describe yourself as clearly so that there are no mistakes.
              </span>
            </div>

            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="grid gap-3 grid-cols-2 mb-3">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    placeholder="Last Name"
                    className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                  placeholder="Contact Number"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                  placeholder="Email address"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
                  {...register("email")}
                />
                <p className="text-[#ff6347] text-[12px]">
                  {errors.email?.message}
                </p>
              </div>

              <div className="mb-3">
                <select
                  id="gender"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
                  defaultValue={"other"}
                  {...register("gender")}
                >
                  <option value="other" disabled>
                    Choose a Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
                  placeholder="Password"
                  {...register("password")}
                />
                <p className="text-[#ff6347] text-[12px]">
                  {errors.password?.message}
                </p>
              </div>

              <div className="mb-5 relative">
                <input
                  type={show ? "text" : "password"}
                  id="confirm-password"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />

                <span
                  className="absolute top-0 right-3 bottom-0 flex items-center text-gray-dark"
                  onClick={handleClick}
                >
                  {show ? <RxEyeOpen /> : <RxEyeClosed />}
                </span>

                <p className="text-[#ff6347] text-[12px]">
                  {errors.confirmPassword?.message}
                </p>
              </div>

              <div className="mb-5">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded-full border border-gray-300 focus:ring-3 focus:ring-blue-300"
                      {...register("agree")}
                    />
                  </div>

                  <label className="ml-2 text-sm font-medium text-gray-900">
                    Yes, I understand and agree to stanley&nbsp;
                    <a href="/" className="hover:underline">
                      terms of services
                    </a>
                    .
                  </label>
                </div>
                <p className="text-[#ff6347] text-[12px]">
                  {errors.agree?.message}
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl border border-transparent bg-primary text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className={vOne}>
                    <div>
                      <div className="text-[1rem] flex justify-center py-[10px]">
                        Create account
                      </div>
                    </div>
                  </div>
                  <div className={vTwo}>
                    <div className="flex items-center justify-center py-1">
                      <img
                        src={
                          require("../../../assets/Spinner-1.9s-44px.svg")
                            .default
                        }
                        alt="mySvgImage"
                      />
                      <div className="text-[1rem]">Creating account...</div>
                    </div>
                  </div>
                </button>
              </div>
            </form>
            <div className="mt-3 text-[12px] font-medium text-gray-900 text-center">
              Already have an account?&nbsp;
              <Link to="/sign-in">
                <span className="hover:underline font-semibold">Login</span>
              </Link>
            </div>
          </div>
          {/* image section */}
          <div className="hidden lg:flex relative justify-center items-center bg-[#f7f9fc]">
            <img src={RegImg} alt="reg" />
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
};

export default Register;
