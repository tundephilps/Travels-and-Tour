import React from "react";

import Summer1 from "../../assets/Summer1.png";

import Summer2 from "../../assets/Summer2.png";

import Summer3 from "../../assets/Summer3.png";
import { IoCarOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Gallery = () => {
  return (
    <div className=" lg:p-12 p-2">
      <div className="flex flex-col text-center w-full mb-20 items-center">
        <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
          <h1 className=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
            SPECIAL OFFERS
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
          Save some money with our best deals and make your travel dreams a
          reality.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="h-full  overflow-hidden rounded-md relative">
          <img
            src={Summer1}
            className="object-cover h-full shadow-2xl rounded-md aspect-square"
          />
          <div className="absolute bottom-0 px-8 text-white space-y-3">
            <p className="font-extrabold text-2xl">Summer Group Trip</p>
            <div className="bg-white opacity-50  text-[#DC28B7] text-3xl font-bold rounded-full p-2 px-7 flex absolute top-0 right-[-10%]">
              N250,000
            </div>
            <p className="flex flex-row item-center gap-3">
              <SlLocationPin className="text-[#DC28B7]" /> Marrakesh Morroco
            </p>
            <p className="text-sm text-gray-200">20th -25th July, 2024</p>
            <div className="flex flex-row items-center gap-6 text-xs">
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Free Tours</p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>5 Star Hotel</p>
              </div>{" "}
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Airport Transfer</p>
              </div>
            </div>

            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-3  font-medium  text-[#DC28B7] text-xs  rounded-sm md:inline-flex mt-6"
            >
              MORE DETAILS
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
        </div>
        <div className="h-full  overflow-hidden rounded-md relative">
          <img
            src={Summer2}
            className="object-cover h-full shadow-2xl rounded-md aspect-square"
          />
          <div className="absolute bottom-0 px-8 text-white space-y-3">
            <p className="font-extrabold text-2xl">Summer In Paris</p>
            <div className="bg-white opacity-50  text-[#DC28B7] text-3xl font-bold rounded-full p-2 px-7 flex absolute top-0 right-[-10%]">
              N250,000
            </div>
            <p className="flex flex-row item-center gap-3">
              <SlLocationPin className="text-[#DC28B7]" /> Paris, France
            </p>
            <p className="text-sm text-gray-200">20th -25th July, 2024</p>
            <div className="flex flex-row items-center gap-6 text-xs">
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Free Tours</p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>5 Star Hotel</p>
              </div>{" "}
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Airport Transfer</p>
              </div>
            </div>

            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-3  font-medium  text-[#DC28B7] text-xs  rounded-sm md:inline-flex mt-6"
            >
              MORE DETAILS
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
        </div>{" "}
        <div className="h-full  overflow-hidden rounded-md relative">
          <img
            src={Summer3}
            className="object-cover h-full shadow-2xl rounded-md aspect-square"
          />
          <div className="absolute bottom-0 px-8 text-white space-y-3">
            <p className="font-extrabold text-2xl">Holiday Package</p>
            <div className="bg-white opacity-50  text-[#DC28B7] text-3xl font-bold rounded-full p-2 px-7 flex absolute top-0 right-[-10%]">
              N250,000
            </div>
            <p className="flex flex-row item-center gap-3">
              <SlLocationPin className="text-[#DC28B7]" /> Paris France
            </p>
            <p className="text-sm text-gray-200">20th -25th July, 2024</p>
            <div className="flex flex-row items-center gap-6 text-xs">
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Free Tours</p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>5 Star Hotel</p>
              </div>{" "}
              <div className="flex flex-row gap-2 items-center justify-center p-2 border-white border rounded-full">
                <IoCarOutline className="text-2xl" /> <p>Airport Transfer</p>
              </div>
            </div>

            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-3  font-medium  text-[#DC28B7] text-xs  rounded-sm md:inline-flex mt-6"
            >
              MORE DETAILS
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
