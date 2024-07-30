import React from "react";
import "../App.css";
import ImageSlides from "../components/ImageSlides";
import Intro from "../components/Intro";
import Testing from "../components/Testing";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Intro />
      </div>{" "}
      <div className="">
        <Testing />
      </div>
      <div className="">
        <ImageSlides />
      </div>
      <div className="h-[100vh]">Homepage</div>{" "}
    </>
  );
};

export default Homepage;
