import React from "react";
import "../App.css";
import logo from "../assets/images/logo2.png";
import v1LMob from "../assets/icons/bg-pattern-intro-left-mobile.svg";
import v1LDesk from "../assets/icons/bg-pattern-intro-left-desktop.svg";
import v1RMob from "../assets/icons/bg-pattern-intro-right-mobile.svg";
import v1RDesk from "../assets/icons/bg-pattern-intro-right-desktop.svg";

const Testing = () => {
  return (
    <>
      <div className="border-4s mb-10 h-[100vh] introGrad exoFont select-none w3-animate-opacityIntro">
        {" "}
        <div className="absolute borders-2 border-black w-fit translate-y-[25vw] md:translate-y-[70px] tab:translate-y-[78vh] tab:scale-[1.5] w3-animate-leftVec">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={v1LDesk} />
            <img
              src={v1LMob}
              alt=""
              className="nsm:translsate-x-[44%] md:trasnslate-x-[40%] nsm:transslate-y-[60%] md:translate-y-0 nsm:scale-[1s.7] w-[1s00%] tab:h-[50vh]"
            />
          </picture>
        </div>
        <div className="absolute bordesr-2 border-black w-fit translate-y-[78vh] tab:translate-y-[100px]  nxl:translate-y-[140px] tab:scale-[1.3] nxl:scale-[1.5] right-0 w3-animate-rightVec origin-right z-0">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={v1RDesk} />
            <img
              src={v1RMob}
              alt=""
              className="nsm:translsate-x-[44%] md:trasnslate-x-[40%] nsm:transslate-y-[60%] md:translate-y-0 nsm:scale-[1s.7] w-[1s00%] tab:h-[50vh]"
            />
          </picture>
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-[10px] ">
          <div className="w-[45vw] h-[45vw] md:w-[160px] md:h-[160px] tab:w-[180px] tab:h-[180px]  nxl:w-[220px] nxl:h-[220px] w3-animate-zoom w3-animate-opacityIntro z-10">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={logo} />
              <img
                src={logo}
                alt="Rere Writes Logo"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="text-3xl tab:text-4xl tracking-widest nxl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] w3-animate-zoom w3-animate-opacityIntro">
            RERE WRITESs
          </div>
        </div>
      </div>
    </>
  );
};

export default Testing;
