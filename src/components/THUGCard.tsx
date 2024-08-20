import React from "react";
import SBMBG from "../assets/images/poemBgs/THUGBG.jpg";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";

import { useState, useEffect } from "react";

const THUGCard = () => {
  const title = "The Hate U Give";
  const verses = [
    `The Hate U Give\nAn evergreen darkness\nEnvy with finesse`,
    `The Hate U Give\nHappiness make-believe\nIs it really necessary?`,
    `The Hate U Give\nSo bitter you could kill yourself\nEmotionally fragile, so you act tough`,
    `The Hate U Give\nYou stare at the mirror\nAll you see is one flaw after another`,
    `The Hate U Give\nA soul riddled with holes\nBreeding bitterness that only grows`,
    `The Hate U Give\nPain's an unnecessary evil\nYet you harbour it still`,
    `The Hate U Give\nYou have a contorted reality\nSo you bear agony so heavy`,
    `The Hate U Give\nGive happiness another chance\nOne last dance with peace`,
  ];

  const titleFont =
    "meriendaFont underline underline-offset-4 decoration-wavy tab:decoration-dotted text-white tab:text-black";
  const bodyFont =
    "shantellFont text-white tab:text-black border-white tab:border-gray-800 text-[35px]";

  return (
    <>
      <div className="poemBG poemBG-THUG min-h-[100vh] tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
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
              <source className="" media="(min-width: 565px)" srcSet={SBMBG} />
              <img
                src={SBMBG}
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

export default THUGCard;
