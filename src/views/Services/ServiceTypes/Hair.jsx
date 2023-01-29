import React from "react";

const Hair = ({ service = [] }) => {
  const hairCut = service.filter((val) => val.sub_category === "Hair Cut");
  const hairColor = service.filter((val) => val.sub_category === "Color");

  return (
    <section
      id="Hair"
      className="text-center px-[1rem] mt-[3rem] md:mt-[-38rem]"
    >
      <div>
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight">
            Hair
          </h2>
        </div>

        <div className="pt-[1rem] md:px-[3rem]">
          <span className="text-[18px] tracking-tight">
            Stylish hair cuts, gorgeous styling, incredible color services and
            best hair <br /> treatments. Choose your dream service!
          </span>
        </div>

        <div className="pb-[5rem] md:px-[5rem]">
          <div className="pt-[3rem] px-[1rem] md:px-[10rem]">
            <div className="text-start mb-[18px] md:pl-[5rem]">
              <h2 className="font-bold text-[24px] leading-none tracking-tight">
                Haircut
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:px-[5rem] md:gap-x-20 md:gap-y-10">
              {hairCut.map((item, i) => (
                <div
                  className="md:max-w-[300px] px-4 pb-3"
                  key={"haircut-list" + i}
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
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[3rem] px-[1rem] md:px-[10rem]">
            <div className="text-start mb-[18px] md:pl-[5rem]">
              <h2 className="font-bold text-[24px] leading-none tracking-tight">
                Color
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:px-[5rem] md:gap-x-20 md:gap-y-10">
              {hairColor.map((item, i) => (
                <div
                  className="md:max-w-[300px] px-4 pb-3"
                  key={"hairColor-list" + i}
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
