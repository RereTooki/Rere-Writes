import React from "react";
import Testing from "../components/Testing";

const Poem1 = () => {
  return (
    <>
      <div className="poemGrad h-[100vh] flex flex-col tab:flex-row xmd:px-[5vw] tab:px-0 tab:items-center tab:justify-center">
        <div className="quoteBG quoteBGP1 h-[50vh] lg:h-[50vh] flex flex-col  text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] srounded-tr-[20px] rounded-b-[40px] w3-animate-opacitys drop-shadow-2xl border-2 w-auto tab:w-[40vw]">
          {/* <p className="exoFont relastive top-[45%]">“Quote 1” - Speaker 1</p> */}
        </div>
        <div className="border-2 h-[50vh] tab:w-[40vw]"></div>
      </div>{" "}
    </>
  );
};

export default Poem1;
