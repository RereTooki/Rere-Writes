// LeftDivAnimation.tsx

import React from "react";
import { motion } from "framer-motion";

interface LeftDivAnimationProps {
  children: React.ReactNode;
}

const LeftDivAnimation: React.FC<LeftDivAnimationProps> = ({ children }) => {
  const container = {
    initial: { x: "50vw", y: "0", translateX: "-50%" },
    animate: {
      x: "0",
      y: "0",
      translateX: "0%",
      transition: {
        delay: 2, // Delay for 'stories untold' to finish
        duration: 5, // Duration of the shift to the left
        type: "spring",
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" variants={container}>
      {children}
    </motion.div>
  );
};

export default LeftDivAnimation;
