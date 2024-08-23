import React from "react";
import TCOBBG from "../assets/images/poemBgs/TCOBBG.webp";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.webp";
import PoemsModal from "./PoemsModal";

import { useState, useEffect } from "react";

const TCOBCard = () => {
  const title = "The Chaos Of Beauty";
  const verses = [
    `Beauty\nOne word, different meanings\nOne tree, different seedlings\nOne perception, different feelings\nOne word, the same meaning`,

    `Beauty\nAn unusual throng of emotions\nAn unrelenting wind of passions\nA hypothetical gush of infatuations\nA varied myriad of perceptions`,

    `Beauty\nWhat is this I'm talking about?\nIt is more than an art\nAn art from within and without\nAn art that brings apart`,

    `Beauty\nIt brings apart in its perception;\nin our understanding of its definition.\nYou could see it in the constellations\nand I, in simple things like conversations.`,

    `Beauty\nWhat then is true beauty\nand where does it lie?\nIn whose perception do we find it?\nAnd in which beholder's eye?`,

    `Beauty\nThe chaos of beauty is truly\na question with no solution\nbecause for as many eyes can observe it,\nthere are as many conclusions.`,

    `Authors\n[Rerel'Oluwa Tooki, ](Rere)\n[Kevwe Eghagha](Kevwe)`,
  ];

  // State to control the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal and display task details
  const openDetails = () => {
    setIsOpen(true);
  };

  const titleFont =
    "glassFont underline underline-offset-4 decoration-wavy tab:decoration-dotted tracking-wide text-[26px] tab:text-3xl ";
  const bodyFont = "playwriteFont text-[14px] text-black nxl:text-lg";
  const wtrmFont = "text-black tab:text-white/80";
  const hrFont = "sborder-2";
  return (
    <>
      <div className="poemBG poemBG-TCOB min-h-[100vh] tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-white/80 border-double select-none rounded-lg">
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
              <source className="" media="(min-width: 565px)" srcSet={TCOBBG} />
              <img
                src={TCOBBG}
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
            hrFont={hrFont}
          />{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default TCOBCard;
