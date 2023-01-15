import React from "react";

const Brows = ({ service = [] }) => {
  const brows = service.filter((val) => val.category === "Brows");

  return (
    <section id="Brows" className="text-center px-[1rem]">
      <div className="pt-[5rem]">
        <div className="mb-[18px]">
          <h2 className="font-bold text-[40px] leading-none tracking-tight">
            Brows
          </h2>
        </div>

        <div className="pt-[1rem] md:px-[3rem]">
          <span className="text-[18px] tracking-tight">
            Brows can change it all. Try out styling and tinting your brows and
            see <br /> the difference.
          </span>
        </div>

        <div className="pb-[5rem] md:px-[5rem]">
          <div className="pt-[3rem] px-[1rem] md:px-[10rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:px-[5rem] md:gap-20">
              {brows.map((item, i) => (
                <div
                  className="md:max-w-[300px] cursor-pointer hover:bg-[#f7f9fc] px-4 pb-3 rounded-md hover:shadow-md"
                  key={i}
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
              <div className="max-w-[300px]">
                <div className="flex">
                  <div className="text-start pt-[2rem] w-full">
                    <span className="text-[18px] tracking-tight">
                      Brow Wax & Style
                    </span>
                  </div>
                  <div className="pt-[2rem] w-full text-end">
                    <span className="text-[18px] tracking-tight font-light">
                      $30
                    </span>
                  </div>
                </div>
                <div className="text-start pt-[10px]">
                  <span className="text-[16px] tracking-tight text-gray">
                    Includes a brow consultation, wax & style. (20 min)
                  </span>
                </div>
              </div>

              <div className="max-w-[300px]">
                <div className="flex">
                  <div className="text-start pt-[2rem] w-full">
                    <span className="text-[18px] tracking-tight">
                      Brow Tweeze
                    </span>
                  </div>
                  <div className="pt-[2rem] w-full text-end">
                    <span className="text-[18px] tracking-tight font-light">
                      $19
                    </span>
                  </div>
                </div>
                <div className="text-start pt-[10px]">
                  <span className="text-[16px] tracking-tight text-gray">
                    Includes a brow consultation, tweeze & style. (20 min)
                  </span>
                </div>
              </div>

              <div className="max-w-[300px]">
                <div className="flex">
                  <div className="text-start pt-[2rem] w-full">
                    <span className="text-[18px] tracking-tight">
                      Brow Trim
                    </span>
                  </div>
                  <div className="pt-[2rem] w-full text-end">
                    <span className="text-[18px] tracking-tight font-light">
                      $20
                    </span>
                  </div>
                </div>
                <div className="text-start pt-[10px]">
                  <span className="text-[16px] tracking-tight text-gray">
                    Includes a brow consultation, trim & style. (20 min)
                  </span>
                </div>
              </div>

              <div className="max-w-[300px]">
                <div className="flex">
                  <div className="text-start pt-[2rem] w-full">
                    <span className="text-[18px] tracking-tight">
                      Bang Trim
                    </span>
                  </div>
                  <div className="pt-[2rem] w-full text-end">
                    <span className="text-[18px] tracking-tight font-light">
                      148
                    </span>
                  </div>
                </div>
                <div className="text-start pt-[10px]">
                  <span className="text-[16px] tracking-tight text-gray">
                    A trim on the bang area. Shampoo, conditioner and scalp
                    massage not included. (15 min)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brows;
