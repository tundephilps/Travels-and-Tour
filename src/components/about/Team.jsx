import React from "react";
import Team1 from "../../assets/Team1.png";

import Team2 from "../../assets/Team2.png";
import Team3 from "../../assets/Team3.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Accordion2 from "./Accordion2";

import overlay from "../../assets/overlay.png";

import backgroundImage from "../../assets/Banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Team = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full  items-center">
            <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
              <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
                OUR TEAM
              </h1>
            </div>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
              We are more than a travel agency
            </p>
          </div>
          <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-32 text-center pt-8">
            <div class="flex relative h-[380px]">
              <img
                alt="gallery"
                class="absolute inset-0 w-full  object-contain object-center"
                src={Team1}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 text-white bg-[#18202F] opacity-0 hover:opacity-100"
                style={{ borderRadius: "100px 4px 100px 4px", height: "460px" }}
              >
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  INNOCENTA
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  <span>
                    <FaQuoteLeft className="lg:text-3xl text-sm text-[#DC28B7]" />
                  </span>
                  We are passionate about exploration and committed to
                  excellence, ensuring every journey is a seamless blend of
                  adventure, luxury, and cultural immersion. Together, let's
                  chart new horizons and create memories that will last a
                  lifetime.
                  <span className="mt-[140px] ">
                    <FaQuoteRight className="text-3xl text-[#DC28B7] ml-[90%]" />
                  </span>
                </p>
              </div>
            </div>
            <div class="flex relative h-[380px]">
              <img
                alt="gallery"
                class="absolute inset-0 w-full  object-contain object-center"
                src={Team1}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 text-white bg-[#18202F] opacity-100"
                style={{ borderRadius: "100px 4px 100px 4px", height: "460px" }}
              >
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  PRECIOUS
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  <span>
                    <FaQuoteLeft className="lg:text-3xl text-sm text-[#DC28B7]" />
                  </span>
                  We are passionate about exploration and committed to
                  excellence, ensuring every journey is a seamless blend of
                  adventure, luxury, and cultural immersion. Together, let's
                  chart new horizons and create memories that will last a
                  lifetime.
                  <span className="mt-[140px] ">
                    <FaQuoteRight className="text-3xl text-[#DC28B7] ml-[90%]" />
                  </span>
                </p>
              </div>
            </div>{" "}
            <div class="flex relative h-[380px]">
              <img
                alt="gallery"
                class="absolute inset-0 w-full  object-contain object-center"
                src={Team2}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 text-white bg-[#18202F] opacity-0 hover:opacity-100"
                style={{ borderRadius: "100px 4px 100px 4px", height: "460px" }}
              >
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  VERONICA
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  <span>
                    <FaQuoteLeft className="lg:text-3xl text-sm text-[#DC28B7]" />
                  </span>
                  We are passionate about exploration and committed to
                  excellence, ensuring every journey is a seamless blend of
                  adventure, luxury, and cultural immersion. Together, let's
                  chart new horizons and create memories that will last a
                  lifetime.
                  <span className="mt-[140px] ">
                    <FaQuoteRight className="text-3xl text-[#DC28B7] ml-[90%]" />
                  </span>
                </p>
              </div>
            </div>{" "}
            <div class="flex relative h-[380px]">
              <img
                alt="gallery"
                class="absolute inset-0 w-full  object-contain object-center"
                src={Team3}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 text-white bg-[#18202F] opacity-0 hover:opacity-100"
                style={{ borderRadius: "100px 4px 100px 4px", height: "460px" }}
              >
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  OGWU QUEEN
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  <span>
                    <FaQuoteLeft className="lg:text-3xl text-sm text-[#DC28B7]" />
                  </span>
                  We are passionate about exploration and committed to
                  excellence, ensuring every journey is a seamless blend of
                  adventure, luxury, and cultural immersion. Together, let's
                  chart new horizons and create memories that will last a
                  lifetime.
                  <span className="mt-[140px] ">
                    <FaQuoteRight className="text-3xl text-[#DC28B7] ml-[90%]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="relative text-white">
            <img
              src={backgroundImage}
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-12 lg:px-32 px-4 py-32 mx-auto z-50 text-white space-y-3">
              <div>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex"
                >
                  OUR CORE VALUES
                </a>
                <h1 className="text-3xl pt-4 pb-6">
                  Get to know more about us through our FAQs
                  <br />
                  <br />
                  Have more questions about visa processing, travel plan etc
                </h1>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
                >
                  GET CONSULTATION
                  <MdKeyboardDoubleArrowRight />
                </a>
              </div>
              <div>
                <Accordion2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
