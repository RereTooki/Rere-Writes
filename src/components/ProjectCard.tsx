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
        <div className="w3-display-topleft w3-white w3-padding rounded-br-lg border-t-2 border-l-2 border-clrtransparentgreen">
          <p className="text-clrtransparentgreen">{title}</p>
        </div>
        <NavLink to={route}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[250px] object-cover tabImg2:h-auto tabImg2:object-fill nxl:h-[1s85px] nxl:w-[2s34px]"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
