import { React } from "react";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="bg-[url('./assets/about_us-bg.png')]">
        <div className="p-[3rem] text-white">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              About Us
            </h2>
          </div>

          <div className="text-center pt-[2rem]">
            <span className="text-[17px] tracking-tight md:text-[18px]">
              Our ultimate goal is to establish the premier beauty studio in the
              world, <br /> where excellence is non-negotiable. We refuse to
              compromise on the quality <br /> of our services or products in
              our pursuit of being the best.
            </span>
          </div>

          <div className="flex pt-[3rem] justify-center">
            <button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* our story section */}
      <div className="pt-[4rem] pb-[4rem]">
        <div className="pb-[2rem] md:pb-[3rem]">
          <h2 className="font-bold text-[38px] leading-none tracking-tight text-center">
            Our Story
          </h2>
        </div>

        <p className="text-[1.2rem] px-[3rem] md:px-[13.2rem]">
          We started our journey as a small beauty studio in Colombo, Sri Lanka
          with a dream to create the best beauty studio in the world. From the
          very beginning, we knew that there could be no compromises when it
          comes to quality. We hired only the most skilled and talented
          specialists and made sure to provide top-notch customer service at all
          times. This commitment to excellence allowed us to grow and assemble a
          team of passionate professionals who share our vision. As we expanded,
          we never lost sight of our core values. We continued to invest in the
          latest technologies and treatments, and we always go above and beyond
          to make sure our clients feel pampered and rejuvenated. We believe
          that beauty is about feeling confident and comfortable in your own
          skin, and we are dedicated to helping our clients achieve that
          feeling. Today, we are proud to say that we have established ourselves
          as a leading beauty studio in the world. Our team of experts is
          constantly striving to improve and evolve, and we are always looking
          for new ways to exceed our clients' expectations. We invite you to
          come and experience the best that beauty has to offer at our studio.
        </p>
      </div>

      {/* our team section */}
      <div className="bg-[#f7f9fc]">
        <div className="pt-[4rem] md:mb-[16px]">
          <h2 className="font-bold text-[38px] leading-none tracking-tight text-center">
            Our Team
          </h2>
        </div>

        <div>
          <div className="pt-5 text-center md:flex md:justify-between md:px-[16rem] md:pt-10">
            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-1.webp")}
                  alt="t1"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                Jessica Anderson
              </span>
              <span className="relative block text-[14px]">Founder</span>
            </div>

            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-2.webp")}
                  alt="t2"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                John Williams
              </span>
              <span className="relative block text-[14px]">Cosmetologist</span>
            </div>

            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-3.webp")}
                  alt="t3"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                Emily Thompson
              </span>
              <span className="relative block text-[14px]">Hairdresser</span>
            </div>
          </div>

          <div className="pt-5 text-center pb-[4rem] md:flex md:justify-between md:px-[16rem] md:pt-10">
            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-4.webp")}
                  alt="t4"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                David Johnson
              </span>
              <span className="relative block text-[14px]">Barber</span>
            </div>

            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-5.webp")}
                  alt="t5"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                Sarah Jones
              </span>
              <span className="relative block text-[14px]">
                Nail Specialist
              </span>
            </div>

            <div className="cursor-pointer pt-10 md:pt-0">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                  src={require("../../assets/Team-6.webp")}
                  alt="t6"
                />
              </div>
              <span className="relative block first-letter:first-line:text-[16px]">
                Michael Smith
              </span>
              <span className="relative block text-[14px]">Therapist</span>
            </div>
          </div>
        </div>
      </div>
      {/* import footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
