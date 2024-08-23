import React from "react";
import "../App.css";
import WritingAnimation from "../animations/WritingAnimation";
import mp3 from "../assets/images/MyPortrait.webp";

const AboutMe = () => {
  return (
    <>
      <div className="sborder-4 py-10 aboutMeGrad exoFont select-none w3-animate-opacityIntro border-black flex flex-col justify-between items-centers px-[3vw] overflow-x-hidden skewedLR dark:text-white">
        {/* <div
          className="w3-containers pb-[48px] border-black sborder-4 "
          id="projects"
        >
          <h3
            className="stext-[25px] gradient-border-bottom exoFont pb-[4px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            About Me!
          </h3>
        </div> */}
        <div
          className="w3-containers pb-[48px] border-black sborder-4 "
          id="projects"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h3 className="text-3xl tab:text-4xl gradient-border-bottom playfairFont pb-[4px] dark:text-white  ">
            About Me
          </h3>
        </div>
        <div className="xls:border-4 border-[#7f7fd5] border-double rounded-md pb-8 tasb:pb-0 tab:min-h-[100vh] sgradient-border px-[3vw] flex flex-col items-center justify-evenly ">
          <h1 aria-label="TOOKI REREL'OLUWA" role="heading">
            <span className="flex sborder-2 border-black max-w-[500px] flex-col overflow-hidden  text-center text-[96px] font-extrabold  leading-[0.8em] text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:max-w-[1100px] sxl:w-[1100px] md:text-[115.5px] xmd:text-[135.5px] tab:text-[155.5px] lg:text-[215px]  ">
              <div className="border-2s border-black flex items-center justify-center overflow-hidden">
                <span
                  className="inline-block overflow-hidden pt-1 -mr-7 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 opacity: 1; transform: none; stext-[32vw] pb-2 md:pb-4 tab:pb-5 nxl:pb-10 xl:pb-5 bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] hover:bg-gradient-to-l redressedFont"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  TOOKI&nbsp;
                </span>
              </div>
              <div
                className="flex items-center justify-center overflow-hidden border-black sborder-2"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <span className="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-4 tab:-mr-7 lg:-mr-8 xl:-mr-10 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 opacity: 1; transform: none; text-[13.5vw] md:text-[14vw] sab:text-[13.5vw] lg:text-[14vw] xl:text-[145px] scale-y-[2] xl:scale-y-[1.55] pb-2 tab:pb-5 tracking-wide xl:tracking-normal text-center bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] hover:bg-gradient-to-l">
                  REREL'OLUWA&nbsp;
                </span>
              </div>
            </span>
          </h1>
          <div className="sborder-2 border-black flex flex-col items-center justify-center">
            <div
              className="relative bottom-[30px] tab:bottom-[70px] nxl:bottom-[70px] w-[65vw] h-[65vw] md:w-[240px] md:h-[240px] tab:w-[300px] tab:h-[300px]  nxl:w-[410px] nxl:h-[410px] z-10 rounded-lg drop-shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <picture className="">
                <source className="" media="(min-width: 565px)" srcSet={mp3} />
                <img
                  src={mp3}
                  alt="Rere Writes Logo"
                  className="w-full h-full object-cover rounded-[40px] "
                />
              </picture>
            </div>
          </div>
          <div
            className="gradient-border border-black flex flex-col items-center justify-center p-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <p className="text-center">
              CompTIA Certified Cybersecurity Engineer || Frontend Engineer (Web
              Development) || Certified Ethical Hacker || Certified Microsoft
              Office Specialist || Data Science || Musician (Saxophone, Piano)
              || Poet || React.js || TypeScript || JAVA || Python || C, C#, C++{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default AboutMe;
