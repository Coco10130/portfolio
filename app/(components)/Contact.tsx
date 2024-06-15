import React from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <>
      <Reveal>
        <div className="w-full h-auto mb-32">
          <div className="mb-20">
            <h1 className="font-source-serif-bold text-white text-center text-3xl sm:text-4xl md:text-5xl">
              Contact
            </h1>
          </div>
          <Reveal>
            <div>
              {/* Large sized screen */}
              <div className="hidden md:grid gap-12 px-12 grid-cols-3 lg:gap-1">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-white">
                    <CiMail size={60} />
                  </div>

                  <h3 className="text-white text-3xl font-source-serif-bold my-5">
                    Email
                  </h3>
                  <h4 className="text-white text-xl font-source-serif-italic">
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
                  <h4 className="text-white text-xl font-source-serif-italic">
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
                  <h4 className="text-white text-xl font-source-serif-italic">
                    Aguilar, Pangasinan
                  </h4>
                </div>
              </div>

              {/* Small sized screen */}
              <div className="grid grid-rows-3 gap-12 px-12 md:hidden">
                <div className="flex items-center gap-5">
                  <div className="text-white">
                    <CiMail size={50} />
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-source-serif-bold">
                      Email
                    </h3>
                    <h4 className="text-white text-md font-source-serif-italic mt-2 font-thin">
                      j09308823882@gmail.com
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-white">
                    <CiPhone size={50} />
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-source-serif-bold">
                      Phone
                    </h3>
                    <h4 className="text-white text-md font-source-serif-italic mt-2 font-thin">
                      +639394562697
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-white">
                    <CiLocationOn size={50} />
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-source-serif-bold">
                      Location
                    </h3>
                    <h4 className="text-white text-md font-source-serif-italic mt-2 font-thin">
                      Aguilar, Pangasinan
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
};

export default Contact;
