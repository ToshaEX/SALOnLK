import {React, useState} from "react";

const ServicesMenu = ()=>{

    const [text, setText] = useState("Get your nails done for great mood. Simple pleasures can make your week, not just day.")

    return(
        <div className="p-[3rem]">

            <div className="text-center mb-[18px]">
                <h2 className="font-bold text-[40px] leading-none tracking-tight">Service Menu</h2>
            </div>

            <div className="flex items-center justify-center pt-10 pb-[18px] gap-[1px] mb-[20px] text-center md:gap-20">
                
                <div id="1" className="cursor-pointer" onClick={()=>{
                    setText("Get your nails done for great mood. Simple pleasures can make your week, not just day.");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/nail-polish.png")}
                            alt=""
                        />                      
                    </div>
                    <div className="serviceName">
                        <span className="">Nails</span>
                    </div>
                </div>

                <div id="2" className="cursor-pointer px-1" onClick={()=>{
                    setText("Brows can change it all. Try out styling and tinting your brows and see the difference.");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/mascara.png")}
                            alt=""
                        />                  
                    </div>
                    <div className="serviceName">
                        <span className="">Brow</span>
                    </div>
                </div>

                <div id="3" className="cursor-pointer pr-1" onClick={()=>{
                    setText("Indulge a little longer with a customized facial to help achieve your skin goals in 60-90 minutes.");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/hair-comb.png")}
                            alt=""
                        />
                    </div>
                    <div className="serviceName">
                        <span className="">Cosmetology</span>
                    </div>
                </div>
                
                <div id="4" className="cursor-pointer" onClick={()=>{
                    setText("Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/woman-hair.png")}
                            alt=""
                        />
                    </div>
                    <div className="serviceName">
                        <span className="">Hair</span>
                    </div>
                </div>

                <div id="5" className="cursor-pointer px-1" onClick={()=>{
                    setText("Complete your service with beautiful makeup and simply be amazing with complete look.");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/makeup.png")}
                            alt=""
                        />
                    </div>
                    <div className="serviceName">
                        <span className="">MakeUp</span>
                    </div>
                </div>

                <div id="6" className="cursor-pointer" onClick={()=>{
                    setText("There are some things in life where it’s better to receive than to give, and massage is one of them.");
                }}>
                    <div className="h-[40px] w-[40px] m-auto mb-[22px] md:h-[50px] md:w-[50px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/massage.png")}
                            alt=""
                        />
                    </div>
                    <div className="serviceName">
                        <span className="">Massage</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="text-center max-w-md">
                    <span id="textParagraph" className="font-reguler text-[18px] leading-none tracking-tight text-gray">{text}</span>
                </div>
            </div>

            <div className="flex pt-8 justify-center">
                <button className="btn-primary text-[#273444] border-[#273444] hover:bg-gray-dark hover:text-white">View Service Menu</button>
            </div>
        </div>
    )
}

export default ServicesMenu;