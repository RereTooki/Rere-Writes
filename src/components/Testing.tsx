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
  // Calculate the total delay for the left div based on the WritingAnimationDelay
  const leftDivDelay = 2; // Total delay for 'stories untold' to finish

  return (
    <>
      <div className="border-4s mb-10 h-[100vh] introGrad exoFont select-none w3-animate-opacityIntro pt-[15vh] border-4 border-black p-2 flex justify-evenly items-center">
        {/* Wrap the left div with LeftDivAnimation */}
        <LeftDivAnimation>
          <div className="border-2 border-black h-[20vh] p-10">
            rere div 1
            <WritingAnimation text="Hello, world!" />
          </div>{" "}
        </LeftDivAnimation>
        {/* Wrap the right div with RightDivAnimation */}
        {/* We'll initially hide the right div using opacity and then show it after the left div has moved */}
        <RightDivAnimation>
          <div className="border-2 border-black h-[20vh] p-10">
            rere div 2
            <WritingAnimation text="Wagwan!" />
          </div>
        </RightDivAnimation>
      </div>
    </>
  );
};

export default Testing;
