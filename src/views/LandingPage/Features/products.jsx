
const Products = ()=>{
    return(
        <div className="bg-[#f7f9fc] py-[5rem]">
            <div className="text-center mb-[18px]">
                <h2 className="font-bold text-[40px] leading-none tracking-tight">Featured Products</h2>
            </div>

            <div className="pt-10 text-center md:flex md:justify-between md:text-start md:px-[10rem]">
                <div id="1" className="cursor-pointer" onClick={()=>{
                    }}>
                    <div className="w-[200px] m-auto mb-[22px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/Shop11.webp")}
                            alt=""
                        />                      
                    </div>
                    <span id="productName" className="relative block text-[16px]">Facial Cleanser</span>
                    <span id="productPrice" className="relative block text-[14px]">$20.00</span>
                </div>

                <div id="2" className="cursor-pointer pt-10 md:pt-0" onClick={()=>{
                    }}>
                    <div className="w-[200px] m-auto mb-[22px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/Shop12.webp")}
                            alt=""
                        />                      
                    </div>
                    <span id="productName" className="relative block text-[16px]">Eye Cream</span>
                    <span id="productPrice" className="relative block text-[14px]">$15.00</span>
                </div>

                <div id="3" className="cursor-pointer pt-10 md:pt-0" onClick={()=>{
                    }}>
                    <div className="w-[200px] m-auto mb-[22px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/Shop13.webp")}
                            alt=""
                        />                      
                    </div>
                    <span id="productName" className="relative block text-[16px]">Super Glow</span>
                    <span id="productPrice" className="relative block text-[14px]">$13.00</span>
                </div>

                <div id="4" className="cursor-pointer pt-10 md:pt-0" onClick={()=>{
                    }}>
                    <div className="w-[200px] m-auto mb-[22px]">
                        <img
                            className="drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                            src={require("../../../assets/Shop14.webp")}
                            alt=""
                        />                      
                    </div>
                    <span id="productName" className="relative block first-letter:first-line:text-[16px]">Facial Balancing Gel</span>
                    <span id="productPrice" className="relative block text-[14px]">$10.00</span>
                </div>
            </div>

            <div className="flex items-center justify-center pt-10 md:w-auto md:pt-8">
                <button className="btn-primary text-[#273444] border-[#273444] hover:bg-gray-dark hover:text-white">Shop Now</button>
            </div>
        </div>
    )
}

export default Products;