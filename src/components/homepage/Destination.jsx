import React from "react";
import Dest from "../../assets/Dest.png";

import Dest1 from "../../assets/Dest1.png";
import Dest2 from "../../assets/Dest2.png";
import Dest3 from "../../assets/Dest4.png";
import Dest4 from "../../assets/Dest5.png";
import { SlLocationPin } from "react-icons/sl";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Destination = () => {
  return (
    <section className="py-24 lg:px-12 px-2">
      <div className="flex flex-col text-center w-full mb-20 items-center">
        <div className="bg-[#FCEAF8] w-[261px] border-[#DC28B7] border-l-2 rounded-md">
          <h1 className=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
            FEATURED DESTINATION
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
          We make your travel experience a seamless one
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className=" rounded-lg ">
          <div className="flex relative  h-[600px] ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={Dest}
            />

            <div className="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[#fdfdfd]">PARIS</p>
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
        </div>
        <div className="h-[600px] rounded-lg space-y-10">
          <div className="flex relative  h-[260px] ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={Dest1}
            />

            <div className="px-8 py-10  z-10 w-full  absolute top-[60%]  ">
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
          </div>
          <div className="flex relative  h-[300px] ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={Dest2}
            />

            <div className="px-8 py-10  z-10 w-full  absolute top-[66%]  ">
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[#fdfdfd]">NIGERIA</p>
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
        </div>
        <div className="h-[600px] rounded-lg space-y-10">
          <div className="flex relative  h-[300px] ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={Dest3}
            />

            <div className="px-8 py-10  z-10 w-full  absolute top-[66%]  ">
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
          <div className="flex relative  h-[260px] ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={Dest4}
            />

            <div className="px-8 py-10  z-10 w-full  absolute top-[60%]  ">
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <p className="text-[#fdfdfd]">LONDON</p>
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
        </div>
      </div>
    </section>
  );
};

export default Destination;
