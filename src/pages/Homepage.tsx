import React, { useRef } from "react";
import { useEffect } from "react";
import "../App.css";
import ImageSlides from "../components/ImageSlides";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import NavigationBar from "../components/NavigationBar";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Testing from "../components/Testing";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Homepage = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="border-4s">
          <NavigationBar
            introRef={introRef}
            projectsRef={projectsRef}
            aboutMeRef={aboutMeRef}
            contactMeRef={contactMeRef}
          />
        </div>{" "}
        <div ref={introRef} className="">
          <Intro />
        </div>{" "}
        <div ref={projectsRef} className="scroll scrollModal">
          <Projects />
        </div>{" "}
        <div className="">
          <ImageSlides />
        </div>
        <div ref={aboutMeRef} className="">
          <AboutMe />
        </div>
        <div ref={contactMeRef} className="">
          <ContactMe />
        </div>
        <div className="">
          <Hero contactMeRef={contactMeRef} />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
