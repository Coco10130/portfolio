import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "./Reveal";

interface Props {
  darkMode: boolean;
}

const Footer = ({ darkMode }: Props) => {
  return (
    <>
      <Reveal>
        <div
          className={`${
            darkMode && "dark"
          } flex flex-col justify-center items-center w-full h-auto py-8 bg-neutral-100 dark:bg-neutral-800`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 h-auto">
            <div className="flex flex-row justify-start sm:justify-center items-center gap-6 px-4">
              <a
                href="https://www.facebook.com/johnric.tenepere.9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color={darkMode ? "white" : "black"} />
              </a>
              <a
                href="https://ph.linkedin.com/in/cocolangot?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} color={darkMode ? "white" : "black"} />
              </a>
              <a
                href="https://www.instagram.com/jhnrc13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} color={darkMode ? "white" : "black"} />
              </a>
            </div>

            <div className="flex flex-row justify-start sm:justify-center items-center px-4">
              <p className="text-base dark:text-white md:text-lg font-source-serif">
                © John Ric 2024
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Footer;
