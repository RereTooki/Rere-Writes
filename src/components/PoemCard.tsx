import React from "react";

interface PoemCardProps {
  title: string;
  verses: string[];
}

const PoemCard: React.FC<PoemCardProps> = ({ title, verses }) => {
  return (
    <div className=" sborder-4 tab:container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <div className="space-y-8">
        {verses.map((verse, index) => (
          <p key={index} className="text-lg text-center">
            {verse.split("\n").map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
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
