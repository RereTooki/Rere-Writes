import React from "react";
import "../App.css";
import pic1 from "../assets/images/1.jpg";
import pic2 from "../assets/images/2.jpg";
import pic3 from "../assets/images/3.jpg";
import ImageSlides from "../components/ImageSlides";
import Testing from "../components/Testing";

const Homepage = () => {
  return (
    <>
      <div className="h-[70vh]">Homepage</div>{" "}
      <div className="drop-shadow-2xl">
        <ImageSlides />
      </div>
      <div className="h-[100vh]">Homepage</div>{" "}
    </>
  );
};

export default Homepage;
