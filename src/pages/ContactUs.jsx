import React from "react";
import Header2 from "../components/layout/Header2";
import Navbar from "../components/layout/Navbar";

import backgroundImage from "../assets/Banner.png";
import overlay from "../assets/overlay.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <Header2 />
      <Navbar />
      Contact Us
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
              GET IN TOUCH
            </div>
            <h1 className="text-3xl">Contact Us</h1>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto lg:px-12 px-4 py-16 sm:px-6 ">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="flex flex-col  w-full  items-start">
                <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
                  <h1 className=" lg:text-[12px] p-2 font-medium text-center title-font text-[#DC28B7]">
                    GET IN TOUCH
                  </h1>
                </div>
                <p className=" mx-auto leading-relaxed text-[24px] text-[#464D59] my-4">
                  We create the best experience for all our travellers. get in
                  touch and let us know how we can help you
                </p>
              </div>

              <span>CONTACT ADDRESS</span>
              <br />
              <p className="max-w-xl pt-2 text-xs">
                Chariot Hotel, No 7 Tito Broz Street, Off Jimmy Carter Street
                Opposite Protea Hotel, Asokoro, Abuja.
              </p>

              <div className="mt-8">
                <p className="py-2"> CALL US</p>
                <div className="flex flex-row gap-4 items-center">
                  <FiPhone className="text-2xl text-[#E86FCF]" />
                  <p>+2347031941983</p>
                </div>

                <p className="mt-8 py-2">CHAT WITH US</p>
                <div className="flex flex-row gap-4 items-center">
                  <IoMailOutline className="text-2xl  text-[#E86FCF]" />
                  <p>innobtravels@gmail.com</p>
                </div>
                <div className="flex flex-row gap-4 items-center text-2xl pt-4  ">
                  <FaFacebookSquare className=" text-[#E86FCF]" />
                  <FaSquareXTwitter className=" text-[#E86FCF]" />
                  <FaLinkedin className=" text-[#E86FCF]" />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
                >
                  SEND MESSAGE
                  <MdKeyboardDoubleArrowRight />
                </a>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUs;
