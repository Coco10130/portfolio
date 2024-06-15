import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <>
      <Reveal>
        <div className="flex flex-col justify-center items-center w-full h-auto py-12">
          <div className="text-center">
            <h3 className="text-lg text-white font-source-serif-bold">
              Drop me a line
            </h3>
            <h3 className="text-lg text-white font-source-serif-bold mt-3 mb-6">
              and let&apos;s create a cool and valuable project for you
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 w-[50%]">
            <a
              href="https://www.facebook.com/johnric.tenepere.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={50} color="white" />
            </a>
            <a
              href="https://ph.linkedin.com/in/cocolangot?original_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={50} color="white" />
            </a>
            <a
              href="https://www.instagram.com/jhnrc13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={50} color="white" />
            </a>
          </div>

          <div className="pt-12">
            <p className="text-white text-lg font-source-serif">
              All rights reserved
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Footer;
