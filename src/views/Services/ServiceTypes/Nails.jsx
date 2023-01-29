import React from "react";
import { IoMdAdd } from "react-icons/io";

const Nails = ({ service = [] }) => {
  const nails = service.filter((val) => val.category === "Nails");

  return (
    <section id="Nails" className="text-center bg-[#f7f9fc] px-[1rem]">
      <div className="pt-[5rem]">
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight">
            Nails
          </h2>
        </div>

        <div className="pt-[1rem] md:px-[3rem]">
          <span className="text-[18px] tracking-tight">
            Get your nails done for great mood. Simple pleasures can make your
            week, not <br /> just day.
          </span>
        </div>

        <div className="pb-[5rem] md:px-[5rem]">
          <div className="pt-[3rem] px-[1rem] md:px-[10rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:px-[5rem] md:gap-x-20 md:gap-y-10">
              {nails.map((item, i) => (
                <div
                  className="md:max-w-[300px] px-4 pb-3"
                  key={"nails-list" + i}
                >
                  <div className="flex">
                    <div className="text-start pt-[2rem] w-full">
                      <span className="text-[18px] tracking-tight">
                        {item.name}
                      </span>
                    </div>
                    <div className="pt-[2rem] w-full text-end">
                      <span className="text-[18px] tracking-tight font-light">
                        Rs:&nbsp;{item.price}
                      </span>
                    </div>
                  </div>
                  <div className="text-start pt-[10px]">
                    <span className="text-[16px] tracking-tight text-gray">
                      {item.description}&nbsp;({item.time}&nbsp;min)
                    </span>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      id="addToCart"
                      className="text-[13px] flex items-center bg-primary px-2 text-xl rounded-md text-white  border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => ""}
                    >
                      <IoMdAdd />
                      &nbsp;Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nails;
