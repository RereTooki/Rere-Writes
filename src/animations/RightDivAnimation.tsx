// RightDivAnimation.tsx

import React from "react";
import { motion } from "framer-motion";

interface RightDivAnimationProps {
  children: React.ReactNode;
}

const RightDivAnimation: React.FC<RightDivAnimationProps> = ({ children }) => {
  const container = {
    initial: { opacity: 0, x: "20vw", y: "0", translateX: "-50%" },
    animate: {
      opacity: 1,
      x: "40vw",
      y: "0",
      translateX: "-100%",
      transition: {
        delay: 4, // Delay for the left div to finish moving
        duration: 4, // Duration of the shift to the right
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

export default RightDivAnimation;
