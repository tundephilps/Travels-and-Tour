import React from "react";
import icon1 from "../assets/icon1.png";

import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
const Experience = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20 items-center">
          <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
            <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
              OUR TRAVEL PROCESS
            </h1>
          </div>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
            We make your travel experience a seamless one
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full items-center ">
            <div class=" px-4 py-6 rounded-lg flex flex-col gap-3 items-center">
              <img src={icon1} />
              <h2 class="title-font font-medium text-[16px] text-[#18202F]">
                SIGN UP
              </h2>

              <p className="w-[60%]">
                Get started by signing up on Innobs Travel & Tour’s website
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full items-center  lg:pt-12">
            <div class=" px-4 py-6 rounded-lg flex flex-col gap-3 items-center">
              <img src={icon2} />
              <h2 class="title-font font-medium text-[16px] text-[#18202F]">
                BOOK A TRIP
              </h2>

              <p className="w-[60%]">
                Ready to embark on a trip? Book a trip to any location of your
                choice
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full items-center ">
            <div class=" px-4 py-6 rounded-lg flex flex-col gap-3 items-center">
              <img src={icon3} />
              <h2 class="title-font font-medium text-[16px] text-[#18202F]">
                MAKE PAYMENT
              </h2>

              <p className="w-[80%]">
                Booked your trip? Ensure your reservation by making your payment
                promptly.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full items-center  lg:pt-12">
            <div class=" px-4 py-6 rounded-lg flex flex-col gap-3 items-center">
              <img src={icon4} />
              <h2 class="title-font font-medium text-[16px] text-[#18202F]">
                ENJOY YOUR TRIP
              </h2>

              <p className="w-[60%]">
                Voila! you are all set for your great adventure. Enjoy your trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
