import React from "react";
import { IoStar } from "react-icons/io5";
import { MdOutlineThumbUp } from "react-icons/md";
import { PiLineVerticalBold } from "react-icons/pi";
import review from "../assets/Review.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ng from "../assets/ng.png";

const Review = () => {
  return (
    <div class="bg-[#FAFAFA] py-6 sm:py-8 lg:py-12">
      <div class="mx-auto lg:px-12 px-4 md:px-8">
        <div class="flex flex-col text-center w-full mb-20 items-center">
          <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
            <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
              REVIEWS
            </h1>
          </div>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
            See reasons why you should travel with us
          </p>
          <div className="flex flex-row gap-12 items-center pt-2">
            <p className="flex flex-row items-center gap-3">
              <IoStar className="text-yellow-500 text-2xl" /> Trust Score
            </p>
            <PiLineVerticalBold className="text-[#DC28B7]" />
            <p className="flex flex-row items-center gap-3">
              {" "}
              <MdOutlineThumbUp className="text-[#DC28B7] text-2xl" /> 2000
              Reviews
            </p>
          </div>
        </div>
        <div class="grid gap-8 sm:grid-cols-2">
          <div class="lg:h-[421px] overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
              src={review}
              loading="lazy"
              alt="Photo by Theo Crazzolara"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <div class="flex flex-col items-center justify-center sm:items-start bg-white p-8 h-full lg:py-3 ">
            <figure class="max-w-screen-md">
              <div class="flex items-center mb-4 text-yellow-300">
                <svg
                  class="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <blockquote>
                <p class="text-2xl font-semibold text-[#464D59] dark:text-white flex gap-6">
                  <span>
                    <FaQuoteLeft className="lg:text-3xl text-sm text-[#DC28B7]" />
                  </span>
                  Had a great experience with Innob Travels & Tours They were
                  really helpful throughout our journey we had to make a lot of
                  changes in our trip due to flight delays by airlines. Thanks
                  for Innob Travels & Tours for helping us find the right travel
                  planner.{" "}
                  <span className="mt-[140px]">
                    <FaQuoteRight className="text-3xl text-[#DC28B7]" />
                  </span>
                </p>
              </blockquote>
              <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                  <cite class="pe-3 font-medium text-gray-900 dark:text-white">
                    KATHRYN MURPHY
                  </cite>
                  <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400 flex flex-row items-center gap-2">
                    Nigeria <img src={ng} />
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
