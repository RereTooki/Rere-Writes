import React from "react";

interface PoemCardProps {
  title: string;
  verses: string[];
}

const PoemCard: React.FC<PoemCardProps> = ({ title, verses }) => {
  return (
    <div className="sborder-4 tab:container mx-auto py-4 tab:p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-6 shantellFont underlinegradients underline underline-offset-4 border-2s w-fit decoration-wavy tab:decoration-dotted z-20">
        {title}
      </h1>
      <div className="space-y-8 shantellFont">
        {verses.map((verse, index) => (
          <p
            key={index}
            className="text-lg tab:text-lg text-center tab:text-left tracking-wide leading-nones whitespace-nowraps"
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
