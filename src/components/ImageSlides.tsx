import React from "react";
import "../App.css";
import Carousel from "./Carousel";

const ImageSlides = () => {
  const slides = [
    {
      id: 1,
      quote:
        "Poetry is when an emotion has found its thought and the thought has found words",
      speaker: "Robert Frost",
    },
    {
      id: 2,
      quote:
        "A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness",
      speaker: "Robert Frost",
    },
    {
      id: 3,
      quote:
        "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility",
      speaker: "William Wordsworth",
    },
    {
      id: 4,
      quote: "A poem is never finished, only abandoned",
      speaker: "Paul Valéry",
    },
    {
      id: 5,
      quote: "Poetry is language at its most distilled and most powerful",
      speaker: "Rita Dove",
    },
    {
      id: 6,
      quote:
        "A poet is, before anything else, a person who is passionately in love with language",
      speaker: "W.H. Auden",
    },
    {
      id: 6,
      quote: "Poetry is art",
      speaker: "Rerel'Oluwa Tooki",
    },
    {
      id: 7,
      quote:
        "Poetry is the lifeblood of rebellion, revolution, and the raising of consciousness",
      speaker: "Alice Walker",
    },
    {
      id: 8,
      quote:
        "To read a poem is to hear it with our eyes; to hear it is to see it with our ears",
      speaker: "Octavio Paz",
    },
    {
      id: 9,
      quote: "Poetry is an echo, asking a shadow to dance",
      speaker: " Carl Sandburg",
    },
    {
      id: 10,
      quote: "Poetry is eternal graffiti written in the heart of everyone",
      speaker: "Lawrence Ferlinghetti",
    },

    // Add more quotes and speakers as needed
  ];

  const renderSlide = (id: number, quote: string, speaker: string) => (
    <div
      className={`quoteBG quoteBG${id} mySlides h-[40vh] lg:h-[50vh] text-center text-white text-[14px] md:text-[16px] nxl:text-[22px] px-[10vw] rounded-tr-[0px] rounded-bl-[40px] tab:rounded-bl-[60px] nxl:rounded-bl-[100px] w3-animate-opacitys `}
      key={id}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <div>
          <p className="exoFont">
            “{quote}” - {speaker}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="drop-shadow-2xl mmb-10 bg-white">
      {slides.map((slide) => renderSlide(slide.id, slide.quote, slide.speaker))}
      <Carousel className="mySlides" />
    </div>
  );
};

export default ImageSlides;
