import React from "react";
import About from "../../assets/About.png";
import { BsSuitSpadeFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font lg:px-12">
      <div className="flex flex-col text-center w-full  items-center">
        <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
          <h1 className=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
            ABOUT US
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
          We are more than a travel agency
        </p>
      </div>
      <div className="container grid lg:grid-cols-2 grid-cols-1 px-5 lg:py-8 py-3 md:flex-row flex-col items-center">
        <div className=" lg:w-full  mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded h-[454px]"
            alt="hero"
            src={About}
          />
        </div>
        <div className="lg:flex-grow   flex flex-col md:items-start md:text-left items-center text-center">
          <p className="text-[#464D59]">
            <span className="text-[#DC28B7] text-[20px]">
              INNOB Travel & Tours
            </span>{" "}
            Ltd is a well-established travel agency that has been in the
            industry for more than 3 years. We are experts in every minor detail
            of this business and have been recognized over the years. We provide
            quality travel services to business and leisure travellers. The
            agency continues to grow and branch out its interests to rise as one
            of the exponents in the travel industry. We have worked with:
          </p>
          <div className="grid grid-cols-3 w-full mx-auto py-6 ">
            <div className="text-center space-y-3">
              <p className="text-[#E86FCF] text-[24px]">700+</p>
              <p className="text-[#464D59]">Airline to Book Ticket</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-[#E86FCF] text-[24px]">700+</p>
              <p className="text-[#464D59]">Hotels Worldwide</p>
            </div>{" "}
            <div className="text-center space-y-3">
              <p className="text-[#E86FCF] text-[24px]">700+</p>
              <p className="text-[#464D59]">Travel Agency Partners</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FCEAF8] p-4">
              <p className="flex items-center gap-4 text-[#DC28B7]">
                {" "}
                <BsSuitSpadeFill className="text-[#DC28B7]" /> VISION
              </p>
              <p className="text-[#464D59] text-sm pt-2">
                To become the best leading travel and tour company in Abuja, and
                Nigeria as a whole, respected and relied on by both partners and
                customers.
              </p>
            </div>
            <div className="bg-[#FCEAF8] p-4">
              <p className="flex items-center gap-4 text-[#DC28B7]">
                {" "}
                <BsSuitSpadeFill className="text-[#DC28B7]" /> MISSION
              </p>
              <p className="text-[#464D59] text-sm pt-2">
                To provide high excellence and quality in service to our
                customers, by developing comprehensive travel product to the
                travel market in and out of Nigeria.
              </p>
            </div>
          </div>
          <a
            href="javascript:void(0)"
            className="flex items-center justify-center gap-x-1 py-3  font-medium  text-[#DC28B7]  rounded-sm md:inline-flex mt-6"
          >
            READ MORE
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
