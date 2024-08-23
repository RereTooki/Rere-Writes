import React from "react";
import BMBG from "../assets/images/poemBgs/BMBG.webp";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.webp";

import { useState, useEffect } from "react";

const BetterMeCard = () => {
  const title = "Better Me, Better Us, Better Working World";
  const verses = [
    `Man, know thyself\nA Greek philosopher once said\nFor it's only when you know yourself\nYour life can then move ahead`,
    `What are your values?\nWhat are you known to stand for?\nYour ideals you cannot lose\nYour principles you can't ignore`,
    `What is your goal, your purpose?\nStarted thinking about them yet?\nBy now, you should know those\nAnd on those, reflect`,
    `What is your ambition?\nWhat do you want to achieve?\nYou have to live life with a vision\nA vision of what you want to contribute to society`,
    `You can't give what you don't have\nAnd what you give, really matters\nFor example, if you don't respect yourself,\nYou can't respect others`,
    `Whatever choices you make,\nWherever you find yourself\nWhether you give or take\nShapes life itself`,
    `Life often involves continuous learning\nLearning yesterday, today and tomorrow\nLearning that might involve unlearning\nFor learning is the only way we grow`,
    `Unlearn that which you know\nOpen up your mind to a new reality\nIt's a seed you'll have to sow\nIf you want to build capacity`,
    `Risk is at the very heart of success\nIt is giving uncertainty a chance\nIt is making decisions that could be precarious\nThough dangerous, your life, it should enhance`,
  ];

  const titleFont =
    "sacramentoFont underline underline-offset-4 decoration-wavy tab:decoration-dotted leading-[1.6] tab:leading-[1.4] tracking-relaxed tab:tracking-widez xl:tracking-widest";
  const bodyFont = "playfairFont ";
  const wtrmFont = "text-black";

  return (
    <>
      <div className="poemBG poemBG-BM min-h-[100vh] tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
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
              <source className="" media="(min-width: 565px)" srcSet={BMBG} />
              <img
                src={BMBG}
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
            wtrmFont={wtrmFont}
          />{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default BetterMeCard;
