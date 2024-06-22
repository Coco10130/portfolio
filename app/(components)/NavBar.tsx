"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

let navigation = false;

interface Props {
  darkMode: boolean;
}

const NavBar = ({ darkMode }: Props) => {
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
      <nav
        className={`${
          darkMode && "dark"
        } grid fixed grid-cols-2 w-full h-auto px-6 py-3 shadow-lg md:px-8 md:py-6 lg:px-16 z-20 bg-neutral-200 dark:bg-black`}
      >
        <div className="flex items-center justify-start gap-5 w-[150%] md:w-full">
          <h3 className="text-md ml-5 uppercase font-bold text-neutral-900 dark:text-white md:ml-12 md:text-xl">
            John Ric Tenepere
          </h3>
        </div>
        <div className="flex items-center justify-end w-full h-auto">
          <ul className="hidden flex-row gap-6 cursor-pointer font-source-serif dark:text-white md:flex">
            {navigations.map((navItem) => (
              <li key={navItem.title}>
                <FlipLink href={navItem.href}>{navItem.title}</FlipLink>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden">
            <button className="mr-2 sm:mr-5" onClick={handleNavigationChange}>
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
        className="fixed top-[5.4rem] left-0 w-full h-auto px-5 py-5 bg-opacity-90 border-2 border-white/40 dark:border-white/40 dark:text-white z-20 bg-white dark:bg-black md:hidden"
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
    setActive((p) => !p);
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
          className="absolute h-1 w-7 bg-black dark:bg-white rounded-lg"
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
          className="absolute h-1 w-7 bg-black dark:bg-white rounded-lg"
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
            left: "calc(50% + 4px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-5 bg-black dark:bg-white rounded-lg"
          variants={{
            open: {
              rotate: [0, 0, 45],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: [45, 0, 0],
              left: "calc(50% + 4px)",
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

interface LinkProps {
  children: string;
  href: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: LinkProps) => {
  return (
    <motion.a
      className="relative block text-md uppercase overflow-hidden whitespace-nowrap"
      href={href}
      initial="initial"
      whileHover="hover"
      style={{
        lineHeight: 0.9,
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hover: {
                  y: "-100%",
                },
              }}
              key={i}
              className="inline-block"
              transition={{
                delay: STAGGER * i,
                easing: "easeInOut",
                duration: DURATION,
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hover: {
                  y: 0,
                },
              }}
              key={i}
              className="inline-block"
              transition={{
                delay: STAGGER * i,
                easing: "easeInOut",
                duration: DURATION,
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default NavBar;
