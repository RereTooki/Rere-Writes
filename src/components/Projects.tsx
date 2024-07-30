import React from "react";
import img from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";

const Projects = () => {
  return (
    <>
      <div className="mx-[3vw]">
        <div className="w3-container pb-[48px] " id="projects">
          <h3 className="w3-border-bottomS w3-border-light-greyS border-b-2 border-clrtransparentgreen rounded-sm border-dasheds text-2xl">
            Projects
          </h3>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img src={img} alt="House" className="width:100%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img src={img} alt="House" className="width:100%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img src={img} alt="House" className="width:100%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img src={img} alt="House" className="width:100%" />
            </div>
          </div>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img src={img2} alt="House" className="width:99%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img src={img2} alt="House" className="width:99%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img src={img2} alt="House" className="width:99%" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img src={img2} alt="House" className="width:99%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
