import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const accordionData = [
  {
    title: "what services does innob travel & tour offer?",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "How can I book a trip with?",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "Do you offer customized travel packages?",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "What is your cancellation policy?",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
  {
    title: "Can you help with visa applications?",
    details:
      "We offer a wide range of services including personalized travel planning, flight and hotel bookings, guided tours, visa processing, adventure trips, and study abroad packages. Our team is dedicated to creating tailor-made travel experiences to suit your preferences and budget.",
  },
];

const Accordion2 = () => {
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
            <h2 className="text-lg font-bold text-[#DC28B7] uppercase">
              {item.title}
            </h2>
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

export default Accordion2;
