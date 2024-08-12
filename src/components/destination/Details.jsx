import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Dest from "../../assets/Dest.png";
import { FaClock, FaStar } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Details = () => {
  return (
    <div className="lg:p-12 px-2 py-12 bg-white ">
      <p className="text-2xl font-bold">EUROPE</p>
      <p className="flex flex-row items-center gap-2 pb-12">
        <CiLocationOn className="text-pink-400" /> 25 locations
      </p>

      <div className="grid lg:grid-cols-7 grid-cols-1  lg:gap-0 gap-4">
        {/* Filters */}
        <div className="col-span-2 space-y-8 ">
          <div>
            <p className="font-bold"> SORT BY </p>
            <div className="space-y-2 pt-6">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Top destination{" "}
                  </strong>
                </div>
              </label>

              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Top destination{" "}
                  </strong>
                </div>
              </label>
            </div>
          </div>
          <div>
            <p className="font-bold"> POPULAR FILTERS </p>
            <div className="space-y-2 pt-6">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">5 stars</strong>
                </div>
              </label>

              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900"> Hotels</strong>
                </div>
              </label>
              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Free tours
                  </strong>
                </div>
              </label>
            </div>
          </div>
          <div>
            <p className="font-bold"> FACILITIES </p>
            <div className="space-y-2 pt-6">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    Free wifi
                  </strong>
                </div>
              </label>

              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Room service
                  </strong>
                </div>
              </label>
              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Free tours
                  </strong>
                </div>
              </label>
            </div>
          </div>
          <div>
            <p className="font-bold"> OTHERS </p>
            <div className="space-y-2 pt-6">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    Free wifi
                  </strong>
                </div>
              </label>

              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Room service
                  </strong>
                </div>
              </label>
              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    Free tours
                  </strong>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="col-span-5 lg:p-0 p-2 space-y-6">
          <div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#FDFDFD] sm:flex-row lg:h-[400px]">
              <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src={Dest}
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex w-full flex-col px-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl ">
                  EIFFEL TOWER
                </h2>
                <p className="flex flex-row items-center gap-2">
                  <CiLocationOn className="text-pink-400" /> Paris, France
                </p>
                <p className="mb-2 max-w-md text-gray-600 pt-2">
                  Standing tall at 324 meters, the Eiffel Tower in Paris is an
                  architectural marvel, celebrated globally for its grace and
                  grandeur. It has since become an enduring symbol of love,
                  innovation, and the City of Light
                </p>
                <div className="flex items-center flex-row gap-6 mb-2">
                  <div className="flex flex-row items-end gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="font-bold">
                    4.8 <span className="text-pink-400">(20 Reviews)</span>
                  </p>
                </div>
                <p className="flex flex-row items-center gap-4 mb-4">
                  <FaClock className="text-pink-400" /> 6 Nights, 7 Days
                </p>
                <div className="flex flex-row items-center gap-6 text-xs pb-4">
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Free Tours</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>5 Star Hotel</p>
                  </div>{" "}
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Airport Transfer</p>
                  </div>
                </div>
                <div>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center  justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
                  >
                    BOOK NOW
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#FDFDFD] sm:flex-row lg:h-[400px]">
              <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src={Dest}
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex w-full flex-col px-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl ">
                  EIFFEL TOWER
                </h2>
                <p className="flex flex-row items-center gap-2">
                  <CiLocationOn className="text-pink-400" /> Paris, France
                </p>
                <p className="mb-2 max-w-md text-gray-600 pt-2">
                  Standing tall at 324 meters, the Eiffel Tower in Paris is an
                  architectural marvel, celebrated globally for its grace and
                  grandeur. It has since become an enduring symbol of love,
                  innovation, and the City of Light
                </p>
                <div className="flex items-center flex-row gap-6 mb-2">
                  <div className="flex flex-row items-end gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="font-bold">
                    4.8 <span className="text-pink-400">(20 Reviews)</span>
                  </p>
                </div>
                <p className="flex flex-row items-center gap-4 mb-4">
                  <FaClock className="text-pink-400" /> 6 Nights, 7 Days
                </p>
                <div className="flex flex-row items-center gap-6 text-xs pb-4">
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Free Tours</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>5 Star Hotel</p>
                  </div>{" "}
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Airport Transfer</p>
                  </div>
                </div>
                <div>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center  justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
                  >
                    BOOK NOW
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#FDFDFD] sm:flex-row lg:h-[400px]">
              <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src={Dest}
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex w-full flex-col px-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl ">
                  EIFFEL TOWER
                </h2>
                <p className="flex flex-row items-center gap-2">
                  <CiLocationOn className="text-pink-400" /> Paris, France
                </p>
                <p className="mb-2 max-w-md text-gray-600 pt-2">
                  Standing tall at 324 meters, the Eiffel Tower in Paris is an
                  architectural marvel, celebrated globally for its grace and
                  grandeur. It has since become an enduring symbol of love,
                  innovation, and the City of Light
                </p>
                <div className="flex items-center flex-row gap-6 mb-2">
                  <div className="flex flex-row items-end gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="font-bold">
                    4.8 <span className="text-pink-400">(20 Reviews)</span>
                  </p>
                </div>
                <p className="flex flex-row items-center gap-4 mb-4">
                  <FaClock className="text-pink-400" /> 6 Nights, 7 Days
                </p>
                <div className="flex flex-row items-center gap-6 text-xs pb-4">
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Free Tours</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>5 Star Hotel</p>
                  </div>{" "}
                  <div className="flex flex-row gap-2 items-center justify-center p-2 border-pink-400 border rounded-full">
                    <IoCarOutline className="text-2xl text-pink-400" />{" "}
                    <p>Airport Transfer</p>
                  </div>
                </div>
                <div>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center  justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
                  >
                    BOOK NOW
                    <MdKeyboardDoubleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
