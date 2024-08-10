import React from "react";
import overlay from "../../assets/overlay.png";

import backgroundImage from "../../assets/Banner.png";
import Accordion from "./Accordion";

const Value = () => {
  return (
    <div>
      <div>
        <div className="relative text-white">
          <img
            src={backgroundImage}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-12 lg:px-32 px-4 py-32 mx-auto z-50 text-white space-y-3">
            <div>
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 py-2 px-5 bg-white font-medium text-[#DC28B7] text-sm rounded-sm md:inline-flex"
              >
                OUR CORE VALUES
              </a>
              <h1 className="text-3xl pt-4">
                Guiding principles that define who we are and shape every
                journey we create, ensuring unforgettable experiences with every
                destination.
              </h1>
            </div>
            <div>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
