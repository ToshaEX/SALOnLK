import React from "react";
const Hair = ({ service = [] }) => {
  const hairCut = service.filter((val) => val.sub_category === "Hair Cut");
  const hairColor = service.filter((val) => val.sub_category === "Color");

  return (
    <section id="Hair" className="text-center px-[1rem] bg-white w-full pt-20">
      <div>
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight mini:text-[32px]">
            Hair
          </h2>
        </div>

        <div className="pt-[1rem] lg:px-[3rem]">
          <span className="text-[18px] tracking-tight mini:text-base">
            Stylish hair cuts, gorgeous styling, incredible color services and
            best hair <br /> treatments. Choose your dream service!
          </span>
        </div>

        <div className="pb-[5rem] md:px-0 xl:px-[3rem] xxl:px-[7rem]">
          <div className="pt-[3rem] px-[1rem] mini:px-[2px] md:px-[2rem] lg:px-[5rem] xl:px-[10rem]">
            <div className="text-start mb-[18px]">
              <h2 className="font-bold text-[24px] leading-none tracking-tight mini:text-[20px]">
                Haircut
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:gap-x-20 md:gap-y-10">
              {hairCut.map((item, i) => (
                <div
                  className="md:w-[280px] lg:w-[312px] px-4 pb-3 mb-3 md:mb-3 bg-[#f7f9fc] rounded-md"
                  key={"haircut-list" + i}
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

          <div className="pt-[3rem] px-[1rem] mini:px-[2px] md:px-[2rem] lg:px-[5rem] xl:px-[10rem]">
            <div className="text-start mb-[18px]">
              <h2 className="font-bold text-[24px] leading-none tracking-tight mini:text-[20px]">
                Color
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:gap-x-20 md:gap-y-10">
              {hairColor.map((item, i) => (
                <div
                  className="md:w-[280px] lg:w-[312px] px-4 pb-3 mb-3 md:mb-3 bg-[#f7f9fc] rounded-md"
                  key={"hairColor-list" + i}
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

export default Hair;
