import React from "react";
import Testing from "../components/Testing";
import SBMBG from "../assets/images/poemBgs/poem1Bg.png";
import SBMM from "../assets/images/poemBgs/SBM-M.jpg";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";

const SBMCard = () => {
  const title = "Stand By Me";
  const verses = [
    `I could probably give a thousand reasons\nYet, the words wouldn't express my feelings\nI want to be a part of your story\nAs long as you stand by me`,
    `Minute after minute,\nI'll love you infinitely\nHour after hour,\nYou'll remain my only desire`,
    `Day after day,\nIt'll be a never-ending holiday\nWeek after week,\nA lot will change but you'll remain unique`,
    `Month after month,\nTears, laughter and whatnot\nYear after year,\nAs long as you are, I'll be here`,
    `Cause you are proof\nThat where there's love, there's life\nNo matter what endures,\nI want to call you mine and me, yours`,
    `Darling,\nWill you marry me?`,
  ];
  return (
    <>
      <div className="poemBG poemBG-SBM tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center tab:border-4 xl:border-8 border-black border-double ">
        <div className="z-20 tab:z-0 absoslute fixed right-[1px] xl:right-[8px] sborder-2 border-black w-fit translate-y-[70vh] tab:translate-y-0 tab:top-10 lg:top-[3.1rem] tab:scale-[1.5] lg:scale-[1.9] origin-right w3-animate-rightVec">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={heart} />
            <img src={heart} alt="" className="h-[50vh] tab:h-[30vh]" />
          </picture>
        </div>
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
        <div className="sborder-4 h-[80vh] tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[20px]  tab:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-right overflow-y-scroll">
          <PoemCard title={title} verses={verses} />
        </div>
      </div>{" "}
    </>
  );
};

export default SBMCard;
