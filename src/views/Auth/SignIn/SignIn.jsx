import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setAccessToken } from "../../../features/user/user-slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { Footer } from "../../../Components/index";
import SignImg from "../../../assets/Group 3.png";

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
  const history = useHistory();

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
        history.push("/");
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
      <div className="min-h-screen bg-[#f7f9fc] px-8 mini:px-4 flex justify-center items-center md:p-5">
        <div className="bg-white rounded-xl mx-auto p-2 shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* form section */}
          <div className="p-3 md:py-8 lg:px-10">
            <div className="pb-6">
              <h2 className="text-3xl pb-3 font-semibold">Welcome Back!</h2>
              <span className="text-[14px] text-gray">
                Describe yourself as clearly so that there are no mistakes.
              </span>
            </div>

            {/* form section */}
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-3">
                <input
                  type="email"
                  id="email-address"
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                  className="bg-[#FAFAFA] border border-[#F6F6F6] text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full"
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
                    className="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={handleCheckBoxChange}
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/sign-in"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="pt-[1.5rem]">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className={vOne}>
                    <div>
                      <div className="text-[1rem] flex justify-center py-2">
                        Login
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
            <div className="mt-3 text-[12px] font-medium text-center text-gray-900">
              Don't have an account?&nbsp;
              <Link to="/sign-up">
                <span className="hover:underline font-semibold ">
                  Create an account
                </span>
              </Link>
            </div>
          </div>
          {/* image section */}
          <div className="hidden lg:flex relative justify-center items-center bg-[#f7f9fc]">
            <div className="flex max-w-[30rem] p-5">
              <img src={SignImg} alt="reg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
};

export default SignIn;
