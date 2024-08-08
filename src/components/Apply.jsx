import React from "react";
import backgroundImage from "../assets/Apply.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Apply = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative flex flex-col gap-4 justify-center items-center lg:ml-[40%] ml-0 px-5 lg:py-32 py-8 mx-auto z-50 text-white">
        <h1 className="text-3xl uppercase lg:w-[70%] w-full text-center">
          dreaming of studying abroad? Let us handle your visa process for you!{" "}
        </h1>
        <p className=" w-[50%] text-center ">
          <span className="text-2xl text-[#DC28B7] font-bold">
            {" "}
            Innobs Travel & Tour,{" "}
          </span>{" "}
          is here to simplify your student visa application process. Contact us
          now to begin your student visa application process.
        </p>
        <a
          href="javascript:void(0)"
          className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
        >
          APPLY NOW
          <MdKeyboardDoubleArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Apply;
