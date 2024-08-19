import React from "react";
import "../App.css";
import logo from "../assets/images/logo2.png";
import v1LMob from "../assets/icons/bg-pattern-intro-left-mobile.svg";
import v1LDesk from "../assets/icons/bg-pattern-intro-left-desktop.svg";
import v1RMob from "../assets/icons/bg-pattern-intro-right-mobile.svg";
import v1RDesk from "../assets/icons/bg-pattern-intro-right-desktop.svg";
import WritingAnimation from "../animations/WritingAnimation";
import WritingAnimationDelay from "../animations/WritingAnimationDelay";
import LeftDivAnimation from "../animations/LeftDivAnimation";
import RightDivAnimation from "../animations/RightDivAnimation";
import LogoAnimation from "../animations/LogoAnimation";

const Intro = () => {
  // Calculate the total delay for the left div based on the WritingAnimationDelay
  const leftDivDelay = 12; // Total delay for 'stories untold' to finish
  return (
    <>
      <div className="border-8 border-black dark:border-white mb-10 h-[100vh] introGrad exoFont select-none w3-animate-opacityIntro">
        {" "}
        <div className="absolute borders-2 border-black w-fit translate-y-[25vw] md:translate-y-[70px] tab:translate-y-[78vh] tab:scale-[1.5] w3-animate-leftVec">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={v1LDesk} />
            <img
              src={v1LMob}
              alt=""
              className="nsm:translsate-x-[44%] md:trasnslate-x-[40%] nsm:transslate-y-[60%] md:translate-y-0 nsm:scale-[1s.7] w-[1s00%] tab:h-[50vh]"
            />
          </picture>
        </div>
        <div className="absolute bordesr-2 border-black w-fit translate-y-[78vh] tab:translate-y-[100px]  nxl:translate-y-[140px] tab:scale-[1.3] nxl:scale-[1.5] right-0 w3-animate-rightVec origin-right z-0">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={v1RDesk} />
            <img
              src={v1RMob}
              alt=""
              className="nsm:translsate-x-[44%] md:trasnslate-x-[40%] nsm:transslate-y-[60%] md:translate-y-0 nsm:scale-[1s.7] w-[1s00%] tab:h-[50vh]"
            />
          </picture>
        </div>
        <div className="flex flex-col tab:flex-row items-center tab:justify-around justify-center h-full sborder-4 border-black">
          <div className="flex flex-col items-center justify-center gap-[10px] sborder-4 border-[#7f7fd5] z-10 tab:hidden">
            <div className="w-[45vw] h-[45vw] md:w-[160px] md:h-[160px] tab:w-[180px] tab:h-[180px]  nxl:w-[220px] nxl:h-[220px] w3-animate-zoom w3-animate-opacityIntrog z-10">
              <picture className="">
                <source className="" media="(min-width: 565px)" srcSet={logo} />
                <img
                  src={logo}
                  alt="Rere Writes Logo"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="text-3xl tab:text-4xl tracking-widest nxl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-[#7F7FD5] to-[#31B7C2] w3-animate-zooms w3-animate-opacityIntros sborder-4 border-black cursor-pointer">
              <WritingAnimation text="RERE WRITES" />
              <div className="text-lg tab:text-xl tracking-widest nxl:text-2xl text-center mt-[8px]">
                <WritingAnimationDelay text="stories untold ✍" />
              </div>
            </div>
          </div>
          {/* Wrap the left div with LeftDivAnimation */}
          <LeftDivAnimation>
            <div className="hidden tab:flex flex-col items-center justify-center gap-[10px] sborder-4 border-[#7f7fd5] z-10">
              <div className="w-[45vw] h-[45vw] md:w-[160px] md:h-[160px] tab:w-[180px] tab:h-[180px]  nxl:w-[220px] nxl:h-[220px] w3-animate-zoom w3-animate-opacityIntrog z-10">
                <picture className="">
                  <source
                    className=""
                    media="(min-width: 565px)"
                    srcSet={logo}
                  />
                  <img
                    src={logo}
                    alt="Rere Writes Logo"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="text-3xl tab:text-4xl tracking-widest nxl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-[#7F7FD5] to-[#31B7C2] w3-animate-zooms w3-animate-opacityIntros sborder-4 border-black cursor-pointer">
                <WritingAnimation text="RERE WRITES" />
                <div className="text-lg tab:text-xl tracking-widest nxl:text-2xl text-center mt-[8px]">
                  <WritingAnimationDelay text="stories untold ✍" />
                </div>
              </div>
            </div>
          </LeftDivAnimation>
          {/* Wrap the right div with RightDivAnimation */}
          {/* We'll initially hide the right div using opacity and then show it after the left div has moved */}
          <RightDivAnimation>
            {" "}
            {/* Add an extra second for a smooth transition */}
            <div className="hidden tab:block sborder-4 border-black z-10 masx-w-[30vw] tab:h-[270px]s  nxl:h-[321px]s tab:w-[270px]  nxl:w-[321px] tab:text-lg tracking-wide nxl:text-xl whitespace-nowrap ">
              {" "}
              <div className="">
                The words of{" "}
                <a
                  href="https://www.linkedin.com/in/rerel-oluwa-tooki-b53396253/"
                  className="underline underline-offset-2 hover:underline-offset-4 hover:scale-[1.02] meriendaFont bg-clip-text text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] hover:bg-gradient-to-l font-bold"
                  target="_blank"
                >
                  Rerel'Oluwa Tooki
                </a>
              </div>
              <div>Cracked open, it faces the </div>
              <div>It could be fried or</div>
              <div>Or even poached, but never</div>
            </div>
          </RightDivAnimation>
        </div>
      </div>
    </>
  );
};

export default Intro;
