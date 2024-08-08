import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <div className="bg-[#18202F] py-3 px-12 text-white flex flex-row lg:gap-8 gap-3 items-center lg:justify-end justify-center">
        <div className="flex flex-row gap-4 items-center">
          <IoMailOutline className="text-2xl" />
          <p>innobtravels@gmail.com</p>
        </div>
        <PiLineVerticalBold className="text-[#EF9CDE] lg:block hidden" />
        <div className="flex flex-row gap-4 items-center">
          <FiPhone className="text-2xl" />
          <p>+2347031941983</p>
        </div>
        <PiLineVerticalBold className="text-[#EF9CDE] lg:block hidden" />
        <div className="lg:flex flex-row gap-4 items-center text-2xl  hidden">
          <FaFacebookSquare />
          <FaSquareXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Header;
