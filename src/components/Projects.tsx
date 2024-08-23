import React from "react";
import ProjectCard from "./ProjectCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TCOBBG from "../assets/images/poemBgs/TCOBBG.webp";
import WFBG from "../assets/images/poemBgs/WFBG.webp";
import LKBG from "../assets/images/poemBgs/LKBG.webp";
import SBMBG from "../assets/images/poemBgs/SBMBG.webp";
import NSNMBG from "../assets/images/poemBgs/NSNMBG.webp";
import TMBG from "../assets/images/poemBgs/TMBG.webp";
import TSBG from "../assets/images/poemBgs/TSBG.webp";
import SNEBG from "../assets/images/poemBgs/SNEBG.webp";
import MRBG from "../assets/images/poemBgs/MRBG.webp";
import BMBG from "../assets/images/poemBgs/BMBG.webp";
import JNBG from "../assets/images/poemBgs/JNBG.webp";
import LIWBG from "../assets/images/poemBgs/LIWBG.webp";
import THUGBG from "../assets/images/poemBgs/THUGBG.webp";
import PoemImageSlides from "./PoemImageSlides";

export const projects = [
  {
    title: "The Chaos of Beauty",
    imgSrc: TCOBBG,
    imgAlt: "The Chaos of Beauty",
    route: "/the-chaos-of-beauty",
  },
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
      <div className=" pb-8 exoFont projectsGrad pt-10">
        <div className="w3-container pb-[48px] mx-[3vw]  " id="projects">
          <h3
            className="text-3xl tab:text-4xl gradient-border-bottom playfairFont pb-[4px] dark:text-white"
            data-aoss="zoom-in"
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
