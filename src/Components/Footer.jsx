import React from "react";

const Footer = ()=>{
    return(
            <footer className="flex flex-col-reverse items-center bg-[#171618] justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="mx-auto my-6 text-center text-white md:hidden">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
                <div>
                    <img className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
                    alt="salonlk"
                    />
                </div>

                <div class="hidden text-white md:block md:mt-6">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
            </footer>
    );
}

export default Footer;