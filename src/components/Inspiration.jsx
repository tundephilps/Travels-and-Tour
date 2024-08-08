import React from "react";
import trip1 from "../assets/trip1.png";
import trip2 from "../assets/trip2.png";
import trip3 from "../assets/trip3.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Inspiration = () => {
  return (
    <section class="text-gray-600 body-font py-12">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full  items-center">
          <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
            <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
              TRIP INSPIRATION
            </h1>
          </div>
          <p class="lg:w-2/4 mx-auto leading-relaxed text-[24px] text-[#464D59] my-4">
            Experience the world with our different categories of trips made
            just for you. Find the perfect places for your.............
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-2/4 w-full p-4">
            <div class="flex relative  h-[350px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={trip1}
              />

              <div class="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
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
                    READ MORE
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 w-full p-4">
            <div class="flex relative  h-[350px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={trip2}
              />

              <div class="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
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
                    READ MORE
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 w-full p-4">
            <div class="flex relative  h-[350px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={trip3}
              />

              <div class="px-8 py-10  z-10 w-full  absolute top-[70%]  ">
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
                    READ MORE
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
