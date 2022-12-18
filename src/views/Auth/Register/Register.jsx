import React, { useState } from "react";

const Register = () => {
  const [getFirstName, setGetFirstName] = useState("");
  const [getSecondName, setGetSecondName] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [getContact, setGetContact] = useState("");
  const [getGender, setGetGender] = useState("other");
  const [getPassword, setGetPassword] = useState("");
  const [getConfirmPassword, setGetConfirmPassword] = useState("");
  const [getCondition, setGetCondition] = useState(false);

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleCheckBoxChange = () => {
    setGetCondition(!getCondition);
  };

  const handleSubmit = () => {
    console.log({
      getFirstName,
      getSecondName,
      getEmail,
      getContact,
      getGender,
      getPassword,
      getConfirmPassword,
      getCondition,
    });
  };

  return (
    <section id="signUp" className="flex items-center justify-center">
      <div className="hidden max-w-xl md:flex">
        <img
          className="h-[300px] w-[160px] drop-shadow-xl md:mb-10 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={require("../../../assets/1st.png")}
          alt="signup1-img"
        />
        <img
          className="mx-5 h-[300px] w-[160px] drop-shadow-xl md:mt-10 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={require("../../../assets/2nd.png")}
          alt="signup2-img"
        />
        <img
          className="h-[300px] w-[160px] drop-shadow-xl md:mt-20 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={require("../../../assets/3rd.png")}
          alt="signup3-img"
        />
      </div>

      <div className="flex min-h-full items-center justify-center py-10 md:ml-[100px] sm:px-6 md:px-8">
        <div className="w-full max-w-md space-y-8 px-10">
          <div>
            <h2 className="mt-2 mb-8 text-start font-bold text-[40px] leading-none tracking-tight text-gray-900">
              Create <br /> new account
            </h2>
          </div>

          <from
            id="register"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-5 mb-3 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                required
                placeholder="Email address"
                onChange={(e) => {
                  handleChange(e, setGetEmail);
                }}
              />
            </div>

            <div className="mb-3">
              <select
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                onChange={(e) => {
                  handleChange(e, setGetGender);
                }}
              >
                <option selected>Choose a Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                  required
                  onChange={handleCheckBoxChange}
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I agree with the
                <a href="#" className="text-blue-600 hover:underline">
                  {" "}
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <div>
              <button
                type="submit"
                form="signUp"
                onClick={() => handleSubmit()}
                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </from>
        </div>
      </div>
    </section>
  );
};

export default Register;
