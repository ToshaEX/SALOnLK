import React from "react";
import { Link } from "react-router-dom";
import T1 from "../../assets/Team-1.webp";
import T2 from "../../assets/Team-2.webp";
import T3 from "../../assets/Team-3.webp";
import T4 from "../../assets/Team-4.webp";
import T5 from "../../assets/Team-5.webp";
import T6 from "../../assets/Team-6.webp";
import { Footer } from "../../Components/index";
import GoToTop from "../../GoToTop";

const AboutUs = () => {
  const ListOne = [
    { src: T1, alt: "t1", name: "Jessica Anderson", position: "Founder" },

    { src: T2, alt: "t2", name: "John Williams", position: "Cosmetologist" },

    { src: T3, alt: "t3", name: "Emily Thompson", position: "Hairdresser" },

    { src: T4, alt: "t4", name: "David Johnson", position: "Barber" },

    { src: T5, alt: "t5", name: "Sarah Jones", position: "Nail Specialist" },

    { src: T6, alt: "t6", name: "Michael Smith", position: "Therapist" },
  ];

  return (
    <section id="about">
      {/* About Us Section */}
      <div className="bg-[url('./assets/about_us-bg.png')]">
        <div className="py-[3rem] px-[1rem] text-white md:px-[3rem]">
          <div className="text-center">
            <h2 className="font-bold text-[42px] leading-none tracking-tight mini:text-[34px] md:text-[50px]">
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
            <Link to="/booking">
              <button className="btn-primary hover:bg-gray-dark mini:text-[14px]">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* our story section */}
      <div className="pt-[4rem] pb-[4rem] bg-[#f7f9fc] mini:pt-[3rem]">
        <p className="text-[18px] px-[2rem] text-center mini:px-[1rem] mini:text-[16px] md:text-[1.2rem] md:px-[5rem] lg:px-[9rem] xl:px-[13.2rem]">
          <span className="text-3xl">W</span>e started our journey as a small
          beauty studio in Colombo, Sri Lanka with a dream to create the best
          beauty studio in the world. From the very beginning, we knew that
          there could be no compromises when it comes to quality. We hired only
          the most skilled and talented specialists and made sure to provide
          top-notch customer service at all times. This commitment to excellence
          allowed us to grow and assemble a team of passionate professionals who
          share our vision. As we expanded, we never lost sight of our core
          values. We continued to invest in the latest technologies and
          treatments, and we always go above and beyond to make sure our clients
          feel pampered and rejuvenated. We believe that beauty is about feeling
          confident and comfortable in your own skin, and we are dedicated to
          helping our clients achieve that feeling. Today, we are proud to say
          that we have established ourselves as a leading beauty studio in the
          world. Our team of experts is constantly striving to improve and
          evolve, and we are always looking for new ways to exceed our clients'
          expectations. We invite you to come and experience the best that
          beauty has to offer at our studio.
        </p>
      </div>

      {/* our team section */}
      <div>
        <div className="pt-[4rem] md:mb-[16px] mini:pt-[3rem]">
          <h2 className="font-bold text-[38px] leading-none tracking-tight text-center mini:text-[32px]">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-6 pt-5 text-center mini:py-2 md:py-10 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 md:px-[8rem] lg:px-[5rem] xl:px-[10rem] xxl:px-[20rem]">
          {ListOne.map((items, index) => {
            return (
              <div
                className="cursor-pointer pt-10 md:pt-0"
                key={"about-list" + index}
              >
                <div className="w-[200px] m-auto mb-[22px]">
                  <img
                    className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                    src={items.src}
                    alt={items.alt}
                  />
                </div>
                <span className="relative block first-letter:first-line:text-[16px]">
                  {items.name}
                </span>
                <span className="relative block text-[14px] pb-4 md:pb-8">
                  {items.position}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* import footer Section */}
      <Footer />
      <GoToTop />
    </section>
  );
};

export default AboutUs;
