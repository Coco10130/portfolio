import React from "react";
import WaterDropGrid from "./WaterDropGrid";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <>
      <Reveal>
        <div className="w-full h-[100vh] px-20 py-24 mix-blend-normal">
          <div className="relative ml-96 px-12">
            <WaterDropGrid />
          </div>

          <div className="absolute top-[12rem] left-12 flex flex-col gap-6 w-[45rem] text-white md:left-16 lg:left-[13rem]">
            <h1 className="text-4xl font-source-serif sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m John Ric
            </h1>
            <h3 className="text-xl font-source-serif-semibold  md:text-2xl lg:text-3xl">
              A Full-Stack Developer
            </h3>
            <p className="font-source-serif text-gray-400 w-[35%] text-sm sm:text-md md:text-lg sm:w-[50%] md:w-[80%] lg:w-[100%]">
              I&apos;m a student aspiring to be a software engineer, skilled in
              creating dynamic web applications. I love working on both
              front-end and back-end projects and I&apos;am excited about future
              tech innovations.
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Hero;
