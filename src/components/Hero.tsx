import React, { useRef } from "react";
import "../App.css";

// Define types for props
type NavigationBarProps = {
  contactMeRef: React.RefObject<HTMLDivElement>;
};

const Hero: React.FC<NavigationBarProps> = ({ contactMeRef }) => {
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="contactMeGrads sh-[100vh] sborder-2 border-black spy-10 exoFont select-none w3-animate-opacityIntro tab:px-[3vw] overflow-x-hiddens relative top-[50px] border-2s dark:static dark:px-0  "
        data-aoss="fade-up"
        data-aos-duration="2000"
      >
        <div className="sborder-4">
          <div className="bg-generalClrs flex flex-col tab:flex-row justify-center tab:justify-between items-center p-10 rounded-lg w-full gap-6 xl:gap-0 tab:border-4 border-very-dark-black-blues text-white hero dark:rounded-none dark:border-0">
            <div className="flex flex-col gap-8 sborder-2">
              <h4
                className="text-white font-semibold text-4xl xl:text-6xl exoFont sunderline underline-offset-4 sdecoration-wavy decoration-[2spx] sborder-4 tesxt-center xmd:whitespace-nowrap text-neutral-100"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                I build{" "}
                <span className="italic underline underline-offset-[8px] decoration-double decoration-wavy tracking-wide sacramentoFont text-6xl whitespace-nowrap ">
                  websites !
                </span>
              </h4>
              <div className="text-xl xl:text-2xl">
                Got a project, an idea, a question, or interested in
                collaborating on something?
              </div>
            </div>
            <div
              className="w-full max-w-[140px] h-[s400px] shadow-xl rounded-full px-[14%] py-[4%] tab:py-[10px] tab:px-0 bg-white text-black whitespace-nowrap text-center flex items-center justify-center hover:scale-[1.03] tab:text-lg cursor-pointer hover:scale-[1.03] hover:bg-black hover:text-white"
              onClick={() => scrollToSection(contactMeRef)}
              data-aoss="zoom-in"
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

export default Hero;
