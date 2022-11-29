import React, { useState } from "react";
import Header from "./components/Header";
import Image from "next/legacy/image";
import Team from "../constant/teamNames.json";

const Contact = () => {
  const [x, setX] = useState(false);
  const toggleTheme = () => {
    setX(!x);
  };
  return (
    <>
      <div
        className={`${
          x ? "dark" : ""
        } flex flex-col justify-end bg-white dark:bg-gray-600`}
      >
        <Header onDarkToggle={toggleTheme} />
        <div className="flex flex-col items-center mt-6 bg-white dark:bg-gray-700">
          <div className=" py-14 text-[3.5rem] sm:text-[4.5rem] md:text-[4.8rem] lg:text-[5.5rem] font-Josefin text-[#FF5A5F]">
            TEAM MEMBERS
          </div>

          {Team &&
            Team.map((myName, myLink, index) => {

              return (
                <li key={index.indexing} className="flex flex-col md:flex-row">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        src={myLink.imgLink}
                        height={100}
                        width={100}
                        layout="intrinsic"
                        className=""
                      />
                    </div>
                    <p className="text-cyan-500 font-extrabold">
                      {myName.fullName}
                    </p>
                  </div>
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Contact;
