import React, { useState } from "react";
import Header from "./components/Header";
import Image from "next/legacy/image";
import Team from "../constant/teamNames.json";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import Link from "next/link";
import Subscribe from "./components/Subscribe";

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
        } flex flex-col justify-end bg-white dark:bg-gray-600 h-screen`}
      >
        <Header onDarkToggle={toggleTheme} />

        <div className="absolute w-screen h-screen  flex flex-col items-center bg-white dark:bg-gray-700">
          <div className="mt-24 text-center text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-Josefin text-[#FF5A5F]">
            TEAM MEMBERS
          </div>

          <div className="grid grid-cols-1 justify-between sm:grid-cols-2 xl:grid-cols-3">
            {Team &&
              Team.map((item, index) => {
                return (
                  <li key={index} className="list-none">
                    <div className="flex flex-col items-center">
                      <div className="items-center">
                        <Image
                          src={item.imgLink}
                          height={100}
                          width={100}
                          // layout="intrinsic"
                          className="rounded-full"
                        />
                      </div>
                      <div className="p-3 items-center">
                        <p className="text-gray-900 text-center dark:text-gray-200 font-extrabold">
                          {item.fullName}
                        </p>
                        <div className="bg-transparent flex">
                          <div className="flex space-x-3">
                            <Link href={item.githubLink}>
                              <FaGithub className="text-gray-400 hover:text-black dark:hover:text-black dark:text-gray-400" />
                            </Link>
                            <Link href={item.linkedIn}>
                              <FaLinkedin className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-700 dark:text-gray-400" />
                            </Link>
                            <Link href={item.insta}>
                              <FaInstagram className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-600 dark:text-gray-400" />
                            </Link>
                            <Link href={item.facebook}>
                              <FaFacebook className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-700 dark:text-gray-400" />
                            </Link>
                            <Link href={item.twitter}>
                              <FaTwitter className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-600 dark:text-gray-400" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
