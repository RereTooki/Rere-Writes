import React from "react";
import WFBG from "../assets/images/poemBgs/WFBG.png";
import PoemCard from "./PoemCard";
import heart from "../assets/images/heart.png";
import v2RMob from "../assets/icons/bg-pattern-how-we-work-mobile.svg";
import v2Desk from "../assets/icons/bg-pattern-how-we-work-desktop.svg";

const WeForgotCard = () => {
  const title = "“we forgot”";
  const verses = [
    `We forgot,\nDidn't give it a thought\nA tear in my eye as I jot\nDown all the reasons I might have been forgot `,
    `Why treat me like I'm not here?\nWhy act like you don't care?\nIt was an honest mistake, you swear\nBut you'd do it again, yeah? `,
    `We're four, but you see three\nLooks like you forgot somebody\nLet me guess, me?\nAnother mistake again, really? `,
    `Been feeling like this for some months\nBeginning to think it’s my fault\nSilently pray to the gods\nThat one day I don’t fade totally from their thoughts\nOr be left by the side to rot `,
    `To you it might seem like I’m thinking too much\nBut have you ever been left out during lunch?\nTelling each other "I love you a bunch"\nBut when it gets to your turn all you get is "what’s up"\nNow when I’m told "we forgot"\nI take a large step back with my thoughts `,
    `We're three, but you see two\nAt this point, it's nothing new\nIt's a genuine mistake, you argue\nFor how long will this continue? `,
    `We're two but you see one\nYou never really care about anyone\nYou only always value your opinion\nOur friendship, nothing more than an illusion `,
  ];
  const titleFont =
    "meriendaFont underline underline-offset-4 decoration-wavy tab:decoration-dotted";
  const bodyFont = "exoFont text-whitess";
  return (
    <>
      <div className="poemBG poemBG-WF tab:h-[100vh] flex flex-col tab:flex-row  tab:items-center tab:justify-center border-4 xl:border-8 border-black border-double select-none">
        <div className="z-0 tab:z-0 fixed right-[1px] xl:right-[8px] sborder-2 border-black w-fit translsate-y-[70vh] tab:translate-y-0 tab:top-10 lg:top-[3.1rem] tab:scale-[1.5] lg:scale-[2.5] origin-right w3-animate-rightVec">
          <picture className="" data-aos="zoom-in-left" data-aos-duration="700">
            <source className="" media="(min-width: 565px)" srcSet={v2Desk} />
            <img
              src={v2RMob}
              alt="A heart svg"
              className="h-[272px] tab:h-[164px]"
            />
          </picture>
        </div>
        <div className="tab:bg-white tab:rounded-tl-[20px] tab:rounded-bl-[20px] w3-animate-left  ">
          <div className="quoteBGs quoteBGP1 h-[0vh] tab:h-[85vh] flex flex-col  text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] tab:rounded-[20px] rounded-b-[40px] w3-animate-opacitys drop-shadow-2xl tab:drop-shadow-none w-auto tab:w-[45vw] lg:w-[40vw] tab:border-4 border-black border-double overflow-hidden">
            <picture className="hidden tab:block  w-full h-full">
              <source className="" media="(min-width: 565px)" srcSet={WFBG} />
              <img
                src={WFBG}
                alt="We Forgot Background"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="sborder-4 h-auto tab:h-[85vh] tab:w-[45vw] lg:w-[40vw] tab:bg-white  tab:rounded-tr-[15px]  tab:rounded-br-[15px] xl:rounded-tr-[20px]  xl:rounded-br-[20px] px-[10vw] tab:px-[10px] w3-animate-right tab:overflow-y-scroll tab:scroll tab:scrollWF">
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

export default WeForgotCard;
