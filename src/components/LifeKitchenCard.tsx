import React from "react";
import LKBG from "../assets/images/poemBgs/LKBG.jpg";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";

const LifeKitchenCard = () => {
  const title = "Life's Kitchen";
  const verses = [
    `Life often mirrors the humble egg,\nCracked open, it faces the pan's request\nIt could be fried or scrambled,\nOr even poached, but never again boiled`,
    `Life unfolds like grains of rice,\nAn assortment of flavors, herbs or spice,\nSometimes plain, or vividly dyed,\nSometimes jollof, sometimes fried`,
    `Life resembles the sturdy yam,\nIts taste varied, bittersweet as ham,\nCould be soft, hard or just there\nCould be rough and patchy, or plain and fair`,
    `Life is like the golden honey,\nEver wondered how it is gotten?\nWhy it never gets spoiled or rotten?\nI bet you don't know, isn't it funny?`,
    `Life is like the versatile garri grain,\nWith water, it swells without restrain,\nIt leaves its humble state and starts to rise\nTransforms and hardens, a path to its demise`,
    `In essence, life's a beautiful feast,\nA farmer's market, to say the least,\nThrough all the twists, have no regret,\nFor in the end, we're all sunset.`,
  ];

  const titleFont =
    "shantellFont underline underline-offset-4 decoration-wavy tab:decoration-dotted";
  const bodyFont = "shantellFont";
  return (
    <>
      <div className="poemBG poemBG-SBM tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
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
        <div className="tab:bg-white tab:rounded-tl-[20px] tab:rounded-bl-[20px] w3-animate-left  ">
          <div className="quoteBGs quoteBGP1 h-[0vh] tab:h-[85vh] flex flex-col  text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] tab:rounded-[20px] rounded-b-[40px] w3-animate-opacitys drop-shadow-2xl tab:drop-shadow-none w-auto tab:w-[45vw] lg:w-[40vw] tab:border-4 border-black border-double overflow-hidden">
            <picture className="hidden tab:block  w-full h-full">
              <source className="" media="(min-width: 565px)" srcSet={LKBG} />
              <img
                src={LKBG}
                alt="Stand By Me Background"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="sborder-4 h-auto tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[15px]  tab:rounded-br-[15px] xl:rounded-tr-[20px]  xl:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-right tab:overflow-y-scroll tab:scroll tab:scrollSBM">
          <PoemCard
            title={title}
            verses={verses}
            titleFont={titleFont}
            bodyFont={bodyFont}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default LifeKitchenCard;
