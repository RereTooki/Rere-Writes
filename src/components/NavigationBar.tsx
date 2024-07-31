import React from "react";
import "../App.css";
import navIcon from "../assets/icons/navIcon2.svg";
import logo from "../assets/images/logoblack.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  return (
    <>
      <div className="h-[25vw] md:h-[70px] w-[100vw] fixed flex flex-row justify-between items-center bg-white z-20 shadow-md md:shadow-lg px-[4vw] nxl:pl-[58px] nxl:pr-[34px]">
        <div className="flex tab:justify-between gap-[20px] w-[62vw] md:w-[52vw] lg:w-auto">
          <div className="w-[39px] h-[39px] sborder-2 border-2 border-clrtransparentgreen rounded-md">
            <NavLink to="/" className="">
              <picture className="">
                <source className="" media="(min-width: 565px)" srcSet={logo} />
                <img
                  src={logo}
                  alt="A dashboard icon"
                  className="w-fit h-fit object-cover px-[4px] pt-[2.5px]"
                />
              </picture>
            </NavLink>
          </div>
          <h1 className="exoFont self-center underline underline-offset-4 decoration-clrtransparentgreen decoration-double font-bold text-xl whitespace-nowraps">
            RERE WRITES
          </h1>
        </div>

        <div
          className="w-fit  lack lg:hidden"
          data-aoss="fade-left"
          data-aoss-duration="900"
        >
          <button
            onClick={() =>
              !navIsVisible ? setNavIsVisible(true) : setNavIsVisible(false)
            }
          >
            {" "}
            {!navIsVisible && (
              <img /* For Mobile screens*/
                src={navIcon}
                alt="A law image"
                className="w-full h-full object-cover h-[12vw] max-h-[39px]"
              />
            )}
            {navIsVisible && (
              <IoClose
                color="#000033"
                className="w-full h-full object-cover h-[12vw] max-h-[39px]"
              />
            )}
          </button>
          {navIsVisible && (
            <div className="lg:hidden absolute top-[23vw] md:top-[80px] right-[4vw] nxl:right-[34px] w-[60vw] px-[8%] shadow-[0_0_20px_2px_rgba(0,0,0,0.5)] text-center py-[20px] rounded-[10px] bg-whites font-overpass flex flex-col gap-[5px]">
              <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.05]">
                <Link to="/">Home</Link>
              </div>
              <hr />
              <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.05]">
                <Link to="/about">About Me</Link>
              </div>
              <hr />
              <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.05]">
                <Link to="/services">Poems</Link>
              </div>
              <hr />
              <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.05]">
                <Link to="/contactUs">Contact Us</Link>
              </div>
            </div>
          )}{" "}
        </div>

        <div className="vsm:hidden lg:flex flex-row justify-between  w-[50vw] max-w-[384px]">
          {" "}
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1]">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1]">
            <Link to="/about">About Me</Link>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1]">
            <Link to="/Poems">Poems</Link>
          </div>
          <div className="hover:underline underline-offset-4 decoration-clrtransparentgreen hover:scale-[1.1]">
            <Link to="/contactUs">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
