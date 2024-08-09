import React from "react";
import Photo1 from "../../assets/Photo1.png";

import Photo2 from "../../assets/Photo2.png";
import Photo3 from "../../assets/Photo3.png";
import Photo4 from "../../assets/Photo4.png";
import Photo5 from "../../assets/Photo5.png";
import Photo6 from "../../assets/Photo6.png";
import backgroundImage from "../../assets/sky.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Photos = () => {
  return (
    <section className="py-24 lg:px-12 px-2">
      <div class="flex flex-col text-center w-full mb-20 items-center">
        <div className="bg-[#FCEAF8] w-[261px] border-[#DC28B7] border-l-2 rounded-md">
          <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
            TRAVELLER'S PHOTOS
          </h1>
        </div>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
          Share in the happy moment our travellers experience on their trip
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-10 h-[700px]">
          <div className=" rounded-lg ">
            <div class="flex relative  h-[300px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo1}
              />
            </div>
          </div>
          <div className=" rounded-lg ">
            <div class="flex relative  h-[400px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo2}
              />
            </div>
          </div>
        </div>
        <div className="space-y-10 h-[700px]">
          <div className=" rounded-lg ">
            <div class="flex relative  h-[400px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo3}
              />
            </div>
          </div>
          <div className=" rounded-lg ">
            <div class="flex relative  h-[300px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo4}
              />
            </div>
          </div>
        </div>{" "}
        <div className="space-y-10 h-[700px]">
          <div className=" rounded-lg ">
            <div class="flex relative  h-[300px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo5}
              />
            </div>
          </div>
          <div className=" rounded-lg ">
            <div class="flex relative  h-[400px] ">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={Photo6}
              />
            </div>
          </div>
        </div>
      </div>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <div className="lg:p-24 py-12">
        <section class="h-[340px] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src={backgroundImage}
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
    </section>
  );
};

export default Photos;
