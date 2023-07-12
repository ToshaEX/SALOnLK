import React from "react";
const Cosmetology = ({ service = [] }) => {
  const cosmetology = service.filter((val) => val.category === "Cosmetology");

  return (
    <section id="Cosmetology" className="text-center px-[1rem] bg-white w-full">
      <div className="pt-[5rem]">
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight mini:text-[32px]">
            Cosmetic
          </h2>
        </div>

        <div className="pt-[1rem] lg:px-[3rem]">
          <span className="text-[18px] tracking-tight mini:text-base">
            Indulge a little longer with a customized facial to help achieve
            your skin goals in <br /> 60-90 minutes.
          </span>
        </div>

        <div className="pb-[5rem] md:px-0 xl:px-[3rem] xxl:px-[7rem]">
          <div className="pt-[3rem] px-[1rem] mini:px-[2px] md:px-[2rem] lg:px-[5rem] xl:px-[10rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:gap-x-20 md:gap-y-10">
              {cosmetology.map((item, i) => (
                <div
                  className="md:w-[280px] lg:w-[312px] px-4 pb-3 mb-3 md:mb-3 bg-[#f7f9fc] rounded-md"
                  key={"cosmetology-list" + i}
                >
                  <div className="flex">
                    <div className="text-start pt-[2rem] w-full">
                      <span className="text-[18px] tracking-tight mini:text-base">
                        {item.name}
                      </span>
                    </div>
                    <div className="pt-[2rem] w-full text-end">
                      <span className="text-[18px] tracking-tight font-light mini:text-base">
                        Rs:&nbsp;{item.price}
                      </span>
                    </div>
                  </div>
                  <div className="text-start pt-[10px] pb-1">
                    <span className="text-[16px] tracking-tight text-gray">
                      {item.description}&nbsp;({item.time}&nbsp;min)
                    </span>
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
