import React, { useRef } from "react";
import "../App.css";
import undTop from "../assets/icons/cross-out-underline.svg";

const Testing = () => {
  return (
    <>
      <div
        className="contactMeGrads sh-[100vh] sborder-2 border-black spy-10 exoFont select-none w3-animate-opacityIntro tab:px-[3vw] overflow-x-hiddens relative top-[50px] border-2s"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sborder-4">
          <div className="bg-gradient-to-t tab:bg-gradient-to-l from-generalClr to-[#626F89] flex flex-col tab:flex-row justify-center tab:justify-between items-center p-10 rounded-lg w-full gap-6 xl:gap-0 sborder-4 border-black shadow-2xl text-white ">
            <div className="flex flex-col gap-8 sborder-2">
              <h4
                className="text-white font-semibold text-4xl xl:text-6xl exoFont sunderline underline-offset-4 sdecoration-wavy decoration-[2spx] sborder-4 tesxt-center xmd:whitespace-nowrap"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                I build{" "}
                <span className="italic underline underline-offset-[8px] decoration-double decoration-wavy tracking-wide">
                  websites !
                </span>
              </h4>
              <div className="text-xl xl:text-2xl">
                Got a project, an idea, a question, or interested in
                collaborating on something?
              </div>
            </div>
            <div
              className="w-full max-w-[140px] h-[s400px] shadow-xl rounded-full px-[14%] py-[4%] tab:py-[10px] tab:px-0 bg-white text-black whitespace-nowrap text-center flex items-center justify-center hover:scale-[1.03] tab:text-lg"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              Reach Out!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testing;
