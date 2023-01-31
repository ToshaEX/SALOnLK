import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { slotsList } from "./slots";
import { useSelector } from "react-redux";
import "react-calendar/dist/Calendar.css";

const dateFormatter = (date, isAdd = 0) => {
  const year = date.getFullYear();
  const day = date.getDate() + (isAdd === 0 ? 0 : isAdd === 1 ? 1 : -1);
  const month = date.getMonth() + 1;
  return year + "-" + month + "-" + day;
};

const slotFactory = (startSlot, slotAmount) => {
  const slots = [];
  for (let i = startSlot + 1; i <= slotAmount + startSlot; i++) {
    slots.push(i);
  }
  return slots;
};

function TimePicker(props) {
  const { timeTaken, handleTime } = props;
  //option
  const userId = useSelector((state) => state.user.userId);
  const [beauticianOption, setBeauticianOption] = useState([]);
  const [date, setDate] = useState(null);
  const [selectedBeautician, setSelectedBeautician] = useState(null);
  const [beauticianSlots, setBeauticianSlots] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const [dateSelection, setDateSelection] = useState({
    startDate: date,
    endDate: date,
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: "user",
      responseType: "json",
    })
      .then((res) => {
        setBeauticianOption(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);
  console.log(userId);

  useEffect(() => {
    console.log("effect run");
    console.log(
      dateSelection.endDate,
      dateSelection.startDate,
      selectedBeautician
    );

    if (
      dateSelection.endDate !== null &&
      dateSelection.startDate !== null &&
      selectedBeautician !== null
    ) {
      console.log("effect body run");
      axios({
        method: "GET",
        url: `appointment/user/${selectedBeautician}/slots/?startDate=${dateSelection.startDate}&endDate=${dateSelection.endDate}`,
        responseType: "json",
      })
        .then((res) => {
          setBeauticianSlots(res.data);
        })

        .catch((err) => {
          console.log("Failed to load Services", err);
        });
    }
  }, [date, selectedBeautician]);

  useEffect(() => {
    if (beauticianSlots!==null) {
      setSelectedSlots(
        slotFactory(
          beauticianSlots.length === 0 ? 0 : beauticianSlots.at(-1),
          Math.ceil(timeTaken / 15)
        )
      );
    }
  }, [beauticianSlots]);

  useEffect(() => {
    if (
      date !== null &&
      selectedBeautician !== null &&
      selectedSlots.length !== 0
    ) {
      console.log("runnnnn");
      handleTime(true, dateFormatter(date), selectedBeautician, selectedSlots);
    }
    console.log(selectedSlots);
  }, [date, selectedBeautician, selectedSlots]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div>
          {/* calendar */}
          <div className="px-3 mt-5 mb-5 lg:mt-0">
            <div className="text-[14px] font-semibold pb-1">Pick a Date</div>
            <Calendar
              value={date === null ? new Date() : date}
              onChange={(e) => {
                setDate(e);
                setDateSelection({
                  startDate: dateFormatter(e, -1),
                  endDate: dateFormatter(e, 1),
                });
                console.log(date);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
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
                setSelectedBeautician(e.target.value);
              }}
            >
              <option value={"none"} disabled>
                Select a Beautician
              </option>
              {beauticianOption
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
              {/* <div className="grid grid-cols-2 grid-rows-8 gap-2">
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
              </div> */}
              {beauticianSlots && (
                <div>
                  {
                    slotsList[
                      beauticianSlots.length === 0 ? 0 : beauticianSlots.at(-1)
                    ]?.timeSlot.split("-")[0]
                  }{" "}
                  -{slotsList[selectedSlots.at(-1)]?.timeSlot.split("-")[0]}
                  {timeTaken}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
