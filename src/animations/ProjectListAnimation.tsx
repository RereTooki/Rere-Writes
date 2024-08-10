import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ProjectCard from "../components/ProjectCard";

interface WithChildren {
  children: ReactNode;
}

const projectVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

const ProjectListAnimation: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.div
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {children}
    </motion.div>
  );
};

export default ProjectListAnimation;
