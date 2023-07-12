import React from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  const { userId, role } = useSelector((state) => ({
    userId: state.user.userId,
    role: state.user.role,
  }));

  const sendEmail = (e) => {
    e.preventDefault();
    if (userId !== null && role === "user") {
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
    }
    e.target.reset();
  };

  const listOne = [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/",
    },
    {
      name: "FAQ",
      path: "/services",
    },
  ];

  const listTwo = [
    {
      name: "Contact Us",
      path: "/",
    },
    {
      name: "T & C",
      path: "/",
    },
  ];

  const listThree = [
    {
      name: "Terms of Use",
      path: "/",
    },
    {
      name: "Privacy Policy",
      path: "/",
    },
  ];

  return (
    <footer className="flex flex-col items-center bg-[#171618] px-[2rem] pt-9 pb-5 mx-auto space-y-8 mini:px-[1.5rem] md:px-[1.5rem] md:space-y-0 lg:px-[2rem] xl:px-[5rem]">
      <div className="flex flex-col w-full justify-start items-center md:flex-row md:justify-between">
        <div className="text-white pt-6 w-full md:pt-0 md:w-auto">
          <div className="pb-[16px] text-base">Salon Address</div>
          <div className="text-[14px]">
            <span className="flex items-center text-[14px] text-gray-light text-center pb-2 mini:text-[12.5px] md:text-start">
              <MdLocationOn className="text-[17px]" /> &nbsp;&nbsp;186/07 Royal
              Street, Colombo 07
            </span>
            <span className="flex items-center text-[14px] text-gray-light text-center pb-2">
              <MdPhone className="text-[17px]" /> &nbsp;&nbsp;070 9485 756
            </span>
            <span className="flex items-center text-[14px] text-gray-light text-center pb-2">
              <MdEmail className="text-[17px]" /> &nbsp;&nbsp;info@salonlk.com
            </span>
          </div>
          <div className="flex gap-5 mt-2">
            <Link to="/">
              <RiTwitterFill className="text-[18px]" />
            </Link>
            <Link to="/">
              <RiFacebookFill className="text-[18px]" />
            </Link>
            <Link to="/">
              <RiLinkedinBoxFill className="text-[18px]" />
            </Link>
            <Link to="/">
              <FaInstagramSquare className="text-[18px]" />
            </Link>
          </div>
        </div>

        <div className="text-white pt-[2rem] w-full md:pt-0 md:w-auto">
          <div className="pb-[16px] text-base">Quick Links</div>
          <div className="text-[14px] flex gap-10 text-gray-light md:gap-8 lg:gap-10">
            <ul>
              {listOne.map((item, index) => {
                return (
                  <Link to={item.path} key={"footer-list-1" + index}>
                    <li className="pb-2">{item.name}</li>
                  </Link>
                );
              })}
            </ul>

            <ul>
              {listTwo.map((item, index) => {
                return (
                  <Link to={item.path} key={"footer-list-2" + index}>
                    <li className="pb-2">{item.name}</li>
                  </Link>
                );
              })}
            </ul>

            <ul>
              {listThree.map((item, index) => {
                return (
                  <Link to={item.path} key={"footer-list-3" + index}>
                    <li className="pb-2">{item.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-[1.5rem] md:pt-0">
          <div className="pb-[5px] text-[18px] text-white text-center mini:text-[17px] md:text-start">
            We don't keep our beauty secrets
          </div>
          <div className="pb-[5px] text-[14px] text-white text-center md:text-start">
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
                className="h-10 w-8/12 justify-center bg-primary text-sm font-medium text-white hover:bg-gray/40 border-l border-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full text-center text-[13.5px] pt-8 text-white lg:text-right">
        Copyright &copy; 2022 SalonLK. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
