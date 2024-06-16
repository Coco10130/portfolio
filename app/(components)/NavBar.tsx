"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

let navigation = false;

const NavBar = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const navigations = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavigationChange = () => {
    navigation = showNav;
    setShowNav((pv) => !pv);
  };

  return (
    <>
      <nav className="grid grid-cols-2 w-full h-auto px-6 py-6 shadow-lg md:px-8 lg:px-16 z-20">
        <div className="flex items-center justify-start gap-5 w-[150%] md:w-full">
          <h3 className="text-md ml-5 uppercase font-bold text-white md:ml-12 md:text-xl">
            John Ric Tenepere
          </h3>
        </div>
        <div className="flex items-center justify-end w-full h-auto">
          <ul className="hidden flex-row text-md uppercase gap-6 cursor-pointer font-source-serif text-white md:flex">
            {navigations.map((navItem) => (
              <li key={navItem.title}>
                <Link href={navItem.href}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden">
            <button
              className="px-3 py-1 mr-1 sm:mr-5"
              onClick={handleNavigationChange}
            >
              <AnimatedHamburger />
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ left: "-100%", opacity: 0 }}
        animate={{
          left: navigation ? "0%" : "-100%",
          opacity: navigation ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-[7.4rem] left-0 w-full h-auto px-5 py-5 bg-opacity-90 text-white z-30 bg-white/20 md:hidden"
      >
        <motion.ul
          initial="closed"
          animate={navigation ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
            closed: {
              opacity: 0,
            },
          }}
          className="relative flex flex-row items-center justify-center w-full h-auto gap-5 font-source-serif text-sm sm:text-base sm:gap-7"
        >
          {navigations.map((navItem) => (
            <motion.li
              key={navItem.title}
              variants={{
                open: { opacity: 1, y: 0, x: 0 },
                closed: { opacity: 0, y: 0, x: -30 },
              }}
            >
              <Link href={navItem.href} onClick={handleNavigationChange}>
                {navItem.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

const AnimatedHamburger = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleNavigationChange = () => {
    navigation = active;
    setActive((pv) => !pv);
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        onClick={handleNavigationChange}
        className="relative w-20 h-16 rounded-full transition-colors"
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: [0, 0, 45],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: [45, 0, 0],
              top: ["50%", "50%", "35%"],
            },
          }}
          initial="open"
          animate={navigation ? "open" : "closed"}
        ></motion.span>

        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: [0, 0, -45],
            },
            closed: {
              rotate: [-45, 0, 0],
            },
          }}
          initial="open"
          animate={navigation ? "open" : "closed"}
        ></motion.span>

        <motion.span
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-5 bg-white"
          variants={{
            open: {
              rotate: [0, 0, 45],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: [45, 0, 0],
              left: "calc(50% + 10px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
          initial="open"
          animate={navigation ? "open" : "closed"}
        ></motion.span>
      </motion.div>
    </MotionConfig>
  );
};

export default NavBar;
