import React from "react";

const AboutUS = () => {
  return (
    <section
      id="about-us"
      className="flex sm:bg-cover h-screen bg-auto"
    > 
      <div className="items-start ml-20 mt-[150px] flex">
        <div className="flex max-w-xl">
          <div>
            <img className="h-[222px] w-[123px] drop-shadow-xl mt-[150px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../../assets/ab-1.png')} alt="ab1-img"/>
          </div>
          <div>
            <div className="flex">
              <img className="mx-5 h-[213px] w-[152px] drop-shadow-xl ml-5 mr-0 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../../assets/ab-2.png')} alt="ab2-img"/>
              <img className="mx-5 h-[133px] w-[90px] drop-shadow-xl ml-5 mr-0 mt-[80px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../../assets/ab-4.png')} alt="ab4-img"/>
            </div>
            <div className="flex">
              <img className="h-[180px] w-[119px] drop-shadow-xl ml-5 mt-5 mr-5 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../../assets/ab-3.png')} alt="ab3-img"/>
              <img className="h-[169px] w-[112px] drop-shadow-xl mt-5 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../../assets/ab-5.png')} alt="ab5-img"/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="font-bold text-6xl text-gray-dark ml-[310px]">
          About us
        </div>
        <div className="ml-[150px] mt-[50px] p-4 w-full max-w-xl bg-white rounded-lg shadow-lg sm:p-6 md:p-8">
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sit amet commodo nulla facilisi nullam vehicula ipsum. Ultricies mi eget mauris pharetra. Elementum sagittis vitae et leo. Quam id leo in vitae turpis. Ornare arcu odio ut sem nulla pharetra. Facilisis mauris sit amet massa vitae tortor condimentum. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
