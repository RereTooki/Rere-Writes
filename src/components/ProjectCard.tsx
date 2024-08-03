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
      <div className="w3-display-container hover:scale-[1.03]">
        <NavLink to={route}>
          <div className="w3-display-topleft bg-white hover:bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] w3-padding rounded-br-lg rounded-tl-lg border-t-2 border-l-2 border-clrtransparentgreen cursor-pointer hover:border-0">
            <p className=" hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#31B7C2] font-medium">
              {title}
            </p>
          </div>

          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[250px] object-cover tabImg2:h-auto tabImg2:object-fill nxl:h-[1s85px] nxl:w-[2s34px] rounded-lg"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
