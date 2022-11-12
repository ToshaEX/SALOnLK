import React from "react";

const CTA = ()=>{
    return(
        <section
        id="cta"
        className=" bg-[#36454f]"
        >
            <div className="flex flex-col items-center justify-between px-6 py-24 space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h2 className="font-bold text-5xl leading-tight text-center text-white md:text-4xl md:text-left md:max-w-xl">
                    Start Your FREE Trial to Discover How SalonLK Platform Can Drive Your Growth.
                </h2>
                <div className="flex md:mr-10">
                    <a href="#" className="px-6 py-2 rounded-full bg-white baseline hover:bg-gray hover:text-white">
                        Start Your Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;