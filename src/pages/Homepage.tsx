import React from "react";
import "../App.css";
import ImageSlides from "../components/ImageSlides";
import Intro from "../components/Intro";
import Testing from "../components/Testing";
import NavigationBar from "../components/NavigationBar";
import Projects from "../components/Projects";

const Homepage = () => {
  return (
    <>
      <div className="border-4s">
        <NavigationBar />
      </div>{" "}
      <div className="">
        <Intro />
      </div>{" "}
      <div className="scroll scrollModal">
        <Projects />
      </div>{" "}
      <div className="">
        <ImageSlides />
      </div>
      <div className="">
        <Testing />
      </div>
      <div className="h-[90vh]">Homepage</div>{" "}
      <div className="h-[90vh]">2Homepage</div>{" "}
    </>
  );
};

export default Homepage;
