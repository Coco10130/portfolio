import React from "react";
import WaterDropGrid from "./WaterDropGrid";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <>
      <Reveal>
        <div className="w-full h-[100vh] px-20 py-24 mix-blend-normal">
          <div className="relative ml-96">
            <WaterDropGrid />
          </div>

          <div className="absolute top-[12rem] left-[13rem] flex flex-col gap-6 w-[45rem] text-white">
            <h1 className="text-7xl font-source-serif">Hi, I'm John Ric</h1>
            <h3 className="text-3xl font-source-serif-semibold">
              A Full-Stack Developer
            </h3>
            <p className="font-source-serif text-gray-400 text-lg">
              I'm a student aspiring to be a software engineer, skilled in
              creating dynamic web applications. I love working on both
              front-end and back-end projects and I'am excited about future tech
              innovations.
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Hero;
