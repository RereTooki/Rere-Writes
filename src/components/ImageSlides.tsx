import React from "react";
import "../App.css";

const ImageSlides = () => {
  let myIndex: number = 0;

  function carousel(): void {
    let i: number;
    const x: HTMLCollectionOf<Element> =
      document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }

    (x[myIndex - 1] as HTMLElement).style.display = "block";
    setTimeout(carousel, 10000);
  }

  // Ensure the function runs after the DOM is fully loaded
  window.onload = () => {
    carousel();
  };
  return (
    <>
      <div className="quoteBG h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] mySlides rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
        <p className="exoFont relative top-[45%]">“Quote 1” - Speaker 1</p>
      </div>
      <div className="quoteBG2 h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] mySlides rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
        <p className="exoFont relative top-[45%]">“Quote 2” - Speaker 2</p>
      </div>
      <div className="quoteBG3 h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] mySlides rounded-tr-[20px] rounded-bl-[20px] w3-animate-opacitys">
        <p className="exoFont relative top-[45%]">“Quote 2” - Speaker 3</p>
      </div>
    </>
  );
};

export default ImageSlides;
