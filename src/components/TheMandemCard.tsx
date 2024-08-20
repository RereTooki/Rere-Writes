import React from "react";
import TMBG from "../assets/images/poemBgs/TMBG.png";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";

import { useState, useEffect } from "react";

const TheMandemCard = () => {
  const title = "The Mandem";
  const verses = [
    `My guys, my brothers\nAt times, I call them my lovers\nYh, we come from different mothers\nStill, their love transcends borders`,
    `We insult one another, we fight\nFor nothing more than a show of might\nIt doesnt matter who is wrong or right\nWe live our lives without spite`,
    `I could probably name names\nSome genuinely wide, some tame\nSome actually funny, most horrifyingly lame\nAlways striving to be better, not remaining\nthe same`,
    `I'm proud of the men they've become\nCause I know how far they've come\nAt this point, I'd rather prefer to call them\nThe Mandem`,
    `Love y’all`,
  ];

  const titleFont =
    "exoFont underline underline-offset-4 decoration-wavy tab:decoration-dotted";
  const bodyFont = "exoFont";

  return (
    <>
      <div className="poemBG poemBG-TMandem min-h-[100vh] tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
        <div className="hidden z-0 tab:z-0 fixed right-[1px] xl:right-[8px] sborder-2 border-black w-fit translate-y-[70vh] tab:translate-y-0 tab:top-10 lg:top-[3.1rem] tab:scale-[1.5] lg:scale-[1.9] origin-right w3-animate-rightVec">
          <picture className="" data-aos="zoom-in-left" data-aos-duration="700">
            <source className="" media="(min-width: 565px)" srcSet={heart} />
            <img
              src={heart}
              alt="A heart svg"
              className="h-[272px] tab:h-[164px]"
            />
          </picture>
        </div>
        <div className="tab:bg-white tab:rounded-tl-[20px] tab:rounded-bl-[20px]">
          <div className="quoteBGs quoteBGP1 h-[0vh] tab:h-[85vh] flex flex-col  text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] tab:rounded-[20px] rounded-b-[40px] w3-animate-opacitys drop-shadow-2xl tab:drop-shadow-none w-auto tab:w-[45vw] lg:w-[40vw] tab:border-4 border-black border-double overflow-hidden">
            <picture className="hidden tab:block  w-full h-full">
              <source className="" media="(min-width: 565px)" srcSet={TMBG} />
              <img
                src={TMBG}
                alt="Stand By Me Background"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="h-auto tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[15px]  tab:rounded-br-[15px] xl:rounded-tr-[20px]  xl:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-rights tab:overflow-y-scroll tab:scroll tab:scrollSBM sborder-4 z-20 overflow-x-hidden ">
          <PoemCard
            title={title}
            verses={verses}
            titleFont={titleFont}
            bodyFont={bodyFont}
          />{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default TheMandemCard;
