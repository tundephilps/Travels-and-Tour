import React from "react";
import Header2 from "../components/layout/Header2";
import Navbar from "../components/layout/Navbar";

import backgroundImage from "../assets/Banner.png";
import overlay from "../assets/overlay.png";

const Destination = () => {
  return (
    <div>
      <Header2 />
      <Navbar />
      <div>
        <div className="relative text-white">
          <img
            className="absolute w-full h-[100px] bottom-[-5%] z-10"
            src={overlay}
          />
          <img
            src={backgroundImage}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative  lg:px-32 px-4 py-32 mx-auto z-50 text-white space-y-3">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex"
            >
              DESTINATIONS
            </a>
            <h1 className="text-3xl">Explore any location</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
