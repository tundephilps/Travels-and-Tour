import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <section className="relative">
      <div className="bg-white  shadow-2xl lg:w-[80%] w-full lg:px-16 px-4 mx-auto  p-4 rounded-lg flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-center p-2 rounded-md border border-pink-300 gap-3">
            <CiLocationOn className="text-pink-400" />
            <p className="text-gray-400">Location</p>
          </div>
          <div className="h-16 w-1 bg-pink-400" />
          <input
            placeholder="Search for any location"
            className="w-[80%] outline-none"
          />
        </div>
        <div className="p-4 bg-[#DC28B7] rounded-full ">
          <FaSearch />
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
