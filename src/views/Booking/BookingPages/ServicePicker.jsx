import React, { useState, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BiPlus, BiMinus } from "react-icons/bi";
import axios from "axios";

function ServicePicker(props) {
  const [service, setServices] = useState([]);
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);
  const [toggleFive, setToggleFive] = useState(false);
  const [toggleSix, setToggleSix] = useState(false);

  const [pickServices, setPickServices] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "service",
      responseType: "json",
    })
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log("Failed to load Services", err);
      });
  }, []);

  const hair = service.filter((val) => val.category === "Hair");
  const brows = service.filter((val) => val.category === "Brows");
  const Makeup = service.filter((val) => val.category === "Makeup");
  const nails = service.filter((val) => val.category === "Nails");
  const cosmetology = service.filter((val) => val.category === "Cosmetology");
  const massage = service.filter((val) => val.category === "Massage");

  return (
    <div className="text-center bg-white pb-10">
      <div className="text-[14px] font-semibold text-start pb-1 px-[2rem]">
        Pick a Services
      </div>
      <div className="flex justify-center items-center px-[1rem] text-start pb-1">
        <div className="shadow rounded bg-white w-full">
          {/* main services list */}
          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleOne(!toggleOne)}
            >
              <span>Hair</span>
              <span>
                {toggleOne === true ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </span>
            </div>
            <div className={toggleOne === true ? "block" : "hidden"}>
              {hair.map((itemOne, indexOne) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-1" + indexOne}
                >
                  {itemOne.name}

                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemOne._id)) {
                        props.handleService(
                          itemOne._id,
                          "remove",
                          itemOne.time,
                          itemOne.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemOne._id)
                        );
                      } else {
                        props.handleService(
                          itemOne._id,
                          "add",
                          itemOne.time,
                          itemOne.price
                        );
                        setPickServices((arr) => arr.concat(itemOne._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemOne._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleTwo(!toggleTwo)}
            >
              <span>MakeUp</span>
              <span>
                {toggleTwo === true ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </span>
            </div>
            <div className={toggleTwo === true ? "block" : "hidden"}>
              {Makeup.map((itemTwo, indexTwo) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-2" + indexTwo}
                >
                  {itemTwo.name}
                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemTwo._id)) {
                        props.handleService(
                          itemTwo._id,
                          "remove",
                          itemTwo.time,
                          itemTwo.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemTwo._id)
                        );
                      } else {
                        props.handleService(
                          itemTwo._id,
                          "add",
                          itemTwo.time,
                          itemTwo.price
                        );
                        setPickServices((arr) => arr.concat(itemTwo._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemTwo._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleThree(!toggleThree)}
            >
              <span>Brows</span>
              <span>
                {toggleThree === true ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
            </div>
            <div className={toggleThree === true ? "block" : "hidden"}>
              {brows.map((itemThree, indexThree) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-2" + indexThree}
                >
                  {itemThree.name}
                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemThree._id)) {
                        props.handleService(
                          itemThree._id,
                          "remove",
                          itemThree.time,
                          itemThree.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemThree._id)
                        );
                      } else {
                        props.handleService(
                          itemThree._id,
                          "add",
                          itemThree.time,
                          itemThree.price
                        );
                        setPickServices((arr) => arr.concat(itemThree._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemThree._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleFour(!toggleFour)}
            >
              <span>Nails</span>
              <span>
                {toggleFour === true ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
            </div>
            <div className={toggleFour === true ? "block" : "hidden"}>
              {nails.map((itemFour, indexFour) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-2" + indexFour}
                >
                  {itemFour.name}
                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemFour._id)) {
                        props.handleService(
                          itemFour._id,
                          "remove",
                          itemFour.time,
                          itemFour.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemFour._id)
                        );
                      } else {
                        props.handleService(
                          itemFour._id,
                          "add",
                          itemFour.time,
                          itemFour.price
                        );
                        setPickServices((arr) => arr.concat(itemFour._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemFour._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleFive(!toggleFive)}
            >
              <span>Cosmetology</span>
              <span>
                {toggleFive === true ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
            </div>
            <div className={toggleFive === true ? "block" : "hidden"}>
              {cosmetology.map((itemFive, indexFive) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-2" + indexFive}
                >
                  {itemFive.name}
                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemFive._id)) {
                        props.handleService(
                          itemFive._id,
                          "remove",
                          itemFive.time,
                          itemFive.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemFive._id)
                        );
                      } else {
                        props.handleService(
                          itemFive._id,
                          "add",
                          itemFive.time,
                          itemFive.price
                        );
                        setPickServices((arr) => arr.concat(itemFive._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemFive._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm cursor-pointer"
              onClick={() => setToggleSix(!toggleSix)}
            >
              <span>Massage</span>
              <span>
                {toggleSix === true ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </span>
            </div>
            <div className={toggleSix === true ? "block" : "hidden"}>
              {massage.map((itemSix, indexSix) => (
                <div
                  className="p-3 flex justify-between mt-1 text-[14px] bg-[#f7f9fc] text-gray-dark"
                  key={"hairBook-list-2" + indexSix}
                >
                  {itemSix.name}
                  <button
                    className="text-[15px] py-1 px-3 rounded-md"
                    onClick={() => {
                      if (pickServices.includes(itemSix._id)) {
                        props.handleService(
                          itemSix._id,
                          "remove",
                          itemSix.time,
                          itemSix.price
                        );
                        setPickServices((arr) =>
                          arr.filter((item) => item !== itemSix._id)
                        );
                      } else {
                        props.handleService(
                          itemSix._id,
                          "add",
                          itemSix.time,
                          itemSix.price
                        );
                        setPickServices((arr) => arr.concat(itemSix._id));
                      }
                    }}
                  >
                    {pickServices.includes(itemSix._id) ? (
                      <BiMinus />
                    ) : (
                      <BiPlus />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePicker;
