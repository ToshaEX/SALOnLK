import React from "react";

const Features = ()=>{
    return(
        <section
        id="features"
        className=""
        >
            <div className="flex flex-col items-center px-6 py-10 mt-5 mx-auto space-y-12 bg-[#f7f9fc] md:mt-0 md:flex-row md:space-y-0">
           
                <div className="flex flex-col space-y-12 md:pl-10 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        Appointments done better
                    </h2>
                    <p class="max-w-sm text-center text-gray-600 md:text-left">
                        Looking for your next appointment with a local barber, hair stylist, massage therapist or nail artist? Need appointment booking for a beard trim, an eyebrow wax, or a deep tissue massage?
                        <br />
                        <br />
                        SaloonLk is a free beauty scheduling app and makes appointments easy to find and book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
                        <br />
                        <br />
                        <b>Discover top businesses in your area and book instantly with SalonLK.</b>
                    </p>
                </div>
                <div className="flex flex-col space-y-0 md:w-1/2">
                    <img className=" rounded-lg drop-shadow-xl cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-[350px] md:w-[500px]" src={require('../../../assets/f1.jpg')} alt="ab3-img"/>
                </div>
            </div>
            
            <div className="flex flex-col-reverse items-center px-6 pb-10 mt-5 mx-auto space-y-12 md:py-10 md:mt-0 md:flex-row md:space-y-0">
                <div className="flex flex-col space-y-0 md:w-1/2">
                    <img className=" rounded-lg drop-shadow-xl cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-[350px] md:w-[500px]" src={require('../../../assets/f2.jpg')} alt="ab3-img"/>
                </div>
                <div className="flex flex-col space-y-12 md:pl-10 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        Book with the best, near you
                    </h2>
                    <p class="max-w-sm text-center text-gray-600 pb-10 md:text-left">
                        Take a scroll around the block to see top health and beauty businesses on salonLk's platform. 
                        <br />
                        <br />
                        Check out their vibe from their business profile and hear what other people are saying with verified reviews. You can even look through their portfolio of work.
                        <br />
                        <br />
                        Save time and leave the stress to someone else. With SalonLK, setting up your next beauty appointment is free and easy.
                    </p>
                </div>
            </div>
                  
        </section>
    );
}

export default Features;