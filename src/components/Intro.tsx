import React from "react";
import logo from "../assets/images/logo.png";
import Carousel from "./Carousel";

const Intro = () => {
  return (
    <>
      <div className="h-[80vh] bg-blackS/80 testings exoFont my-10 rounded-[50px] tab:rounded-bl-[80px] mySlidesInt mx-[5vw] quoteBG quoteBGA">
        <div className="flex flex-col items-center justify-center h-full gap-[10px] w3-animate-zoom">
          <div className="w-[30vw] h-[30vw] tab:w-[150px] tab:h-[150px] ">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={logo} />
              <img
                src={logo}
                alt="A dashboard icon"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="text-white text-2xl md:text-3xl tab:text-4xl tracking-widest">
            RERE WRITES
          </div>
        </div>
      </div>
      <div className="h-[80vh] bg-blackS/80 testings exoFont my-10 rounded-[50px] tab:rounded-bl-[80px] mySlidesInt mx-[5vw] quoteBG quoteBGB">
        <div className="flex flex-col items-center justify-center h-full gap-[10px] w3-animate-zoom">
          <div className="w-[30vw] h-[30vw] tab:w-[150px] tab:h-[150px] ">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={logo} />
              <img
                src={logo}
                alt="A dashboard icon"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="text-white text-2xl md:text-3xl tab:text-4xl tracking-widest">
            RERE WRITES
          </div>
        </div>
      </div>
      <div className="h-[80vh] bg-blackS/80 testings exoFont my-10 rounded-[50px] tab:rounded-bl-[80px] mySlidesInt mx-[5vw] quoteBG quoteBGC">
        <div className="flex flex-col items-center justify-center h-full gap-[10px] w3-animate-zoom">
          <div className="w-[30vw] h-[30vw] tab:w-[150px] tab:h-[150px] ">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={logo} />
              <img
                src={logo}
                alt="A dashboard icon"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="text-white text-2xl md:text-3xl tab:text-4xl tracking-widest">
            RERE WRITES
          </div>
        </div>
      </div>
      <Carousel className="mySlidesInt" />
    </>
  );
};

export default Intro;
