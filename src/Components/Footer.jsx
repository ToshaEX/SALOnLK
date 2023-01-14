import React from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (err) => {
          console.log(err.text);
        }
      );

    e.target.reset();
  };

  return (
    <footer className="flex flex-col-reverse items-center bg-[#171618] justify-between px-[5rem] py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="mx-auto my-6 text-center text-white md:hidden">
        Copyright &copy; 2022 SalonLK. All rights reserved
      </div>
      <div>
        <img
          className="mx-auto h-[75px] w-auto"
          src={require("../assets/salo.png")}
          alt="salon"
        />

        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/facebook.png")}
              alt="fb"
            />
          </div>
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/twitter.png")}
              alt="twitter"
            />
          </div>
          <div className="cursor-pointer">
            <img
              className="h-5 w-auto"
              src={require("../assets/instagram.png")}
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="pb-[5px] text-base">Links</div>
        <div className="text-[14px] flex gap-5">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">T & C</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="pb-[5px] text-[18px] text-white">
          We don't keep our beauty secrets
        </div>
        <div className="pb-[5px] text-[14px] text-white">
          Subscribe now and thank us later
        </div>
        <form id="contact" onSubmit={sendEmail}>
          <div className="flex pt-3">
            <input
              type="email"
              id="email-address"
              name="email_from"
              required
              className="bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="Email address"
            />

            <button
              type="submit"
              className="h-10 w-8/12 justify-center border border-transparent bg-primary text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="hidden text-white md:block md:mt-6">
          Copyright &copy; 2022 SalonLK. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
