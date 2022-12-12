import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../features/user/user-slice";

const SignIn = () => {

  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, set) => {
    set(e.target.value);
  };
  const handleSubmit = () => {
    console.log({ email, password });
    dispatch(signIn(email));
  };
  return (
    <>
        <div className="flex min-h-full items-center justify-center px-20 py-20 gap-20">
          
          <div className="hidden items-start md:flex">
            <div className="flex max-w-xl">
              <div>
                <img className="h-[222px] w-[123px] drop-shadow-xl mt-[150px] cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-1.png')} alt="ab1-img"/>
              </div>
              <div>
                <div className="flex">
                  <img className="mx-5 h-[213px] w-[152px] drop-shadow-xl ml-5 mr-0 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-2.png')} alt="ab2-img"/>
                  <img className="mx-5 h-[133px] w-[90px] drop-shadow-xl ml-5 mr-0 mt-[80px] cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-4.png')} alt="ab4-img"/>
                </div>
                <div className="flex">
                  <img className="h-[180px] w-[119px] drop-shadow-xl ml-5 mt-5 mr-5 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-3.png')} alt="ab3-img"/>
                  <img className="h-[169px] w-[112px] drop-shadow-xl mt-5 cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" src={require('../../../assets/ab-5.png')} alt="ab5-img"/>
                </div>
              </div>
            </div>
          </div>
        
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-3 text-start text-[40px] leading-none font-bold tracking-tight">
              Sign in <br/> to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form
            id="signIn"
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-3">
                  <input 
                  type="email" 
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  placeholder="Email address"
                  onChange={(e) => {
                    handleChange(e, setEmail);
                  }}
                  />
              </div>
              
              <div className="mb-3">
                <input 
                type="password" 
                id="password"
                name="password"
                autoComplete="current-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Password"              
                onChange={(e) => {
                  handleChange(e, setPassword);
                }}
                />
              </div>
             
            </div>

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div> */}

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
              
            </div>

            <div>
              <button
                type="submit"
                form="signIn"
                onClick={() => handleSubmit()}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
