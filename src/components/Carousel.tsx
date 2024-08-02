// Carousel.tsx
import React, { useEffect } from "react";

interface CarouselProps {
  className: string;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ className, interval = 5000 }) => {
  useEffect(() => {
    const getRandomIndex = (max: number) => {
      return Math.floor(Math.random() * max);
    };

    const carousel = () => {
      const x = document.getElementsByClassName(
        className
      ) as HTMLCollectionOf<HTMLElement>;
      if (x.length === 0) return;

      // Hide all images
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

      // Display a random image
      const randomIndex = getRandomIndex(x.length);
      x[randomIndex].style.display = "block";

      setTimeout(carousel, interval);
    };

    carousel();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(carousel as unknown as number);
    };
  }, [className, interval]);

  return null;
};

export default Carousel;
