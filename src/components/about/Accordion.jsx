import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const accordionData = [
  {
    title: "Value",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "Vision",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "Mission",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const handleToggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} className="shadow-md rounded-lg  bg-white/10 m-4 ">
          <div
            className="flex justify-between items-center cursor-pointer p-4 mb-4 bg-[#FCEAF8]"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-lg font-bold text-[#DC28B7]">{item.title}</h2>
            {isOpen[index] ? (
              <RiArrowUpSLine className="text-lg text-[#DC28B7]" />
            ) : (
              <RiArrowDownSLine className="text-lg text-[#DC28B7]" />
            )}
          </div>
          {isOpen[index] && (
            <div className="p-4">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
