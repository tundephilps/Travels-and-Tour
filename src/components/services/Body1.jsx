import React from "react";
import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";
import grid3 from "../../assets/grid3.png";
import grid4 from "../../assets/grid4.png";
import grid5 from "../../assets/grid5.png";

const Body1 = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 bg-[#FDFDFD] gap-4 p-12">
      <div className="flex flex-col items-center gap-3 justify-center  p-4 shadow-lg ">
        <img src={grid1} />
        <p className="text-[#E86FCF]">TRAVEL</p>
        <p className="text-[#464D59]">Travel to any location of your choice</p>
        <div className="bg-[#FCEAF8] text-[#464D59] p-3 rounded-full">
          25 locations
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 justify-center  p-4 shadow-lg ">
        <img src={grid2} />
        <p className="text-[#E86FCF]">TOURS</p>
        <p className="text-[#464D59]">Travel to any location of your choice</p>
        <div className="bg-[#FCEAF8] text-[#464D59] p-3 rounded-full">
          25 locations
        </div>
      </div>{" "}
      <div className="flex flex-col items-center gap-3 justify-center  p-4 shadow-lg ">
        <img src={grid3} />
        <p className="text-[#E86FCF]">EVENTS</p>
        <p className="text-[#464D59]">Travel to any location of your choice</p>
        <div className="bg-[#FCEAF8] text-[#464D59] p-3 rounded-full">
          25 locations
        </div>
      </div>{" "}
      <div className="flex flex-col items-center gap-3 justify-center  p-4 shadow-lg ">
        <img src={grid4} />
        <p className="text-[#E86FCF]">RESERVATIONS</p>
        <p className="text-[#464D59]">Travel to any location of your choice</p>
        <div className="bg-[#FCEAF8] text-[#464D59] p-3 rounded-full">
          25 locations
        </div>
      </div>{" "}
      <div className="flex flex-col items-center gap-3 justify-center  p-4 shadow-lg ">
        <img src={grid5} />
        <p className="text-[#E86FCF]">OTHERS</p>
        <p className="text-[#464D59]">Travel to any location of your choice</p>
        <div className="bg-[#FCEAF8] text-[#464D59] p-3 rounded-full">
          25 locations
        </div>
      </div>
    </div>
  );
};

export default Body1;
