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
          } flex flex-col justify-center items-center w-full h-auto py-12`}
        >
          <div className="text-center px-3">
            <h3 className="text-base md:text-lg dark:text-white font-source-serif-bold">
              Drop me a line
            </h3>
            <h3 className="text-base md:text-lg dark:text-white font-source-serif-bold mt-3 mb-6">
              and let&apos;s create a cool and valuable project for you
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 w-[50%]">
            <a
              href="https://www.facebook.com/johnric.tenepere.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={50} color={darkMode ? "white" : "black"} />
            </a>
            <a
              href="https://ph.linkedin.com/in/cocolangot?original_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={50} color={darkMode ? "white" : "black"} />
            </a>
            <a
              href="https://www.instagram.com/jhnrc13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={50} color={darkMode ? "white" : "black"} />
            </a>
          </div>

          <div className="pt-12">
            <p className="dark:text-white text-lg font-source-serif">
              © All rights reserved 2024
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Footer;
