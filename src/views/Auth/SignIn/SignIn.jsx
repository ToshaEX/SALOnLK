import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setAccessToken } from "../../../features/user/user-slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

const SignIn = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
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

  const [getCondition, setGetCondition] = useState(false);

  const handleCheckBoxChange = () => {
    setGetCondition(!getCondition);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [viewOne, setViewOne] = useState(true);
  const [viewTwo, setViewTwo] = useState(false);
  const vOne = viewOne ? "display" : "hidden";
  const vTwo = viewTwo ? "display" : "hidden";

  const formSubmit = (data) => {
    setViewOne(false);
    setViewTwo(true);

    loginUser(data);
  };

  async function loginUser(payload) {
    await axios({
      method: "POST",
      url: "auth/login",
      responseType: "json",
      data: payload,
    })
      .then(({ data }) => {
        const token = data.accessToken;
        saveTokenInLocalStorage(token);
        const decoded = jwt_decode(token);
        dispatch(setUser(decoded));
        dispatch(setAccessToken(token));
        toast.success("Login Successfully");
        window.location.reload();
      })
      .catch((errors) => {
        toast.error("There is an error!");
      });

    reset();
    setViewOne(true);
    setViewTwo(false);
  }

  function saveTokenInLocalStorage(data) {
    localStorage.setItem("accessToken", JSON.stringify(data));
  }

  return (
    <>
      <div className="min-h-screen bg-[#f7f9fc] py-[4.5rem] md:py-[6rem]">
        <div className="container mx-auto">
          <div className="bg-white w-10/12 rounded-xl mx-auto shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full bg-[url('./assets/signin-img.png')] bg-cover text-white px-10 py-[3.3rem] md:py-20 md:w-1/2">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-5">
                Welcome Back
              </h1>
              <div>
                <p className="text-gray-500 mb-4">
                  Welcome back to SalonLK! We're happy to see you again and are
                  excited to help you feel your best. With your account, you'll
                  be able to easily book appointments, manage your account
                  preferences, and stay up-to-date on the latest promotions and
                  offers. Thank you for choosing our salon and we can't wait to
                  see you soon.
                </p>
              </div>
            </div>

            {/* form section */}
            <div className="w-full py-20 px-9 md:px-12 md:w-1/2">
              <h2 className="text-3xl mb-4">Sign In</h2>

              <div>
                <form onSubmit={handleSubmit(formSubmit)}>
                  <div className="mb-3 mt-5">
                    <input
                      type="email"
                      id="email-address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="Email address"
                      {...register("email")}
                    />
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="mb-3 relative">
                    <input
                      type={show ? "text" : "password"}
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <span
                      className="absolute top-0 right-3 bottom-0 flex items-center text-gray-dark"
                      onClick={handleClick}
                    >
                      {show ? <RxEyeOpen /> : <RxEyeClosed />}
                    </span>
                    <p className="text-[#ff6347] text-[12px]">
                      {errors.password?.message}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={handleCheckBoxChange}
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="pt-[1rem]">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <div className={vOne}>
                        <div>
                          <div className="text-[1rem] flex justify-center py-2">
                            Sign In
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
                          <div className="text-[1rem]">Logging...</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-[12px] font-medium text-gray-900">
                  Don't have and account?&nbsp;
                  <Link to="/sign-up">
                    <span className="hover:underline">Register Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default SignIn;
