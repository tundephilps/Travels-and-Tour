import React from "react";

import About from "../../assets/About2.png";

const Body1 = () => {
  return (
    <div className="py-14 lg:px-12">
      <div class="flex flex-col text-center w-full  items-center">
        <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
          <h1 class=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
            ABOUT US
          </h1>
        </div>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#464D59] mt-4">
          We are more than a travel agency
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-12 pt-12">
        <div className="px-2">
          <p className="text-[#464D59]">
            <span className="text-[#DC28B7] text-1xl uppercase font-bold">
              INNOB Travel & Tours{" "}
            </span>{" "}
            Ltd is a well-established travel agency that has been in the
            industry for more than 3 years. We are experts in every minor detail
            of this business and have been recognized over the years. Holding
            people, places and customs through professional guides, modern
            transportation, quality hotels, fine restaurant, event centre and
            other key vendors is our priority.
            <br />
            <br />
            <br />
            Since establishment, our primary focus has been to provide quality
            travel services to business and leisure travellers. The agency
            continues to grow and branch out its interests to rise as one of the
            exponents in the travel industry. We provide quality travel services
            to business and leisure travellers. We have worked with:
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
        </div>

        <img
          className=" sm:rounded-lg object-cover lg:h-[400px] w-full"
          alt=""
          src={About}
        />
      </div>
    </div>
  );
};

export default Body1;
