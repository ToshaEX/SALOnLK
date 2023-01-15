import React from "react";
import axios from "axios";

const ServicesModal = ({ onClose, service = null, setService }) => {
  const formSubmit = (data) => {};

  const handleOnClose = () => {
    onClose(false);
    setService(null);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full pb-5 pt-5 px-5 md:px-5 md:w-1/2 bg-white rounded-lg">
        <div>
          <img
            src={require("../../assets/clipper.png")}
            alt="mySvgImage"
            className="w-1/2"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServicesModal;
