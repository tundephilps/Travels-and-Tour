import React from "react";
import Service from "../../assets/Service.png";

import Service1 from "../../assets/Service1.png";

import Service2 from "../../assets/Service2.png";

import Service3 from "../../assets/Service3.png";

import Service4 from "../../assets/Service4.png";

import Summer1 from "../../assets/Summer1.png";

import Summer2 from "../../assets/Summer2.png";

import Summer3 from "../../assets/Summer3.png";
import { IoCarOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Services = () => {
  const features = [
    {
      image: Service1,
      title: "QUALITY ASSURANCE",
      desc: "We uphold high standards of service, safety, and customer satisfaction to ensure exceptional quality in every service we provide.",
    },
    {
      image: Service2,
      title: "24/7 CUSTOMER SUPPORT",
      desc: "Experienced professionals everywhere to address your queries, booking inquiries or  concerns anytime, anywhere during travel. ",
    },
    ,
    {
      image: Service3,
      title: "PROFESSIONAL GUIDES",
      desc: "Expert local guides with deep knowledge of the area's history and culture customized to your interests and preferences.",
    },
    {
      image: Service4,
      title: "VISA PROCESSING",
      desc: "Free  consultation with experts to understand your needs and design your ideal travel experience to meet your specific requirements and preferences.",
    },
  ];

  return (
    <>
      <div className="flex lg:flex-row flex-col ">
        <img src={Service} />
        <div className="bg-[#0A0D14] h-full w-full py-4 lg:px-16">
          <div className="flex flex-col text-center w-full mb-12 items-center">
            <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
              <h1 className=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
                OUR TRAVEL PROCESS
              </h1>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#ffffff] mt-4">
              Find out what we can do for you.
            </p>
          </div>

          <div className="mb-2 lg:mt-0">
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <img src={item.image} className=" w-12 h-12 " />
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-[#E8E9EA]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section>
        <div className="px-2 py-24 mx-auto md:px-12 lg:px-12 ">
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
                    <IoCarOutline className="text-2xl" />{" "}
                    <p>Airport Transfer</p>
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
                    <IoCarOutline className="text-2xl" />{" "}
                    <p>Airport Transfer</p>
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
                    <IoCarOutline className="text-2xl" />{" "}
                    <p>Airport Transfer</p>
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
      </section>
    </>
  );
};

export default Services;
