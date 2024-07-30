import React from "react";
import ProjectCard from "./ProjectCard";
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

const projects = [
  { title: "we forgot", imgSrc: img, imgAlt: "we forgot" },
  { title: "Life's Kitchen", imgSrc: img2, imgAlt: "Life's Kitchen" },
  { title: "The Hate U Give", imgSrc: imgG, imgAlt: "The Hate U Give" },
  { title: "Stand By Me", imgSrc: img2, imgAlt: "Stand By Me" },
  { title: "we forgot", imgSrc: img, imgAlt: "we forgot" },
  { title: "The Mandem", imgSrc: img2, imgAlt: "The Mandem" },
  {
    title: "New Semester, New Me",
    imgSrc: img3,
    imgAlt: "New Semester New Me",
  },
  { title: "...they said", imgSrc: imgA, imgAlt: "...they said" },
  {
    title: "mizaru, kikazaru, iwazaru",
    imgSrc: imgB,
    imgAlt: "mizaru, kikazaru, iwazaru",
  },
  { title: "Marriage", imgSrc: imgC, imgAlt: "Marriage" },
  {
    title: "Better Me, Better Us, Better Working World",
    imgSrc: imgD,
    imgAlt: "Better Me, Better Us, Better Working World",
  },
  { title: "Joyeux Noël", imgSrc: imgE, imgAlt: "Joyeux Noël" },
];

const Projects = () => {
  return (
    <>
      <div className="mx-[3vw]">
        <div className="w3-container pb-[48px]" id="projects">
          <h3 className="w3-border-bottomS w3-border-light-greyS border-b-2 border-clrtransparentgreen rounded-sm border-dasheds text-2xl">
            Poems
          </h3>
        </div>
        <div className="w3-row-padding">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="w3-row-padding">
          {projects.slice(4).map((project, index) => (
            <ProjectCard key={index + 4} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
