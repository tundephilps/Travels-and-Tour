import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import Hero from "../../assets/hero.jpg";
import Logo from "../../assets/Logo.png";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "HOME", path: "/" },
    { title: "ABOUT US", path: "/AboutUs" },
    { title: "SERVICES", path: "/Services" },
    { title: "DESTINATIONS", path: "/Destination" },
    { title: "CONTACT US", path: "/ContactUs" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);
  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img src={Logo} width={80} height={50} alt="Float UI logo" />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <FaTimes className="text-3xl" />
          ) : (
            <MdMenu className="text-3xl" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header className="bg-[#18202F]">
      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`lg:pb-0 pb-3 md:text-sm border-b-[0.5px] z-50 border-gray-300 ${
          state
            ? "absolute top-0 inset-x-0 bg-white z-50 shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center lg:px-12 mx-auto px-4 md:flex md:px-8">
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center z-50 space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="lg:text-white z-50 text-[#DC28B7] hover:text-[#DC28B7]"
                  >
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 py-3 px-5 text-white font-medium  bg-[#DC28B7] rounded-sm md:inline-flex"
              >
                GET STARTED
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
