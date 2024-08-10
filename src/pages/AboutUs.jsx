import React from "react";
import Navbar from "../components/layout/Navbar";
import Header2 from "../components/layout/Header2";
import backgroundImage from "../assets/Banner.png";
import overlay from "../assets/overlay.png";
import About from "../assets/About2.png";
import Value from "../components/about/Value";
import Body1 from "../components/about/Body1";
import Team from "../components/about/Team";
import Review from "../components/homepage/Review";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import backgroundImage2 from "../assets/sky.png";

const AboutUs = () => {
  return (
    <div>
      <Header2 />
      <Navbar />
      <div>
        <div className="relative text-white">
          <img
            className="absolute w-full h-[100px] bottom-[-5%] z-10"
            src={overlay}
          />
          <img
            src={backgroundImage}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative  lg:px-32 px-4 py-32 mx-auto z-50 text-white space-y-3">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex"
            >
              OUR PROFILE
            </a>
            <h1 className="text-3xl">About Innobs Travel & Tour</h1>
          </div>
        </div>
      </div>
      <Body1 />
      <Value />
      <Team />
      <Review />
      <div className="p-12">
        <section class="h-[340px] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src={backgroundImage2}
            loading="lazy"
            alt="Photo by Fakurian Design"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div class="absolute inset-0  mix-blend-multiply"></div>

          <div class="relative flex flex-col items-center p-4 ">
            <p class="mb-4 text-center lg:text-3xl uppercase text-[#DC28B7] text-xl md:mb-8">
              travel with us today
            </p>
            <h1 class="mb-8 text-center lg:text-2xl w-[70%] font-light text-white text-sm">
              Enjoy your Journey with us. Let us help you create a journey that
              reflects your dreams and aspirations. Contact us today to get
              started!
            </h1>

            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
            >
              GET STARTED
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
