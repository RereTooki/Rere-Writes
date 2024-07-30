// ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgSrc, imgAlt }) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">{title}</div>
        <img src={imgSrc} alt={imgAlt} className="width:100%" />
      </div>
    </div>
  );
};

export default ProjectCard;
