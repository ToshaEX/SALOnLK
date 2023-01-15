import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <div className="py-[2rem] px-[1rem] md:px-[10rem]">
      <div className="text-center mb-[18px] pt-2">
        <h2 className="font-bold text-[40px] leading-none tracking-tight">
          What Our Customers Say
        </h2>
      </div>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="pt-[20px] pb-[30px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-3 w-12 h-12 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-[22px] italic font-medium text-gray tracking-tight">
                  "I recently visited this salon for a haircut and had a great
                  experience. The stylist was knowledgeable, and friendly and
                  did a fantastic job with my hair. She took the time to listen
                  to what I wanted and gave me a great cut that I was really
                  happy with. I would definitely recommend this salon to anyone
                  looking for a great haircut."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="profile 1"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <cite className="pr-3 font-medium text-black">
                    Micheal Gough
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="pt-[20px] pb-[30px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-3 w-12 h-12 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-[22px] italic font-medium text-gray tracking-tight">
                  "I recently had the pleasure of experiencing the services of
                  Beauty Salon. The staff were incredibly friendly and
                  accommodating, and the atmosphere was relaxing and inviting.
                  The services they offer are top notch and they take the time
                  to make sure each customer feels special and taken care of.
                  The salon is clean, modern, and well-maintained. I would
                  highly recommend Beauty Salon to anyone looking for a great
                  salon experience."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile 2"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <cite className="pr-3 font-medium text-black">
                    Nicola Thomas
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="pt-[20px] pb-[30px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-3 w-12 h-12 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-[22px] italic font-medium text-gray tracking-tight">
                  "I recently visited the Barber Salon for a haircut and I was
                  so pleased with the outcome. The staff were friendly,
                  knowledgeable, and accommodating. I received a great cut and
                  was given advice on how to style it. The barber was very
                  experienced and did a great job. The atmosphere of the salon
                  was very comfortable and inviting. I would definitely
                  recommend this Barber Salon to anyone looking for a great
                  haircut."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="profile 3"
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <cite className="pr-3 font-medium text-black">
                    Naomi Silva
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
