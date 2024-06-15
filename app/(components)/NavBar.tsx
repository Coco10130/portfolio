"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const navigations = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      <nav className="grid grid-cols-2 w-full h-auto px-6 py-6 shadow-lg md:px-8 lg:px-16">
        <div className="flex items-center justify-start gap-5 w-[150%] md:w-full z-20">
          <img
            src="/images/picture.jpg"
            alt="Image"
            className="w-12 h-12 rounded-full"
          />

          <h3 className="text-md md:text-xl uppercase font-bold text-white">
            John Ric Tenepere
          </h3>
        </div>

        <div className="flex items-center justify-end w-full h-auto z-20">
          <ul className="hidden flex-row text-md uppercase gap-6 cursor-pointer font-source-serif text-white md:flex">
            {navigations.map((navItem) => (
              <li key={navItem.title}>
                <Link href={navItem.href}>{navItem.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex md:hidden">
            <button
              className="px-3 py-1 mr-1 sm:mr-5 z-20"
              onClick={() => setShowNav(!showNav)}
            >
              <IoIosMenu size={40} color="white" />
            </button>
          </div>

          <div
            className={
              showNav
                ? "absolute top-[6rem] opacity-100 left-0 w-full h-auto px-5 py-5 bg-opacity-20 text-white border-2 border-slte-600 bg-white z-10 duration-300"
                : "absolute top-[6rem] left-[-110%] opacity-50 w-full h-auto px-5 py-5 bg-opacity-0 text-white bg-white duration-300"
            }
          >
            <ul className="relative flex flex-row items-center justify-center w-full h-auto gap-5 font-source-serif text-base sm:text-lg sm:gap-8 ">
              {navigations.map((navItem) => (
                <li key={navItem.title}>
                  <button onClick={() => setShowNav(false)}>
                    <Link href={navItem.href}>{navItem.title}</Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
