import React from "react";
import "../App.css";
import ImageSlides from "../components/ImageSlides";
import Intro from "../components/Intro";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Intro />
      </div>{" "}
      <div className="drop-shadow-2xl">
        <ImageSlides />
      </div>
      <div className="h-[100vh]">Homepage</div>{" "}
    </>
  );
};

export default Homepage;
