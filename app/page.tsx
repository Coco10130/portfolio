"use client";
import { useState } from "react";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Footer from "./(components)/Footer";
import Hero from "./(components)/Hero";
import NavBar from "./(components)/NavBar";
import Projects from "./(components)/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { exit } from "process";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [changeIcon, setChangeIcon] = useState<boolean>(false);

  const toggelDarkMode = () => {
    setChangeIcon(!changeIcon);
    setTimeout(() => {
      setDarkMode(!darkMode);
    }, 200);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="relative dark:bg-neutral-900 bg-white w-full h-auto">
        <NavBar darkMode={darkMode} />
        <div id="home">
          <Hero darkMode={darkMode} />
        </div>

        <div id="about">
          <About darkMode={darkMode} />
        </div>

        <div id="projects">
          <Projects darkMode={darkMode} />
        </div>

        <div id="contact">
          <Contact darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />

        <motion.button
          className="fixed p-4 rounded-full bottom-5 right-5 text-white bg-black dark:bg-white backdrop:dark:text-neutral-900 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 flex items-center justify-center"
          onClick={toggelDarkMode}
        >
          <AnimatePresence mode="popLayout">
            {changeIcon ? (
              <motion.span
                key="light-mode"
                variants={{
                  initial: {
                    opacity: "0",
                    x: "-50%",
                  },
                  entrance: {
                    x: ["-50%", "-50%", "0%"],
                    opacity: ["0%", "50%", "100%"],
                    transition: { duration: 0.5 },
                  },
                  exit: {
                    x: ["0%", "-50%", "-50%"],
                    opacity: ["100%", "50%", "0%"],
                    transition: { duration: 0.5 },
                  },
                }}
                initial="initial"
                animate="entrance"
                exit="exit"
              >
                <MdLightMode size={20} color="black" />
              </motion.span>
            ) : (
              <motion.span
                key="dark-mode"
                variants={{
                  initial: {
                    opacity: "100%",
                    x: "50%",
                  },
                  entrance: {
                    x: ["50%", "50%", "0%"],
                    opacity: ["0%", "50%", "100%"],
                    transition: { duration: 0.5 },
                  },
                  exit: {
                    x: ["0%", "50%", "50%"],
                    opacity: ["100%", "50%", "0%"],
                    transition: { duration: 0.5 },
                  },
                }}
                initial="initial"
                animate="entrance"
                exit="exit"
              >
                <MdDarkMode size={20} color="white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
