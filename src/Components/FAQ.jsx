import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: "HOW DO I SCHEDULE AN APPOINTMENT?",
        content: `Schedule your appointment here online with our booking
              assistant, by phone at your desired salon location.
              <br />
              Reservations for your appointment are held with a credit card.
              Please review the Cancellation Policy.`,
      },
      {
        title: "HOW DOES YOUR PRICING WORK?",
        content: `Hair length or technique does not determine gender, and we
              believe that hair color and cuts should be individually curated
              for every guest. All of our services are based on the time needed
              to complete them. This allows us to customize your service based
              on your hair type and your desired result`,
      },
      {
        title: "WHAT SERVICES OR PRODUCTS SHOULD I PICK?",
        content: `Just book an in-person or virtual consultation with one of our
              stylists to provide recommendations for your hair wants and needs.
              <br />
              We're here to answer any questions you might have about your
              current hair and how you want it to look and feel. Or, we're happy
              to provide recommendations if you're not sure what you want yet!`,
      },
      {
        title: "WHAT BRAND OF PRODUCTS DO YOU CARY?",
        content: `VaHi: Oribe & Olaplex
              <br />
              Powder Springs: Aveda`,
      },
    ],
  };

  const styles = {
    bgColor: "white",
    // rowTitleColor: "blue",
    rowContentColor: "grey",
    // arrowColor: "red",
    rowContentTextSize: "16px",
  };

  const config = {
    animate: true,
    arrowIcon: <RiArrowDownSLine />,
    tabFocus: true,
  };

  return (
    <div className="text-center bg-[#f7f9fc] pb-10">
      <div className="pt-[3rem]">
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="pt-[1rem] px-[3rem] pb-[2rem]">
          <span className="text-[18px] tracking-tight">
            You have questions?&nbsp;We have answers.
          </span>
        </div>

        <div className="flex justify-center items-center px-[3rem] text-start pb-1">
          <div className="shadow rounded bg-white w-[500px] md:w-[800px]">
            <div className="flex text-md font-medium justify-between px-5 py-3">
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
