import { useEffect, useState } from "react";
import Hero from "../assets/hero.jpg";
import Logo from "../assets/Logo.png";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "HOME", path: "javascript:void(0)" },
    { title: "ABOUT US", path: "javascript:void(0)" },
    { title: "SERVICES", path: "javascript:void(0)" },
    { title: "DESTINATIONS", path: "javascript:void(0)" },
    { title: "BLOG", path: "javascript:void(0)" },
    { title: "CONTACT US", path: "javascript:void(0)" },
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
    <div className="relative ">
      <div className="absolute  inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <img className="absolute w-full h-full" src={Hero} />
      <div className="relative">
        <header>
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`lg:pb-0 pb-3 md:text-sm border-b-[0.5px] border-gray-300 ${
              state
                ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
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
                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx} className="text-white hover:text-[#DC28B7]">
                        <a href={item.path} className="block">
                          {item.title}
                        </a>
                      </li>
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
        {/* Hero */}
        <section>
          <div className="lg:px-12 mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 ">
              <p className="text-[#DC28B7] font-bold">TRAVEL THE WORLD WITH</p>
              <h1 className="lg:text-7xl text-gray-100 font-extrabold text-3xl">
                INNOBS TRAVELS &<br /> TOURS
              </h1>
              <p className="text-white text-[19px]">
                Holding people, places and customs through professional guides,
                <br />
                modern transportation, quality hotels, fine restaurant, event
                <br />
                centre and other key vendors is our priority.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
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
          </div>
        </section>
      </div>
    </div>
  );
};
