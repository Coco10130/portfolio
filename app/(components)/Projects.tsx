import React from "react";
import Reveal from "./Reveal";

interface Props {
  darkMode: boolean;
}

const Projects = ({ darkMode }: Props) => {
  const projects = [
    {
      image: "/images/concordia.png",
      title: "Concordia Portum",
      description:
        "An e-commerce application where the university students can buy and sell instruments.",
      techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
    },
    {
      image: "/images/concordia-clone.png",
      title: "Concordia Portum (Clone)",
      description: "Clone of Concordia Protum.",
      techs: ["React", "Bootstrap", "CSS", "NodeJS", "Express", "MongoDB"],
    },
    {
      image: "/images/note.png",
      title: "Note App",
      description: "A website where you can take notes.",
      techs: ["React", "JavaScript", "Bootstrap", "CSS", "Laravel", "MySQL"],
    },
    {
      image: "/images/todo-list.png",
      title: "Todo list",
      description: "A website where you can organize your tasks.",
      techs: ["React", "CSS", "Bootstrap", "Javascript", "Laravel", "MySQL"],
    },
    {
      image: "/images/abstract-clone.png",
      title: "Abstract (Clone)",
      description: "Clone of the Abstract website.",
      techs: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      image: "/images/ableton-clone.png",
      title: "Ableton (Clone)",
      description: "Clone of the Ableton website.",
      techs: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
  ];

  return (
    <div className={`${darkMode && "dark"} mb-32`}>
      <Reveal>
        <div className="flex flex-col items-center">
          <div className="mb-20">
            <h1 className="dark:text-white text-center font-source-serif-bold text-3xl  sm:text-4xl md:text-5xl">
              My Works
            </h1>
          </div>
          <div>
            <ProjectCards projects={projects} darkMode={darkMode} />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  description: string;
  techs: string[];
}

interface ProjectCardsProps {
  projects: CardProps[];
  darkMode: boolean;
}

const ProjectCards = ({ projects, darkMode }: ProjectCardsProps) => {
  return (
    <Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-auto gap-8 px-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="max-w-[26rem] w-full h-full p-4 bg-gray-300 dark:bg-gray-800 rounded-lg hover:scale-105 duration-300 ease"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl dark:text-white font-source-serif-bold mb-2">
                {project.title}
              </h1>
              <p className="text-sm text-gray-800 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full"
                  >
                    <p className="dark:text-white text-xs font-source-serif">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default Projects;
