import React from "react";
import emailjs from "@emailjs/browser";
import Logo from "../assets/logo-lg.png";
import Fb from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

import { Link } from "react-router-dom";

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

  const socialList = [
    {
      src: Fb,
      alt: "fb",
      url: "/",
    },
    {
      src: Twitter,
      alt: "twitter",
      url: "/",
    },
    {
      src: Instagram,
      alt: "instagram",
      url: "/",
    },
  ];

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
      name: "Products",
      path: "/home",
    },
    {
      name: "FAQ",
      path: "/home",
    },
  ];

  const listTwo = [
    {
      name: "Contact Us",
      path: "/home",
    },
    {
      name: "T & C",
      path: "/home",
    },
  ];

  const listThree = [
    {
      name: "Terms of Use",
      path: "/home",
    },
    {
      name: "Privacy Policy",
      path: "/home",
    },
  ];

  return (
    <footer className="flex flex-col-reverse items-center bg-[#171618] justify-between px-[5rem] py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="mx-auto my-6 text-center text-white md:hidden">
        Copyright &copy; 2022 SalonLK. All rights reserved
      </div>
      <div>
        <Link to="/home">
          <img
            className="mx-auto h-[48px] my-3 w-auto"
            src={Logo}
            alt="salon"
          />
        </Link>

        <div className="flex items-center gap-5">
          {socialList.map((item, index) => {
            return (
              <div key={"footer-img-list" + index}>
                <a href={item.url}>
                  <img className="h-5 w-auto" src={item.src} alt={item.alt} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-white">
        <div className="pb-[5px] text-base">Links</div>
        <div className="text-[14px] flex gap-5">
          <ul>
            {listOne.map((item, index) => {
              return (
                <Link to={item.path} key={"footer-list-1" + index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>

          <ul>
            {listTwo.map((item, index) => {
              return (
                <Link to={item.path} key={"footer-list-2" + index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>

          <ul>
            {listThree.map((item, index) => {
              return (
                <Link to={item.path} key={"footer-list-3" + index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
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
              className="h-10 w-8/12 justify-center bg-primary text-sm font-medium text-white hover:bg-gray/40 border-l border-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
