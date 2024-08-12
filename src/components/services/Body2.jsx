import React from "react";
import Service from "../../assets/Service.png";
import Service1 from "../../assets/Service1.png";
import Service2 from "../../assets/Service2.png";
import Services2 from "../../assets/Services2.png";
import Service3 from "../../assets/Service3.png";
import Service4 from "../../assets/Service4.png";
import Service5 from "../../assets/Service5.png";
import Service6 from "../../assets/Service6.png";
import Service7 from "../../assets/Service7.png";
import Service8 from "../../assets/Service8.png";
import backgroundImage from "../../assets/sky.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Body2 = () => {
  const features = [
    {
      image: Service1,
      title: "QUALITY ASSURANCE",
      desc: "We uphold high standards of service, safety, and customer satisfaction to ensure exceptional quality in every service we provide.",
    },
    {
      image: Service2,
      title: "24/7 CUSTOMER SUPPORT",
      desc: "Experienced professionals everywhere to address your queries, booking inquiries or  concerns anytime, anywhere during travel. ",
    },
    ,
    {
      image: Service3,
      title: "PROFESSIONAL GUIDES",
      desc: "Expert local guides with deep knowledge of the area's history and culture customized to your interests and preferences.",
    },
    {
      image: Service4,
      title: "CONSULTATIONS",
      desc: "Free  consultation with experts to understand your needs and design your ideal travel experience to meet your specific requirements and preferences.",
    },
    {
      image: Service5,
      title: "HOTEL RESERVATION",
      desc: "Handpicked accommodations ranging from boutique hotels to luxury resorts ensuring comfort and convenience in every stay",
    },
    {
      image: Service6,
      title: "MODERN TRANSPORTATION",
      desc: "Comfortable and reliable vehicles for seamless travel between destinations and airport transfers available for convenience.",
    },
    ,
    {
      image: Service7,
      title: "VISA PROCESSING",
      desc: "Curated dining experiences featuring local cuisine and international flavors recommendations and reservations at top-rated restaurants.",
    },
    {
      image: Service8,
      title: "KEY VENDORS",
      desc: "Access to trusted vendors for additional services such as photography, entertainment, and more ensuring every aspect of your travel is professionally managed.",
    },
  ];

  return (
    <>
      <div className="flex lg:flex-row flex-col h-full lg:h-[740px] items-center overflow-hidden">
        <div className="h-full">
          <img src={Service} className="w-full object-cover  " />
          <img src={Services2} className="w-full object-cover  " />
        </div>

        <div className="bg-[#0A0D14] lg:h-[740px] w-full py-[6.1%] lg:px-16 px-2">
          <div className="flex flex-col text-center w-full mb-12 items-center">
            <div className="bg-[#FCEAF8] w-[161px] border-[#DC28B7] border-l-2 rounded-md">
              <h1 className=" lg:text-[12px] p-2 font-medium title-font text-[#DC28B7]">
                OUR TRAVEL PROCESS
              </h1>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px] text-[#ffffff] mt-4">
              Find out what we can do for you.
            </p>
          </div>

          <div className="mb-2 lg:mt-0">
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <img src={item.image} className=" w-12 h-12 " />
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-[#E8E9EA]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:p-24 py-12">
        <section className="h-[340px] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src={backgroundImage}
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0  mix-blend-multiply"></div>

          <div className="relative flex flex-col items-center p-4 ">
            <p className="mb-4 text-center lg:text-3xl uppercase text-[#DC28B7] text-xl md:mb-8">
              travel with us today
            </p>
            <h1 className="mb-8 text-center lg:text-2xl w-[70%] font-light text-white text-sm">
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
    </>
  );
};

export default Body2;
