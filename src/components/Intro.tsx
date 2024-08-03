import React from "react";
import logo from "../assets/images/logo.png";
import Carousel from "./Carousel";

const Intro = () => {
  return (
    <>
      <div className="border-4s mb-10 h-[100vh] introGrad exoFont">
        {" "}
        <div className="flex flex-col items-center justify-center h-full gap-[10px] ">
          <div className="w-[45vw] h-[45vw] md:w-[160px] md:h-[160px] tab:w-[180px] tab:h-[180px]  nxl:w-[220px] nxl:h-[220px] ">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={logo} />
              <img
                src={logo}
                alt="Rere Writes Logo"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="text-3xl tab:text-4xl tracking-widest nxl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2]">
            RERE WRITES
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
