import React from "react";
import Header2 from "../components/layout/Header2";
import Navbar from "../components/layout/Navbar";

import backgroundImage from "../assets/Banner.png";
import overlay from "../assets/overlay.png";
import Body1 from "../components/services/Body1";
import Body2 from "../components/services/Body2";

const Services = () => {
  return (
    <div>
      <Header2 />
      <Navbar />
      Services
      {/* <div>
        <div className="relative text-white">
          <img
            className="absolute w-full h-[100px] bottom-[-5%] "
            src={overlay}
          />
          <img
            src={backgroundImage}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative  lg:px-32 px-4 py-32 mx-auto  text-white space-y-3">
            <div className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex">
              OUR SERVICES
            </div>
            <h1 className="text-3xl">We offer wide range of Travel Services</h1>
          </div>
        </div>
      </div>
      <Body1 />
      <Body2 /> */}
    </div>
  );
};

export default Services;
