import React from "react";
import Testing from "../components/Testing";
import SBMBG from "../assets/images/poemBgs/poem1Bg.png";
import SBMM from "../assets/images/poemBgs/SBM-M.jpg";

const Poem1 = () => {
  return (
    <>
      <div className="poemBG poemBG-SBM tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 border-black border-double">
        <div className="tab:bg-white tab:rounded-tl-[20px] tab:rounded-bl-[20px] w3-animate-left  ">
          <div className="quoteBGs quoteBGP1 h-[50vh] tab:h-[85vh] flex flex-col  text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] tab:rounded-[20px] rounded-b-[40px] w3-animate-opacitys drop-shadow-2xl tab:drop-shadow-4xl bsorder-2 w-auto tab:w-[45vw] lg:w-[40vw] border-4 border-black border-double overflow-hidden">
            <picture className="hidden tab:block  w-full h-full">
              <source className="" media="(min-width: 565px)" srcSet={SBMBG} />
              <img
                src={SBMBG}
                alt="Rere Writes Logo"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="sborder-4 h-[80vh] tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[20px]  tab:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-right ">
          rere
        </div>
      </div>{" "}
    </>
  );
};

export default Poem1;
