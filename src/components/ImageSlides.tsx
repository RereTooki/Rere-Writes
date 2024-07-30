import React from "react";
import "../App.css";
import Carousel from "./Carousel";

const ImageSlides = () => {
  return (
    <>
      <div className="drop-shadow-2xl mb-10">
        <div className="quoteBG quoteBG1 mySlides h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 1” - Speaker 1</p>
        </div>
        <div className="quoteBG quoteBG2 mySlides h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 2” - Speaker 2</p>
        </div>
        <div className="quoteBG quoteBG3 mySlides h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
          <p className="exoFont relative top-[45%]">“Quote 3” - Speaker 3</p>
        </div>

        <Carousel className="mySlides" />
      </div>
    </>
  );
};

export default ImageSlides;
