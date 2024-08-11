import React from "react";
import "../App.css";
import logo from "../assets/images/logo2.png";
import v1LMob from "../assets/icons/bg-pattern-intro-left-mobile.svg";
import v1LDesk from "../assets/icons/bg-pattern-intro-left-desktop.svg";
import v1RMob from "../assets/icons/bg-pattern-intro-right-mobile.svg";
import v1RDesk from "../assets/icons/bg-pattern-intro-right-desktop.svg";
import WritingAnimation from "../animations/WritingAnimation";
import LeftDivAnimation from "../animations/LeftDivAnimation";
import RightDivAnimation from "../animations/RightDivAnimation";
import mp3 from "../assets/images/MyPortrait.png";

const Testing = () => {
  return (
    <>
      <div className="sborder-4 mb-10 h-[100vh] introGrads aboutMeGrad exoFont select-none w3-animate-opacityIntro pt-10 tab:pt-[80px] border-black flex flex-col justify-between items-centers px-[3vw] overflow-x-hidden">
        <div
          className="w3-containers pb-[48px] border-black sborder-4"
          id="projects"
        >
          <h3
            className="text-2xl gradient-border-bottom exoFont"
            data-aos="zoom-out"
            data-aos-duration="700"
          >
            <WritingAnimation text="About Me!" />
          </h3>
        </div>
        <div className="border-2 border-[#7f7fd5] h-full sgradient-border px-[3vw] flex flex-col items-center justify-center">
          <h2 className="text-[16vw] md:text-[60px] xmd:text-[70px] tab:text-[80px] nxl:text-[100px] exoFont text-center font-semibold md:leading-tight">
            <a
              href="https://www.linkedin.com/in/rerel-oluwa-tooki-b53396253/"
              className="underline underline-offset-2 hover:underline-offset-4 hover:scale-[1.02] meriendaFont bg-clip-text text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] hover:bg-gradient-to-l font-bold"
              target="_blank"
            >
              Rerel'Oluwa Tooki
            </a>
          </h2>
          <div className="w-[45vw] h-[45vw] md:w-[160px] md:h-[160px] tab:w-[180px] tab:h-[180px]  nxl:w-[220px] nxl:h-[220px] w3-animate-zoom w3-animate-opacityIntrog z-10">
            <picture className="">
              <source className="" media="(min-width: 565px)" srcSet={mp3} />
              <img
                src={mp3}
                alt="Rere Writes Logo"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Testing;
