// ProjectCard.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  route: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  route,
}) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">{title}</div>
        <NavLink to={route}>
          <img src={imgSrc} alt={imgAlt} className="width:100%" />
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
