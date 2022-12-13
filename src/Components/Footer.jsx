import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center bg-[#171618] justify-between px-[5rem] py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="mx-auto my-6 text-center text-white md:hidden">
        Copyright &copy; 2022 SalonLK. All rights reserved
      </div>
      <div>
        <img
          className="mx-auto h-[75px] w-auto"
          src={require("../assets/salo.png")}
          alt="salonlk"
        />

        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/facebook.png")}
              alt=""
            />
          </div>
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/twitter.png")}
              alt=""
            />
          </div>
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/instagram.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="pb-[5px] text-base">Links</div>
        <div className="text-[14px] flex gap-5">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Contact Us</li>
            <li>Our Team</li>
            <li>T & C</li>
          </ul>

          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="pb-[5px] text-[18px] text-white">
          We don’t keep our beauty secrets
        </div>
        <div className="pb-[5px] text-[14px] text-white">
          Subscribe now and thank us later
        </div>
        <form
          id="contact"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex pt-3">
            <input
              type="email"
              id="email-address"
              required
              className="bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="Email address"
              onChange={(e) => {}}
            />

            <button
              type="submit"
              form="contact"
              onClick={() => {}}
              className="h-10 w-full justify-center border border-transparent bg-primary text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>

        <div class="hidden text-white md:block md:mt-6">
          Copyright &copy; 2022 SalonLK. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
