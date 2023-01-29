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

  const [pickServices, setPickServices] = useState([]);

  return (
    <div className="text-center bg-white pb-10">
      <div className="flex justify-center items-center px-[3rem] text-start pb-1">
        <div className="shadow rounded bg-white w-full">
          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={pickServices.includes(itemOne._id) ? true : false}
                    onClick={() => {
                      props.handleService(itemOne._id);
                      setPickServices((arr) => arr.concat(itemOne._id));
                    }}
                  >
                    {pickServices.includes(itemOne._id) ? "" : <BiPlus />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={pickServices.includes(itemTwo._id) ? true : false}
                    onClick={() => {
                      props.handleService(itemTwo._id);
                      setPickServices((arr) => arr.concat(itemTwo._id));
                    }}
                  >
                    {pickServices.includes(itemTwo._id) ? "" : <BiPlus />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={
                      pickServices.includes(itemThree._id) ? true : false
                    }
                    onClick={() => {
                      props.handleService(itemThree._id);
                      setPickServices((arr) => arr.concat(itemThree._id));
                    }}
                  >
                    {pickServices.includes(itemThree._id) ? "" : <BiPlus />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={
                      pickServices.includes(itemFour._id) ? true : false
                    }
                    onClick={() => {
                      props.handleService(itemFour._id);
                      setPickServices((arr) => arr.concat(itemFour._id));
                    }}
                  >
                    {pickServices.includes(itemFour._id) ? "" : <BiPlus />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={
                      pickServices.includes(itemFive._id) ? true : false
                    }
                    onClick={() => {
                      props.handleService(itemFive._id);
                      setPickServices((arr) => arr.concat(itemFive._id));
                    }}
                  >
                    {pickServices.includes(itemFive._id) ? "" : <BiPlus />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex text-md font-medium justify-between px-5 py-3 shadow-sm"
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
                    disabled={pickServices.includes(itemSix._id) ? true : false}
                    onClick={() => {
                      props.handleService(itemSix._id);
                      setPickServices((arr) => arr.concat(itemSix._id));
                    }}
                  >
                    {pickServices.includes(itemSix._id) ? "" : <BiPlus />}
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
