import React from "react";
import { IoMdAdd } from "react-icons/io";

const Cosmetology = ({ service = [] }) => {
  const cosmetology = service.filter((val) => val.category === "Cosmetology");

  return (
    <section id="Cosmetology" className="text-center px-[1rem]">
      <div className="pt-[5rem]">
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight">
            Cosmetology
          </h2>
        </div>

        <div className="pt-[1rem] md:px-[3rem]">
          <span className="text-[18px] tracking-tight">
            Indulge a little longer with a customized facial to help achieve
            your skin goals in <br /> 60-90 minutes.
          </span>
        </div>

        <div className="pb-[5rem] md:px-[5rem]">
          <div className="pt-[3rem] px-[1rem] md:px-[10rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:px-[5rem] md:gap-x-20 md:gap-y-10">
              {cosmetology.map((item, i) => (
                <div
                  className="md:max-w-[300px] px-4 pb-3"
                  key={"cosmetology-list" + i}
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

export default Cosmetology;
