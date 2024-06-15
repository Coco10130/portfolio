"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const About = () => {
  const [hoveredTech, setHoveredTech] = useState<string>("");

  const technologies = [
    {
      tech: "JavaScript",
      color: "#f0db4f",
    },
    {
      tech: "TypeScript",
      color: "#007acc",
    },
    {
      tech: "HTML",
      color: "#e34c26",
    },
    {
      tech: "NodeJs",
      color: "#68a063",
    },
    {
      tech: "React",
      color: "#1c84bc",
    },
    {
      tech: "CSS",
      color: "#264de4",
    },
    {
      tech: "MongoDB",
      color: "#0cd45b",
    },
    {
      tech: "MySQL",
      color: "#00758f",
    },
    {
      tech: "Tailwind",
      color: "#5454ec",
    },
    {
      tech: "Bootstrap",
      color: "#563d7c",
    },
    {
      tech: "Express",
      color: "#303030",
    },
    {
      tech: "Git",
      color: "#f34f29",
    },
    {
      tech: "NextJS",
      color: "#45ce05",
    },
  ];

  return (
    <>
      <Reveal>
        <div className="flex flex-col items-center mb-32">
          <div>
            <h1 className="text-white font-source-serif-bold text-5xl mb-20">
              About
            </h1>
          </div>

          <div className="grid grid-cols-2 place-content-center mx-5 sm:mx-10 md:px-20 lg:mx-40">
            <div className="flex flex-col gap-7 font-source-serif text-white">
              <p>
                Hello, I'm John Ric Tenepere, proudly representing Aguilar,
                Pangasinan, as I navigate the vast expanse of academia. My
                academic journey is a deep dive into the realm of backend
                development, with Node.js serving as my guiding light.
              </p>
              <p>
                As I prepare to embark on my third year of college, I liken
                myself to a sailor setting sail into uncharted waters, eager to
                explore new frontiers in the field of backend development.
              </p>
              <p>
                As I continue my journey of lifelong learning, I remain vigilant
                for the latest advancements in backend development. Each new
                technological breakthrough fuels my passion and drives me
                forward in my pursuit of mastery.
              </p>
            </div>

            <div className="flex flex-col items-center px-5 sm:px-10 md:px-16 lg:px-20">
              <h3 className="font-source-serif-semibold text-2xl text-white mb-12">
                Technologies I use
              </h3>

              <Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech.tech}
                      className="text-white px-4 py-2 rounded-full shadow-md text-sm hover:scale-x-110 duration-300 cursor-pointer font-source-serif"
                      style={{
                        backgroundColor:
                          hoveredTech === tech.tech ? tech.color : "gray",
                      }}
                      onMouseEnter={() => setHoveredTech(tech.tech)}
                      onMouseLeave={() => setHoveredTech("")}
                    >
                      {tech.tech}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default About;
