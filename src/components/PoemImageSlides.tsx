import React from "react";
import "../App.css";
import Carousel from "./Carousel";

const PoemImageSlides = () => {
  return (
    <>
      <div className="drop-shadow-2xl mb-10">
        <div className="quoteBG quoteBGD PISlides h-[30vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] srounded-tr-[20px] srounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 1” - Speaker 1</p>
        </div>
        <div className="quoteBG quoteBGB PISlides h-[30vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] srounded-tr-[20px] srounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 2” - Speaker 2</p>
        </div>
        <div className="quoteBG quoteBGC PISlides h-[30vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] srounded-tr-[20px] srounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 3” - Speaker 3</p>
        </div>

        <Carousel className="PISlides" />
      </div>
    </>
  );
};

export default PoemImageSlides;
