import React from "react";
import LIWBG from "../assets/images/poemBgs/LIWBG.png";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";

import { useState, useEffect } from "react";

const LoveIsWarCard = () => {
  const title = "Love Is War";
  const verses = [
    `her eyes, I couldn’t ignore\na motionless gaze at the floor\na deafening silence,\na blinding darkness`,
    `together we were alone\nalone we were together\nall the while I should have known\nlove is war`,
  ];

  const titleFont =
    "sacramentoFont underline underline-offset-4 decoration-wavy tab:decoration-dotted tracking-wide text-[30px]";
  const bodyFont = "redressedFont text-[20px] lg:text-[20px] nxl:text-[25px]";

  return (
    <>
      <div className="poemBG poemBG-SBM min-h-[100vh] tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
        <div className="z-0 tab:z-0 fixed right-[1px] xl:right-[8px] sborder-2 border-black w-fit translate-y-[70vh] tab:translate-y-0 tab:top-10 lg:top-[3.1rem] tab:scale-[1.5] lg:scale-[1.9] origin-right w3-animate-rightVec">
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
              <source className="" media="(min-width: 565px)" srcSet={LIWBG} />
              <img
                src={LIWBG}
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

export default LoveIsWarCard;
