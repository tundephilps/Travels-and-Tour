import React from "react";
import Header2 from "../components/layout/Header2";
import Navbar from "../components/layout/Navbar";

import backgroundImage from "../assets/Banner.png";
import Explore1 from "../assets/Explore1.png";
import overlay from "../assets/overlay.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Gallery from "../components/destination/Gallery";
import Details from "../components/destination/Details";
import { SlLocationPin } from "react-icons/sl";

const DestinationDetails = () => {
  return (
    <div>
      <Header2 />
      <Navbar />
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
            <a className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex">
              DESTINATIONS
            </a>
            <h1 className="text-3xl">Explore any location</h1>
          </div>
        </div>
      </div>
      <Details />
    
      <p className="pt-6 text-2xl font-bold px-12 pb-5 uppercase">
        Explore other destination
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-12 px-2 gap-6 pb-12">
        <div className="flex relative  h-[350px] ">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Explore1}
          />

          <div className="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
            <div className="flex flex-row items-center justify-between ">
              <div>
                <p className="text-[#fdfdfd]">FAMILY TRIP</p>
                <p className="text-white flex flex-row items-center gap-2">
                  <SlLocationPin className="text-[#DC28B7]" />
                  25 locations
                </p>
              </div>

              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 px-4 rounded-md py-3 bg-white font-medium  text-[#DC28B7]   md:inline-flex"
              >
                BOOK NOW
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex relative  h-[350px] ">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Explore1}
          />

          <div className="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
            <div className="flex flex-row items-center justify-between ">
              <div>
                <p className="text-[#fdfdfd]">EUROPE</p>
                <p className="text-white flex flex-row items-center gap-2">
                  <SlLocationPin className="text-[#DC28B7]" />
                  25 locations
                </p>
              </div>

              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 px-4 rounded-md py-3 bg-white font-medium  text-[#DC28B7]   md:inline-flex"
              >
                BOOK NOW
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="flex relative  h-[350px] ">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Explore1}
          />

          <div className="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
            <div className="flex flex-row items-center justify-between ">
              <div>
                <p className="text-[#fdfdfd]">AMERICA</p>
                <p className="text-white flex flex-row items-center gap-2">
                  <SlLocationPin className="text-[#DC28B7]" />
                  25 locations
                </p>
              </div>

              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 px-4 rounded-md py-3 bg-white font-medium  text-[#DC28B7]   md:inline-flex"
              >
                BOOK NOW
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DestinationDetails;
