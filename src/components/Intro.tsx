import React from "react";
import logo from "../assets/images/logo.png";

const Intro = () => {
  return (
    <>
      <div className="h-[80vh] bg-black/80 exoFont mb-10 rounded-bl-[50px] tab:rounded-bl-[80px]">
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
    </>
  );
};

export default Intro;
