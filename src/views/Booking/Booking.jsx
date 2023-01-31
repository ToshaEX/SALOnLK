import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Footer, StepProgressBar } from "../../Components/index";
import ServicePicker from "./BookingPages/ServicePicker";
import TimePicker from "./BookingPages/TimePicker";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Finished from "./BookingPages/Finished";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const [index, setIndex] = useState(1);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [pickServices, setPickServices] = useState([]);
  const [isSelectBeautician, setIsSelectBeautician] = useState(false);
  const [isSelectDate, setIsSelectDate] = useState(false);
  const [date, setDate] = useState(null);
  const [rowDate, setRowDate] = useState(null);
  const [beauticianID, setBeauticianID] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [getConfirm, setConfirm] = useState(false);
  const { userId } = useSelector((state) => ({ userId: state.user.userId }));
  const history = useHistory();

  const nextButton = () => {
    setIndex((currentPage) => currentPage + 1);
  };

  const PageDisplay = () => {
    if (index === 1) {
      return (
        <ServicePicker nextStep={nextButton} handleService={handleService} />
      );
    } else if (index === 2) {
      return (
        <TimePicker
          nextStep={nextButton}
          handleTime={handleTime}
          timeTaken={time}
        />
      );
    } else if (index === 3) {
      return (
        <Finished
          nextStep={nextButton}
          handleFinished={handleFinished}
          selectedServices={pickServices}
          salary={amount}
          b_id={beauticianID}
          date={rowDate}
          timeTaken={time}
        />
      );
    }
  };

  const handleService = (serviceData, option, timeTaken, salary) => {
    if (option === "add") {
      setPickServices((arr) => arr.concat(serviceData));
      setTime((previousTime) => previousTime + timeTaken);
      setAmount((previousAmount) => previousAmount + salary);

      // console.log(pickServices);
      // console.log(time);
      // console.log(amount);
      // console.log(index);
    } else if (option === "remove") {
      setPickServices((arr) => arr.filter((item) => item !== serviceData));
      setTime((previousTime) =>
        previousTime === 0 ? 0 : previousTime - timeTaken
      );
      setAmount((previousAmount) =>
        previousAmount === 0 ? 0 : previousAmount - salary
      );
      // console.log(pickServices);
    }
  };

  const handleTime = (
    isSelectBeautician,
    isSelectDate,
    selectedDate,
    b_id,
    timeSlots,
    rowDates
  ) => {
    setIsSelectBeautician(isSelectBeautician);
    setDate(selectedDate);
    setBeauticianID(b_id);
    setTimeSlots(timeSlots);
    setIsSelectDate(isSelectDate);
    setRowDate(rowDates);

    // console.log(isSelectBeautician);
    // console.log(selectedDate);
    // console.log(b_id);
    // console.log(timeSlots);
    // console.log(pickServices);
    // console.log(rowDates);
  };

  const handleFinished = (confirmed) => {
    setConfirm(confirmed);
    // console.log(confirmed);
  };

  const formSubmit = async () => {
    const data = {
      appointment_date: date,
      slots: timeSlots,
      beautician: beauticianID,
      user: userId,
      services: pickServices,
    };

    newAppointment(data);
  };

  async function newAppointment(payload) {
    await axios({
      method: "POST",
      url: "appointment",
      responseType: "json",
      data: payload,
    })
      .then(() => {
        // console.log("confirm");
        toast.success("Appointment successfully Submitted!");
        history.push("/appointment");
      })
      .catch((err) => {
        console.log("Failed to send appointments", err);
      });
  }

  return (
    <section id="booking" className="h-screen bg-white">
      <div className="bg-[url('./assets/booking.png')]">
        <div className="p-[3rem] text-white">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              Book Now
            </h2>
          </div>

          <div className="text-center pt-[2rem]">
            <span className="text-[17px] tracking-tight md:text-[18px]">
              Personalize your service and schedule your appointment today!
            </span>
          </div>

          <div className="flex py-[0.3rem] justify-center">
            <button className=""></button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <div className="bg-white w-full md:w-[65%] pt-5 rounded-md shadow-md">
          {/* step progress bar */}
          <div className="px-20 py-10">
            <StepProgressBar step={index} />
          </div>

          {/* pages display area */}
          <div className="px-10 pt-10">{PageDisplay()}</div>
          {/* next button */}
          <div className="px-20 pb-5 flex justify-center items-center md:justify-end">
            <button
              type="submit"
              className="bg-[#273444] rounded-md h-[2.3rem] w-[8rem] border border-transparent text-[12px] uppercase bg-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-xs md:pt-0"
              onClick={() => {
                if (index === 1) {
                  if (pickServices.length > 0) {
                    nextButton();
                  } else {
                    toast.error("Please add a service!");
                  }
                } else if (index === 2) {
                  if (isSelectBeautician && isSelectDate) {
                    nextButton();
                  } else {
                    toast.error("Please select a beautician and date!");
                  }
                } else if (index === 3) {
                  if (getConfirm) {
                    formSubmit();
                  } else {
                    toast.error("Please confirm an appointment!");
                  }
                }
              }}
            >
              {index === 3 ? "Finished" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Booking;
