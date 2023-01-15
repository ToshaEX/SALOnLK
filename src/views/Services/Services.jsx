import React, { useState, useEffect } from "react";
import CTA from "../../Components/CTA";
import Footer from "../../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-scroll";
import Hair from "./Hair";
import MakeUp from "./MakeUp";
import Brows from "./Brows";
import Nails from "./Nails";
import Cosmetology from "./Cosmetology";
import Massage from "./Massage";

const Services = () => {
  const [service, setServices] = useState([]);
  const [isLoading, setSIsLoading] = useState(true);

  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);

  const expandClass1 = expand1 ? "display" : "hidden";
  const ansClass1 = `${expandClass1} px-3 pb-3`;
  const expandClass2 = expand2 ? "display" : "hidden";
  const ansClass2 = `${expandClass2} px-3 pb-3`;
  const expandClass3 = expand3 ? "display" : "hidden";
  const ansClass3 = `${expandClass3} px-3 pb-3`;
  const expandClass4 = expand4 ? "display" : "hidden";
  const ansClass4 = `${expandClass4} px-3 pb-3`;

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/service",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
        setSIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
        setSIsLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Service Menu Section */}
      <div className="bg-[url('./assets/services-bg.png')]">
        <div className="p-[3rem] text-white">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              Service Menu
            </h2>
          </div>

          <div className="text-center pt-[2rem]">
            <span className="text-[17px] tracking-tight md:text-[18px]">
              We enhance individual beauty with state-of-the-art technologies
              and <br /> personalized service. Our professional team is ready to
              provide the <br /> greatest service you've ever had.
            </span>
          </div>

          <div className="flex pt-[3rem] justify-center">
            <button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Service Selection Section */}
      <div className="">
        <div className="relative">
          <div className="hidden text-center w-[50px] sticky top-0 px-[20px] md:p-[4rem] md:block">
            <div className="h-[20px]"></div>
            <Link
              to="Hair"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] pt-4 pb-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img
                    src={require("../../assets/woman-hair.png")}
                    alt="hair"
                  />
                </div>
                <div className="serviceName">
                  <span>Hair</span>
                </div>
              </div>
            </Link>

            <Link
              to="Makeup"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img src={require("../../assets/makeup.png")} alt="makeup" />
                </div>
                <div className="serviceName">
                  <span>MakeUp</span>
                </div>
              </div>
            </Link>

            <Link
              to="Brows"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img
                    src={require("../../assets/mascara.png")}
                    alt="mascara"
                  />
                </div>
                <div className="serviceName">
                  <span>Brow</span>
                </div>
              </div>
            </Link>

            <Link
              to="Nails"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img
                    src={require("../../assets/nail-polish.png")}
                    alt="nail"
                  />
                </div>
                <div className="serviceName">
                  <span className="">Nails</span>
                </div>
              </div>
            </Link>

            <Link
              to="Cosmetology"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img src={require("../../assets/hair-comb.png")} alt="comb" />
                </div>
                <div className="serviceName">
                  <span>Cosmetology</span>
                </div>
              </div>
            </Link>

            <Link
              to="Massage"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
                <div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
                  <img
                    src={require("../../assets/massage.png")}
                    alt="massage"
                  />
                </div>
                <div className="serviceName">
                  <span>Massage</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Hair Details Section */}
          <Hair service={service} />

          {/* MakeUp Details Section */}
          <MakeUp service={service} />

          {/* Brows Details Section */}
          <Brows service={service} />

          {/* Nails Details Section */}
          <Nails service={service} />

          {/* Cosmetology Details Section */}
          <Cosmetology service={service} />

          {/* Massage Details Section */}
          <Massage service={service} />
        </div>
      </div>

      {/* import CTA Section */}
      <CTA />

      {/* Frequently asked Section */}
      <div className="text-center bg-[#f7f9fc] pb-10">
        <div className="pt-[3rem]">
          <div className="mb-[18px]">
            <h2 className="font-bold text-[40px] leading-none tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="pt-[1rem] px-[3rem] pb-[2rem]">
            <span className="text-[18px] tracking-tight">
              You have questions? We have answers.
            </span>
          </div>

          <div className="flex justify-center items-center px-[3rem] text-start pb-1">
            <div className="shadow rounded bg-white w-[500px] md:w-[800px]">
              <div className="flex text-md font-medium justify-between px-3 py-3">
                <div className="">Q: HOW DO I SCHEDULE AN APPOINTMENT?</div>
                <button
                  className="text-xl focus:outline-none pl-5"
                  onClick={() => {
                    setExpand1(!expand1);
                  }}
                >
                  {expand1 ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </button>
              </div>
              <div className={ansClass1}>
                A: Schedule your appointment here online with our booking
                assistant, by phone at your desired salon location.
                <br />
                Reservations for your appointment are held with a credit card.
                Please review the Cancellation Policy.
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center px-[3rem] text-start pb-1">
            <div className="shadow rounded bg-white w-[500px] md:w-[800px]">
              <div className="flex text-md font-medium justify-between px-3 py-3">
                <div className="">Q: HOW DOES YOUR PRICING WORK?</div>
                <button
                  className="text-xl focus:outline-none pl-5"
                  onClick={() => {
                    setExpand2(!expand2);
                  }}
                >
                  {expand2 ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </button>
              </div>
              <div className={ansClass2}>
                A: Hair length or technique does not determine gender, and we
                believe that hair color and cuts should be individually curated
                for every guest. All of our services are based on the time
                needed to complete them. This allows us to customize your
                service based on your hair type and your desired result
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center px-[3rem] text-start pb-1">
            <div className="shadow rounded bg-white w-[500px] md:w-[800px]">
              <div className="flex text-md font-medium justify-between px-3 py-3">
                <div className="">
                  Q: WHAT SERVICES OR PRODUCTS SHOULD I PICK?
                </div>
                <button
                  className="text-xl focus:outline-none pl-5"
                  onClick={() => {
                    setExpand3(!expand3);
                  }}
                >
                  {expand3 ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </button>
              </div>
              <div className={ansClass3}>
                A: Just book an in-person or virtual consultation with one of
                our stylists to provide recommendations for your hair wants and
                needs. <br />
                We're here to answer any questions you might have about your
                current hair and how you want it to look and feel. Or, we're
                happy to provide recommendations if you're not sure what you
                want yet!
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center px-[3rem] text-start pb-1">
            <div className="shadow rounded bg-white w-[500px] md:w-[800px]">
              <div className="flex text-md font-medium justify-between px-3 py-3">
                <div className="">Q: WHAT BRAND OF PRODUCTS DO YOU CARY?</div>
                <button
                  className="text-xl focus:outline-none pl-5"
                  onClick={() => {
                    setExpand4(!expand4);
                  }}
                >
                  {expand4 ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </button>
              </div>
              <div className={ansClass4}>
                A: <br />
                VaHi: Oribe & Olaplex
                <br />
                Powder Springs: Aveda
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* import footer Section */}
      <Footer />
    </div>
  );
};

export default Services;
