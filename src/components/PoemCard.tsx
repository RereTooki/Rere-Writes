import React, { useState } from "react";
import WritingAnimation from "../animations/WritingAnimation";
import PoemsModal from "./PoemsModal";

interface PoemCardProps {
  title: string;
  verses: string[];
  titleFont: string;
  bodyFont: string;
  wtrmFont: string;
  hrFont: string;
}

const linkMap = {
  Rere: "https://www.linkedin.com/in/rerel-oluwa-tooki-b53396253/",
  Kevwe: "https://www.linkedin.com/in/kevwe-eghagha-0b7903238/",
};

const PoemCard: React.FC<PoemCardProps> = ({
  title,
  verses,
  titleFont,
  bodyFont,
  wtrmFont,
  hrFont,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDetails = () => {
    setIsOpen(true);
  };

  const renderVerse = (verse: string) => {
    return verse.split("\n").map((line, lineIndex) => {
      const match = line.match(/\[(.*)\]\((.*)\)/);
      if (match) {
        const [fullMatch, text, platform] = match;

        // Explicitly type 'platform' as the union of allowed keys
        const typedPlatform = platform as keyof typeof linkMap;
        const link = linkMap[typedPlatform] || "#";

        return (
          <React.Fragment key={lineIndex}>
            {line.split(fullMatch)[0]}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {text}
            </a>
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={lineIndex}>
          <span className="leading-tight sborder-2 sunderline stext-xl">
            {line}
          </span>
          <hr
            className={`h-[5px] decoration-wavy smy-8 border-gray-800 border-t-2 border-double rounded-sm w3-animate-zoomSlow ${hrFont}`}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="sborder-4 tab:container mx-auto py-4 tab:p-4 flex flex-col items-center justify-center">
      <h1
        className={`stext-3xl font-bold text-center mb-6 border-2s w-fit z-20 ${titleFont}`}
      >
        <WritingAnimation text={title} />
      </h1>
      <div className="space-y-8 border-2s">
        {verses.map((verse, index) => (
          <p
            key={index}
            className={`stext-lg stab:text-lg text-left tracking-wide leadings-10 whitespace-nowraps border-rnowraps border-double border-gray-800 rounded-sm ${
              index % 2 !== 0 ? "border-r-4 pr-2" : "border-l-4 pl-2"
            } ${bodyFont}`}
          >
            {renderVerse(verse)}
          </p>
        ))}
        <div className="flex flex-row justify-end z-20 tab:fixed tab:block bottom-2 tab:bottom-1 xl:bottom-2 right-2 border-black exoFont text-lg">
          <button
            className={`py-1 tab:px-3 rounded-md sborder-2  underline underline-offset-2 hover:underline-offset-4 hover:scale-[1.02] mb-4 tab:mb-2  ${wtrmFont}`}
            onClick={() => openDetails()}
          >
            Want To Read More?
          </button>
        </div>
        <PoemsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default PoemCard;
