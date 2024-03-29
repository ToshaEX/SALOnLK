import React from "react";
import ProductOne from "../../../assets/Shop12.png";
import ProductTwo from "../../../assets/Shop11.png";
import ProductThree from "../../../assets/Shop13.png";
import ProductFour from "../../../assets/Shop14.png";

const Products = () => {
  const ProductList = [
    {
      src: ProductOne,
      alt: "p1",
      name: "Facial Cleanser",
      price: "750.00",
    },
    {
      src: ProductTwo,
      alt: "p2",
      name: "Eye Cream",
      price: "360.00",
    },
    {
      src: ProductThree,
      alt: "p3",
      name: "Super Glow",
      price: "480.00",
    },
    {
      src: ProductFour,
      alt: "p4",
      name: "Facial Balancing Gel",
      price: "860.00",
    },
  ];
  return (
    <div className="bg-[#f7f9fc] py-[5rem]">
      <div className="text-center mb-[18px]">
        <h2 className="font-bold text-[40px] leading-none tracking-tight">
          Our Products
        </h2>
      </div>

      <div className="pt-10 text-center md:flex md:justify-between md:text-start md:px-[11rem]">
        {ProductList.map((items, index) => {
          return (
            <div key={"product-list" + index} className="cursor-pointer pb-3">
              <div className="w-[200px] m-auto mb-[22px]">
                <img
                  className="drop-shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={items.src}
                  alt={items.alt}
                />
              </div>
              <span id="productName" className="relative block text-[16px]">
                {items.name}
              </span>
              <span id="productPrice" className="relative block text-[14px]">
                Rs:&nbsp;{items.price}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center pt-10 md:w-auto md:pt-8">
        <button className="btn-primary text-[#273444] border-[#273444] hover:bg-gray-dark hover:text-white">
          Check Out All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
