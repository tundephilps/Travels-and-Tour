import React from "react";
import { FaFacebookSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiLineVerticalBold } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerNavs = [
    {
      label: "QUICKLINKS",
      items: [
        {
          href: "javascript:void()",
          name: "Destinations",
        },
        {
          href: "javascript:void()",
          name: "Gallery",
        },
        {
          href: "javascript:void()",
          name: "Our Team",
        },
        {
          href: "javascript:void()",
          name: "Contact us",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "About Us",
        },
        {
          href: "javascript:void()",
          name: "Travel locations",
        },
        {
          href: "javascript:void()",
          name: "Hotels",
        },
        {
          href: "javascript:void()",
          name: "Transportation",
        },
        {
          href: "javascript:void()",
          name: "Reservations",
        },
        {
          href: "javascript:void()",
          name: "Services",
        },
      ],
    },
    {
      label: "Support",
      items: [
        {
          href: "javascript:void()",
          name: "FAQ",
        },
        {
          href: "javascript:void()",
          name: "Terms & Conditions",
        },
        {
          href: "javascript:void()",
          name: "Privacy Policy",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#18202F] text-white lg:px-12 py-12 px-2">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
        <div className="space-y-4">
          <p className="text-sm text-[#E86FCF]">NEWSLETTER</p>
          <p className="lg:text-sm  ">
            Suscribe to get latest travel updates on places to explore
          </p>
          <p className="text-xs text-gray-300">No email spamming</p>
        </div>
        <div className="w-[40%] space-y-4">
          <p className="text-sm text-[#E86FCF]">EMAIL ADDRESS</p>
          <div className="relative ">
            <svg
              className="w-6 h-6 text-[#E86FCF] absolute left-3 inset-y-0 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <a
            href="javascript:void(0)"
            className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
          >
            SUBSCRIBE
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
      </div>
      <hr className="text-white my-12" />

      <footer className="text-white  mx-auto ">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="w-[70%]">
              <div className="flex flex-row gap-4 items-center">
                <img src={Logo} className="w-32" />
                <p className="text-xs">
                  Holding people, places and customs through professional
                  guides, modern transportation, quality hotels, fine
                  restaurant, event centre and other key vendors is our
                  priority.
                </p>
              </div>
              <p className="text-sm text-[#E86FCF] mt-8">CONTACT ADDRESS</p>
              <p className="leading-relaxed mt-2 text-[15px]">
                Chariot Hotel, No 7 Tito Broz Street, Off Jimmy Carter Street
                Opposite Protea Hotel, Asokoro, Abuja.
              </p>
            </div>
            <div className="flex flex-row items-center gap-8 mt-6">
              <div className="flex flex-row gap-4 items-center">
                <IoMailOutline className="text-2xl" />
                <p>innobtravels@gmail.com</p>
              </div>
              <PiLineVerticalBold className="text-[#EF9CDE] lg:block hidden" />
              <div className="flex flex-row gap-4 items-center">
                <FiPhone className="text-2xl" />
                <p>+2347031941983</p>
              </div>
            </div>

            <div className="lg:flex flex-row gap-4 items-center text-2xl  hidden pt-4">
              <FaFacebookSquare />
              <FaSquareXTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="flex-1  space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-[#E86FCF] font-medium">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-center sm:flex">
          <div className="mt-4 sm:mt-0 text-xs">
            innobs travel & tour.com &copy; 2022 Float UI All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
