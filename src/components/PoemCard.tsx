import React from "react";
import WritingAnimation from "../animations/WritingAnimation";
import PoemTextAnimation from "../animations/PoemTextAnimation";
import { useState, useEffect } from "react";
import PoemsModal from "./PoemsModal";

interface PoemCardProps {
  title: string;
  verses: string[];
  titleFont: string;
  bodyFont: string;
}

const PoemCard: React.FC<PoemCardProps> = ({
  title,
  verses,
  titleFont,
  bodyFont,
}) => {
  // State to control the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal and display task details
  const openDetails = () => {
    setIsOpen(true);
  };

  return (
    <div className="sborder-4 tab:container mx-auto py-4 tab:p-4 flex flex-col items-center justify-center">
      <h1
        className={`text-3xl font-bold text-center mb-6 border-2s w-fit z-20 ${titleFont}`}
      >
        <WritingAnimation text={title} />
      </h1>
      <div className="space-y-8 border-2s">
        {verses.map((verse, index) => (
          <p
            key={index}
            className={`text-lg tab:text-lg text-left tracking-wide leadings-10 whitespace-nowraps border-rnowraps border-double border-gray-800 rounded-sm  ${
              index % 2 !== 0 ? "border-r-4 pr-2" : "border-l-4 pl-2"
            } ${bodyFont}`}
          >
            {verse.split("\n").map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                <span className="leading-tight sborder-2 sunderline stext-xl">
                  {line}
                </span>
                <hr className="h-[5px] decoration-wavy  smy-8 border-gray-800 border-t-2 border-double rounded-sm w3-animate-zoomSlow" />
              </React.Fragment>
            ))}
          </p>
        ))}
        <div className="flex flex-row justify-end z-20 tab:fixed tab:block bottom-2 right-2 border-black exoFont text-lg">
          <button
            className="py-1 tab:px-3 rounded-md sborder-2  underline underline-offset-2 hover:underline-offset-4 hover:scale-[1.02] mb-4 tab:mb-2 "
            onClick={() => openDetails()}
          >
            Want To Read More?
          </button>
        </div>
        {/* PoemsModal */}
        <PoemsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default PoemCard;
