import React, { useState } from "react";

const Register = () => {

  const [getFirstName, setGetFirstName] = useState("");
  const [getSecondName, setGetSecondName] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [getContact, setGetContact] = useState("");
  const [getGender, setGetGender] = useState("Male");
  const [getPassword, setGetPassword] = useState("");
  const [getConfirmPassword, setGetConfirmPassword] = useState("");

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleSubmit = () => {
    console.log({ getFirstName, getSecondName, getEmail, getContact, getGender, getPassword, getConfirmPassword });
  };

  return (
    <section
      id="signUp"
      className="flex items-center justify-center"
    >
      <div className="flex max-w-lg h-auto">
          <img src={require('../../../assets/signup.png')} alt="signup-img"/>
      </div>

      <div className="flex min-h-full items-center justify-center py-12 ml-[100px] sm:px-6 lg:px-8">  
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
            alt="salonlk"
            />
            <h2 className="mt-6 mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign Up to create new account
            </h2>
          </div>

          <from
          id="register" 
          onSubmit={(e) => {
            e.preventDefault();
          }}
          >
            <div 
            className="grid gap-5 mb-3 md:grid-cols-2">
              <div>
                <input 
                type="text" 
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="First Name"
                onChange={(e) => {
                  handleChange(e, setGetFirstName);
                }}
                />
              </div>

              <div>
                <input 
                type="text" 
                id="second_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Last Name"
                onChange={(e) => {
                  handleChange(e, setGetSecondName);
                }}
                />
              </div>
            </div>

            <div className="mb-3">
                <input 
                type="tel" 
                id="contact-number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Contact Number"
                onChange={(e) => {
                  handleChange(e, setGetContact);
                }}
                />
              </div>

              <div className="mb-3">
                <input 
                type="email" 
                id="email-address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Email address"
                onChange={(e) => {
                  handleChange(e, setGetEmail);
                }}
                />
              </div>

              <div className="mb-3">
                <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Choose a Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <input 
                type="password" 
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e, setGetPassword);
                }}
                />
              </div>

              <div className="mb-5">
                <input 
                type="password" 
                id="confirm-password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Confirm Password"
                onChange={(e) => {
                  handleChange(e, setGetConfirmPassword);
                }}
                />
              </div>

              <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input 
                    id="remember" 
                    type="checkbox" 
                    value="" 
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" 
                    required/>
                  </div>
                  <label 
                  for="remember" 
                  className="ml-2 text-sm font-medium text-gray-900">
                  I agree with the  
                  <a href="#" 
                  className="text-blue-600 hover:underline"> terms and conditions
                  </a>.</label>
              </div>
              
              <div>
                <button
                  type="submit"
                  form="signUp"
                  onClick={() => handleSubmit()}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </div>

          </from>
        </div>

      </div>
    </section>
  )
}

export default Register