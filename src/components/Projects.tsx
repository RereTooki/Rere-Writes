import React from "react";
import ProjectCard from "./ProjectCard";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WFBG from "../assets/images/poemBgs/WFBG.png";
import LKBG from "../assets/images/poemBgs/LKBG.jpg";
import SBMBG from "../assets/images/poemBgs/SBMBG.png";
import NSNMBG from "../assets/images/poemBgs/NSNMBG.png";
import TMBG from "../assets/images/poemBgs/TMBG.png";
import TSBG from "../assets/images/poemBgs/TSBG.png";
import SNEBG from "../assets/images/poemBgs/SNEBG.png";
import MRBG from "../assets/images/poemBgs/MRBG.png";
import BMBG from "../assets/images/poemBgs/BMBG.png";
import JNBG from "../assets/images/poemBgs/JNBG.png";
import LIWBG from "../assets/images/poemBgs/LIWBG.png";
import THUGBG from "../assets/images/poemBgs/THUGBG.jpg";
import PoemImageSlides from "./PoemImageSlides";

export const projects = [
  {
    title: "Stand By Me",
    imgSrc: SBMBG,
    imgAlt: "Stand By Me",
    route: "/stand-by-me",
  },
  {
    title: "Life's Kitchen",
    imgSrc: LKBG,
    imgAlt: "Life's Kitchen",
    route: "/life-kitchen",
  },
  {
    title: "The Hate U Give",
    imgSrc: THUGBG,
    imgAlt: "The Hate U Give",
    route: "/the-hate-u-give",
  },
  {
    title: "we forgot",
    imgSrc: WFBG,
    imgAlt: "we forgot",
    route: "/we-forgot",
  },
  {
    title: "The Mandem",
    imgSrc: TMBG,
    imgAlt: "The Mandem",
    route: "/the-mandem",
  },
  {
    title: "New Semester, New Me",
    imgSrc: NSNMBG,
    imgAlt: "New Semester New Me",
    route: "/new-semester-new-me",
  },
  {
    title: "...they said",
    imgSrc: TSBG,
    imgAlt: "...they said",
    route: "/they-said",
  },
  {
    title: "mizaru, kikazaru, iwazaru",
    imgSrc: SNEBG,
    imgAlt: "mizaru, kikazaru, iwazaru",
    route: "/mizaru-kikazaru-iwazaru",
  },
  {
    title: "Marriage",
    imgSrc: MRBG,
    imgAlt: "Marriage",
    route: "/marriage",
  },
  {
    title: "Better Me, Better Us, Better Working World",
    imgSrc: BMBG,
    imgAlt: "Better Me, Better Us, Better Working World",
    route: "/better-me",
  },
  {
    title: "Love Is War",
    imgSrc: LIWBG,
    imgAlt: "Love Is War",
    route: "/love-is-war",
  },
  {
    title: "Joyeux Noël",
    imgSrc: JNBG,
    imgAlt: "Joyeux Noël",
    route: "/joyeux-noel",
  },
];

const Projects = () => {
  return (
    <>
      <div className=" pb-8 exoFont projectsGrad">
        <div className="w3-container pb-[48px] mx-[3vw]  " id="projects">
          <h3
            className="text-2xl gradient-border-bottom exoFont pb-[4px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            Poems
          </h3>
        </div>
        <div className="w3-row-padding mx-[3vw]">
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
