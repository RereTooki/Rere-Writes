import React from "react";
import "../App.css";
import logo from "../assets/images/logo2.png";
import v1LMob from "../assets/icons/bg-pattern-intro-left-mobile.svg";
import v1LDesk from "../assets/icons/bg-pattern-intro-left-desktop.svg";
import v1RMob from "../assets/icons/bg-pattern-intro-right-mobile.svg";
import v1RDesk from "../assets/icons/bg-pattern-intro-right-desktop.svg";
import WritingAnimation from "../animations/WritingAnimation";

const Testing = () => {
  return (
    <>
      <div className="border-4s mb-10 h-[100vh] introGrad exoFont select-none w3-animate-opacityIntro">
        <WritingAnimation text="Hello, world!" />
      </div>
    </>
  );
};

export default Testing;
