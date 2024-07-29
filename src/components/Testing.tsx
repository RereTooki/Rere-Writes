import React from "react";
import "../App.css";

const Testing = () => {
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
      <div className="quoteBG h-[40vh] nsm:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nsm:text-[18px] nxl:text-[22px] px-[10vw] mySlides pt-[12%] w3-animate-opacity">
        <p>“Quote 1” - Speaker 1</p>
      </div>
      <div className="quoteBG2 h-[40vh] nsm:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nsm:text-[18px] nxl:text-[22px] px-[10vw] mySlides pt-[12%] w3-animate-opacity">
        <p>“Quote 2” - Speaker 2</p>
      </div>
      <div className="quoteBG3 h-[40vh] nsm:h-[50vh] flex flex-col items-center justify-center text-center text-white text-[14px] md:text-[16px] nsm:text-[18px] nxl:text-[22px] px-[10vw] mySlides pt-[12%] w3-animate-opacity">
        <p>“Quote 2” - Speaker 3</p>
      </div>
    </>
  );
};

export default Testing;
