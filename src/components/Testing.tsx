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

const Testing = () => {
  return (
    <>
      <div className="border-4 mb-10 h-[100vh] introGrads aboutMeGrad exoFont select-none w3-animate-opacityIntro pt-10 border-black flex flex-col justify-between items-centers px-[3vw]">
        <div
          className="w3-container pb-[48px] border-black border-4"
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
        <div className="border-2 border-black h-full sgradient-border px-[3vw]">
          rere div 1
          <WritingAnimation text="Hello, world!" />
        </div>{" "}
      </div>
    </>
  );
};

export default Testing;
