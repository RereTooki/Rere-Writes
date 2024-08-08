import React from "react";

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
  return (
    <div className="sborder-4 tab:container mx-auto py-4 tab:p-4 flex flex-col items-center justify-center">
      <h1
        className={`text-3xl font-bold text-center mb-6 border-2s w-fit z-20 ${titleFont}`}
      >
        {title}
      </h1>
      <div className="space-y-8">
        {verses.map((verse, index) => (
          <p
            key={index}
            className={`text-lg tab:text-lg text-center tab:text-left tracking-wide leading-nones whitespace-nowraps ${bodyFont}`}
          >
            {verse.split("\n").map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                <span className="leading-loose">{line}</span>
                <br />
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PoemCard;
