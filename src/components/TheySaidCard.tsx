import React from "react";
import TSBG from "../assets/images/poemBgs/TSBG.png";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";
import PoemsModal from "./PoemsModal";
import { useState, useEffect } from "react";

const TheySaidCard = () => {
  const title = "...they said";
  const verses = [
    `we fight back pain\nwe hold back tears\nall to what gain?\nno one ever cares`,
    `"face your fears" they said\n"be strong, you're a man"\nall these voices in my head\nmaybe, just maybe I'm only human?`,
  ];

  const titleFont =
    "shantellFont underline underline-offset-4 decoration-wavy tab:decoration-dotted";
  const bodyFont = "shantellFont";

  // State to control the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal and display task details
  const openDetails = () => {
    setIsOpen(true);
  };

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
              <source className="" media="(min-width: 565px)" srcSet={TSBG} />
              <img
                src={TSBG}
                alt="Stand By Me Background"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="h-auto tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[15px]  tab:rounded-br-[15px] xl:rounded-tr-[20px]  xl:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-right tab:overflow-y-scroll tab:scroll tab:scrollSBM sborder-4">
          <PoemCard
            title={title}
            verses={verses}
            titleFont={titleFont}
            bodyFont={bodyFont}
          />
        </div>
        <div className="flex flex-row justify-end z-20 tab:fixed tab:block bottom-2 right-2 sborder-2 border-black mb-4 tab:mb-0">
          <button
            className="py-1 px-3 rounded-md sborder-2  underline underline-offset-2 hover:underline-offset-4 hover:scale-[1.02]"
            onClick={() => openDetails()}
          >
            Want To Read More?
          </button>
        </div>
        {/* PoemsModal */}
        <PoemsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>{" "}
    </>
  );
};

export default TheySaidCard;
