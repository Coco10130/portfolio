import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="grid grid-cols-2 w-full h-auto px-16 py-6 shadow-lg">
        <div className="flex items-center justify-start gap-5">
          <img
            src="/images/picture.jpg"
            alt="Image"
            className="w-12 h-12 rounded-full"
          />

          <h3 className="text-xl uppercase font-bold text-white">
            John Ric Tenepere
          </h3>
        </div>

        <div className="flex items-center justify-end w-full h-auto">
          <ul className="flex flex-row text-md uppercase gap-8 cursor-pointer font-source-serif text-white">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
