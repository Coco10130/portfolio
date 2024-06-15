import React from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <>
      <Reveal>
        <div className="w-full h-auto my-32">
          <div className="mb-20">
            <h1 className="text-5xl font-source-serif-bold text-white text-center">
              Contact
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-1">
            <div className="flex flex-col justify-center items-center">
              <div className="text-white">
                <CiMail size={60} />
              </div>

              <h3 className="text-white text-3xl font-source-serif-bold my-5">
                Email
              </h3>
              <h4 className="text-white text-xl font-source-serif">
                j09308823882@gmail.com
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="text-white">
                <CiPhone size={60} />
              </div>

              <h3 className="text-white text-3xl font-source-serif-bold my-5">
                Phone
              </h3>
              <h4 className="text-white text-xl font-source-serif">
                +639394562697
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="text-white">
                <CiLocationOn size={60} />
              </div>

              <h3 className="text-white text-3xl font-source-serif-bold my-5">
                Location
              </h3>
              <h4 className="text-white text-xl font-source-serif">
                Aguilar, Pangasinan
              </h4>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Contact;
