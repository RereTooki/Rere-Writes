import React from "react";
import "../App.css";
import navIcon from "../assets/icons/navIcon2.svg";
import logo from "../assets/images/logo2.webp";
import logoDarkMode from "../assets/images/image.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import WritingAnimation from "../animations/WritingAnimation";
import DarkModeToggle from "./DarkModeToggle";

// Define types for props
type NavigationBarProps = {
  introRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  contactMeRef: React.RefObject<HTMLDivElement>;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  introRef,
  projectsRef,
  aboutMeRef,
  contactMeRef,
}) => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setNavIsVisible(false); // Close the menu after clicking
    }
  };

  return (
    <>
      <div className="h-[25vw] md:h-[70px] w-[100vw] fixed flex flex-row justify-between items-center bg-white/10 backdrop-blur-[4px] z-20 shadow-md md:shadow-lg px-[4vw] nxl:pl-[58px] nxl:pr-[34px] w3-animate-opacityIntro z-50 cursor-pointer">
        <div className="flex tab:justify-between gap-[20px] w-[62vw] md:w-[52vw] lg:w-auto">
          <div className="w-[49px] h-[49px] sborder-2 borsder-2 border-clrtransparentgreen rounded-md flex flex-col items-center justify-center">
            <NavLink to="/" className="">
              <picture className="">
                <source
                  className="dark:hidden"
                  media="(min-width: 565px)"
                  srcSet={logo}
                />

                <img
                  src={logo}
                  alt="Rere Writes Logo"
                  className="w-fit h-fit object-cover psl-[1px] pst-[1.5px] dark:hidden"
                />
              </picture>
              <picture className="">
                <source
                  className="hidden dark:block"
                  media="(min-width: 565px)"
                  srcSet={logoDarkMode}
                />

                <img
                  src={logoDarkMode}
                  alt="Rere Writes Logo"
                  className="w-fit h-fit object-cover psl-[1px] pst-[1.5px] hidden dark:block"
                />
              </picture>
            </NavLink>
          </div>
          <h1 className="exoFont self-center underline underline-offset-4 decoration-clrtransparentgreen decoration-double font-bold text-xl whitespace-nowraps bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] relative underlinegradients cursor-text tracking-wider">
            <WritingAnimation text="RERE WRITES" />
          </h1>
        </div>

        <div
          className="w-fit lack lg:hidden"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <button onClick={() => setNavIsVisible(!navIsVisible)}>
            {!navIsVisible && (
              <img
                src={navIcon}
                alt="A navigation icon"
                className="w3-animate-zoom w-full h-full object-cover h-[8vw] md:h-[7vw] max-h-[42px]"
              />
            )}
            {navIsVisible && (
              <IoClose
                color="#000033"
                className="w3-animate-zoom w-full h-full object-cover h-[8vw] md:h-[7vw] max-h-[42px]"
              />
            )}
          </button>
          {navIsVisible && (
            <div className="w3-animate-rightNav bg-white dark:bg-[#888] lg:hidden absolute top-[23vw] md:top-[80px] right-[4vw] nxl:right-[34px] w-[60vw] md:w-[50vw] max-w-[250px] px-[5%] shadow-[0_0_20px_2px_rgba(0,0,0,0.5)] text-center py-[20px] rounded-[10px] font-overpass flex flex-col gap-[5px]">
              <div
                className="w3-animate-rightNav dark:text-white hover:scale-[1.05] border-b-2 rounded-sm border-black/70 dark:border-white"
                onClick={() => scrollToSection(introRef)}
              >
                Home
              </div>
              <div
                className="w3-animate-rightNav dark:text-white hover:scale-[1.05] border-b-2 rounded-sm border-black/70 dark:border-white"
                onClick={() => scrollToSection(projectsRef)}
              >
                Poems
              </div>
              <div
                className="w3-animate-rightNav dark:text-white hover:scale-[1.05] border-b-2 rounded-sm border-black/70 dark:border-white"
                onClick={() => scrollToSection(aboutMeRef)}
              >
                About Me
              </div>
              <div
                className="w3-animate-rightNav dark:text-white hover:scale-[1.05] border-b-2 rounded-sm border-black/70 dark:border-white"
                onClick={() => scrollToSection(contactMeRef)}
              >
                Contact Me
              </div>
              <div className="w3-animate-rightNav w-fit self-center hover:scale-[1.05]">
                <DarkModeToggle />
                {/* Your other components */}
              </div>
            </div>
          )}
        </div>
        <div className="vsm:hidden lg:flex flex-row justify-between items-center  w-[50vw] max-w-[384px]">
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1] dark:text-white">
            <span onClick={() => scrollToSection(introRef)}>
              <WritingAnimation text="Home" />
            </span>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1] dark:text-white">
            <span onClick={() => scrollToSection(projectsRef)}>
              <WritingAnimation text="Poems" />
            </span>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1] dark:text-white">
            <span onClick={() => scrollToSection(aboutMeRef)}>
              <WritingAnimation text="About Me" />
            </span>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1] dark:text-white">
            <span onClick={() => scrollToSection(contactMeRef)}>
              <WritingAnimation text="Contact Me" />
            </span>
          </div>
          <div className="hidden tab:block">
            <DarkModeToggle />
            {/* Your other components */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
