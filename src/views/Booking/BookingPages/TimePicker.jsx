import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TimePicker(props) {
  const [date, setDate] = useState(new Date());
  const [beautician, setBeautician] = useState([]);

  const [selectedBeautician, setSelectedBeautician] = useState(null);
  const [slotsData, setSlotsData] = useState([]);
  const [slots, setSlots] = useState([]);

  const [slotList, setSlotList] = useState([]);
  const [tempSlotList, setTempSlotList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "user",
      responseType: "json",
    })
      .then((res) => {
        setBeautician(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);

  async function getSlots(beauticianID) {
    await axios({
      method: "GET",
      url: `appointment/user/${beauticianID}/slots`,
      responseType: "json",
    })
      .then((res) => {
        setSlotsData(res.data);
        displaySlots(beauticianID);
        console.log(res.data);
        console.log(slots);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }

  const slotsList = [
    { number: 1, timeSlot: "8.00 am - 8.15 am" },
    { number: 2, timeSlot: "8.15 am - 8.30 am" },
    { number: 3, timeSlot: "8.30 am - 8.45 am" },
    { number: 4, timeSlot: "8.45 am - 9.00 am" },
    { number: 5, timeSlot: "9.00 am - 9.15 am" },
    { number: 6, timeSlot: "9.15 am - 9.30 am" },
    { number: 7, timeSlot: "9.30 am - 9.45 am" },
    { number: 8, timeSlot: "9.45 am - 10.00 am" },
    { number: 9, timeSlot: "10.00 am - 10.15 am" },
    { number: 10, timeSlot: "10.15 am - 10.30 am" },
    { number: 11, timeSlot: "10.30 am - 10.45 am" },
    { number: 12, timeSlot: "10.45 am - 11.00 am" },
    { number: 13, timeSlot: "11.00 am - 11.15 am" },
    { number: 14, timeSlot: "11.15 am - 11.30 am" },
    { number: 15, timeSlot: "11.30 am - 11.45 am" },
    { number: 16, timeSlot: "11.45 am - 12.00 pm" },
    { number: 17, timeSlot: "1.00 pm - 1.15 pm" },
    { number: 18, timeSlot: "1.15 pm - 1.30 pm" },
    { number: 19, timeSlot: "1.30 pm - 1.45 pm" },
    { number: 20, timeSlot: "1.45 pm - 2.00 pm" },
    { number: 21, timeSlot: "2.00 pm - 2.15 pm" },
    { number: 22, timeSlot: "2.15 pm - 2.30 pm" },
    { number: 23, timeSlot: "2.30 pm - 2.45 pm" },
    { number: 24, timeSlot: "2.45 pm - 3.00 pm" },
    { number: 25, timeSlot: "3.00 pm - 3.15 pm" },
    { number: 26, timeSlot: "3.15 pm - 3.30 pm" },
    { number: 27, timeSlot: "3.30 pm - 3.45 pm" },
    { number: 28, timeSlot: "3.45 pm - 4.00 pm" },
    { number: 29, timeSlot: "4.00 pm - 4.15 pm" },
    { number: 30, timeSlot: "4.15 pm - 4.30 pm" },
    { number: 31, timeSlot: "4.30 pm - 4.45 pm" },
    { number: 32, timeSlot: "4.45 pm - 5.00 pm" },
    { number: 33, timeSlot: "5.00 pm - 5.15 pm" },
    { number: 34, timeSlot: "5.15 pm - 5.30 pm" },
    { number: 35, timeSlot: "5.30 pm - 5.45 pm" },
    { number: 36, timeSlot: "5.45 pm - 6.00 pm" },
  ];

  const amount = Math.round(props.timeTaken / 15);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  function displaySlots(b_id) {
    setSlots((arr) =>
      arr.concat(
        slotsData
          .filter((val) => val.startDate === month + " " + day)
          .map((item, i) => ({ item }))
      )
    );

    if (slots.length === 0) {
      for (let i = 0; i < amount; i++) {
        setSlotList((arr) => arr.concat(slotsList[i]));
      }
      setSelectedBeautician(b_id);
      props.handleTime(true);
    } else {
      console.log("hiii");
    }

    console.log(slotList.length);
    console.log(props.timeTaken);
    console.log(amount);
    console.log(date);
  }

  return (
    <div>
      <div className="flex">
        <div>
          {/* beautician pick */}
          <div className="px-3">
            <div className="text-[14px] font-semibold pb-1">
              Pick a Beautician
            </div>
            <select
              id="beautician-pick"
              defaultValue={"none"}
              className="md:w-[20rem] w-[10rem] rounded-lg text-sm"
              onChange={(e) => {
                getSlots(e.target.value);
              }}
            >
              <option value={"none"} disabled>
                Select a Beautician
              </option>
              {beautician
                .filter((val) => val.role === "beautician")
                .map((item, index) => {
                  return (
                    <option value={item._id} key={"beautician-list" + index}>
                      {item.first_name}&nbsp;{item.last_name}
                    </option>
                  );
                })}
            </select>
          </div>
          {/* time slot pick */}
          <div className="px-3 mt-5">
            <div className="text-[14px] font-semibold pb-1">
              Your Time Slots
            </div>
            <div className={selectedBeautician === null ? "hidden" : "block"}>
              <div className="grid grid-cols-2 grid-rows-8 gap-2">
                {slotList.map((item, index) => {
                  return (
                    <div
                      className="bg-[#F7F9FC] text-[14px] text-center p-2 rounded-md"
                      key={"slot-list" + index}
                    >
                      {item.timeSlot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* calendar */}
        <div className="px-1">
          <div className="text-[14px] font-semibold pb-1">Pick a Date</div>
          <Calendar value={date} onChange={setDate} />
        </div>
      </div>
      <button onClick={console.log(date.toISOString())}>hi</button>
    </div>
  );
}

export default TimePicker;
