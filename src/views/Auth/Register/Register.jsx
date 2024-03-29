import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

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
      .min(6, "Password has to be longer than 6 characters!"),
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
        window.location.reload();
      })
      .catch((errors) => {
        toast.error("There is an error!");
      });

    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] pt-[4.5rem] pb-[3rem] md:pb-[4.5rem]">
      <div className="container mx-auto">
        <div className="bg-white w-10/12 rounded-xl mx-auto shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full bg-[url('./assets/register-img.png')] bg-cover text-white px-10 py-[3.3rem] md:py-[5.5rem] md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-5">
              Welcome
            </h1>
            <div>
              <p className="text-gray-500 mb-4">
                Welcome to SalonLK! We're so glad you're interested in
                registering with us. By creating an account, you'll be able to
                easily book appointments, manage your account preferences, and
                stay up-to-date on the latest promotions and offers. We can't
                wait to pamper you and help you feel your best!
              </p>
            </div>
          </div>

          {/* form section */}
          <div className="w-full py-10 px-9 md:px-12 md:w-1/2">
            <h2 className="text-3xl mb-4">Register</h2>

            <div>
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="grid gap-3 grid-cols-2 mb-3">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    {...register("email")}
                  />
                  <p className="text-[#ff6347] text-[12px]">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="mb-3">
                  <select
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                        {...register("agree")}
                      />
                    </div>

                    <label className="ml-2 text-sm font-medium text-gray-900">
                      I agree with the
                      <a href="/" className="hover:underline">
                        {" "}
                        terms and conditions
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
                    className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <div className={vOne}>
                      <div>
                        <div className="text-[1rem] flex justify-center py-2">
                          Register Now
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
              <div className="mt-3 text-[12px] font-medium text-gray-900">
                Already have an account?&nbsp;
                <Link to="/sign-in">
                  <span className="hover:underline">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Register;
