"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import classNames from "classnames";

interface Props {
  darkMode: boolean;
}

const About = ({ darkMode }: Props) => {
  const [hoveredTech, setHoveredTech] = useState<string>("");

  const technologies = [
    {
      tech: "JavaScript",
      color: "bg-[#f0db4f]",
    },
    {
      tech: "TypeScript",
      color: "bg-[#007acc]",
    },
    {
      tech: "HTML",
      color: "bg-[#e34c26]",
    },
    {
      tech: "NodeJs",
      color: "bg-[#68a063]",
    },
    {
      tech: "React",
      color: "bg-[#1c84bc]",
    },
    {
      tech: "CSS",
      color: "bg-[#264de4]",
    },
    {
      tech: "MongoDB",
      color: "bg-[#0cd45b]",
    },
    {
      tech: "MySQL",
      color: "bg-[#00758f]",
    },
    {
      tech: "Tailwind",
      color: "bg-[#5454ec]",
    },
    {
      tech: "Bootstrap",
      color: "bg-[#563d7c]",
    },
    {
      tech: "Express",
      color: "bg-[#303030]",
    },
    {
      tech: "Git",
      color: "bg-[#f34f29]",
    },
    {
      tech: "NextJS",
      color: "bg-[#45ce05]",
    },
    {
      tech: "Framer Motion",
      color: "bg-[#1D3557]",
    },
  ];

  return (
    <>
      <Reveal>
        <div
          className={`${
            darkMode && "dark"
          } flex flex-col items-center mt-12 mb-32`}
        >
          <div>
            <h1 className="dark:text-white font-source-serif-bold text-3xl mb-12 sm:text-4xl md:text-5xl md:mb-20">
              About
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-12 place-content-center mx-5 sm:mx-10 md:px-20 lg:mx-12 lg:grid-cols-2">
            <div className="flex flex-col gap-7 font-source-serif text-center dark:text-white lg:text-start">
              <p className="description">
                Hello, I&apos;m John Ric Tenepere, proudly representing Aguilar,
                Pangasinan, as I navigate the vast expanse of academia. My
                academic journey is a deep dive into the realm of backend
                development, with Node.js serving as my guiding light.
              </p>
              <p className="description">
                As I prepare to embark on my third year of college, I liken
                myself to a sailor setting sail into uncharted waters, eager to
                explore new frontiers in the field of backend development.
              </p>
              <p className="description">
                As I continue my journey of lifelong learning, I remain vigilant
                for the latest advancements in backend development. Each new
                technological breakthrough fuels my passion and drives me
                forward in my pursuit of mastery.
              </p>
            </div>

            <div className="flex flex-col items-center px-5 sm:px-10 md:px-16 lg:px-20">
              <h3 className="font-source-serif-semibold text-2xl dark:text-white mb-12">
                Technologies I use
              </h3>

              <Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech.tech}
                      className={classNames(
                        "dark:text-white px-4 py-2 rounded-full shadow-md text-sm hover:scale-x-110 duration-300 cursor-pointer font-source-serif lg:text-base hover:text-white",
                        {
                          [tech.color]: hoveredTech === tech.tech,
                          "bg-gray-200 dark:bg-gray-500":
                            hoveredTech !== tech.tech,
                        }
                      )}
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
