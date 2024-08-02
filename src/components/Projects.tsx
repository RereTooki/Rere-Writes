import React from "react";
import ProjectCard from "./ProjectCard";
import { BrowserRouter as Router, Route } from "react-router-dom";

import img from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import imgA from "../assets/images/A.jpg";
import imgB from "../assets/images/B.jpg";
import imgC from "../assets/images/C.jpg";
import imgD from "../assets/images/D.jpg";
import imgE from "../assets/images/E.jpg";
import imgF from "../assets/images/F.jpg";
import imgG from "../assets/images/G.jpg";
import PoemImageSlides from "./PoemImageSlides";

const projects = [
  {
    title: "we forgot",
    imgSrc: img,
    imgAlt: "we forgot",
    route: "/poem-1",
  },
  {
    title: "Life's Kitchen",
    imgSrc: img2,
    imgAlt: "Life's Kitchen",
    route: "/poem-1",
  },
  {
    title: "The Hate U Give",
    imgSrc: imgG,
    imgAlt: "The Hate U Give",
    route: "/poem-1",
  },
  {
    title: "Stand By Me",
    imgSrc: img2,
    imgAlt: "Stand By Me",
    route: "/poem-1",
  },
  {
    title: "we forgot",
    imgSrc: img,
    imgAlt: "we forgot",
    route: "/poem-1",
  },
  {
    title: "The Mandem",
    imgSrc: img2,
    imgAlt: "The Mandem",
    route: "/poem-1",
  },
  {
    title: "New Semester, New Me",
    imgSrc: img3,
    imgAlt: "New Semester New Me",
    route: "/poem-1",
  },
  {
    title: "...they said",
    imgSrc: imgA,
    imgAlt: "...they said",
    route: "/poem-1",
  },
  {
    title: "mizaru, kikazaru, iwazaru",
    imgSrc: imgB,
    imgAlt: "mizaru, kikazaru, iwazaru",
    route: "/poem-1",
  },
  {
    title: "Marriage",
    imgSrc: imgC,
    imgAlt: "Marriage",
    route: "/poem-1",
  },
  {
    title: "Better Me, Better Us, Better Working World",
    imgSrc: imgD,
    imgAlt: "Better Me, Better Us, Better Working World",
    route: "/poem-1",
  },
  {
    title: "Joyeux Noël",
    imgSrc: imgE,
    imgAlt: "Joyeux Noël",
    route: "/poem-1",
  },
];

const Projects = () => {
  return (
    <>
      <div className=" mb-8 exoFont projectsGrad">
        <div className="w3-container pb-[48px] mx-[3vw]  " id="projects">
          <h3 className="text-2xl gradient-border-bottom">Poems</h3>
        </div>
        <div className="w3-row-padding mx-[3vw] ">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mx-0 tabImg:hidden">
          <PoemImageSlides />
        </div>
        <div className="w3-row-padding mx-[3vw] ">
          {projects.slice(4).map((project, index) => (
            <ProjectCard key={index + 4} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
