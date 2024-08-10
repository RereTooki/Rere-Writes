import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ProjectCard from "../components/ProjectCard";

interface WithChildren {
  children: ReactNode;
}

const PoemTextAnimation: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="p-4"
    >
      {children}
    </motion.div>
  );
};

export default PoemTextAnimation;
