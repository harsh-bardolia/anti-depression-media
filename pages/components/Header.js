import Image from "next/legacy/image";
import React, { useState } from "react";
import { Bars4Icon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ADM from "/image-assets/ADM.png";
import Hamburger from "./Hamburger";
import { useUI } from "../../Context/UIContext";
const Header = ({ active, onDarkToggle }) => {
  const [x, setX] = useState(false);
  const [open, setOpen] = useState(false);
  const { navMenu, toggleNavMenu } = useUI();

  return (
    <header className="fixed top-0 z-[999] w-screen grid grid-cols-3 items-center justify-between bg-white shadow-md p-3  md:px-10 dark:bg-gray-800">
      {/* Left */}

      <div className=" relative flex items-center h-10 cursor-pointer my-auto ">
        <Link href="/">
          <Image
            src={ADM}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className=""
            alt="Logo"
            viewBox="0 0 20 20"
          />
        </Link>
      </div>

      {/* Middle */}

      <div className="flex items-center">
        <ul className="hidden items-center space-x-8 sm:inline-flex text-black dark:text-white">
          <Link href="/">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Overview
            </li>
          </Link>
          <Link href="./features">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Features
            </li>
          </Link>
          <Link href="./letstest">
            <li className="hover:text-[#FF5A5F]  cursor-pointer active:scale-90 transition duration-150">
              Let&apos;s Test
            </li>
          </Link>
          <Link href="./contact">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      {/* Right */}

      <div className="flex items-center justify-end space-x-1 ">
        <Link href="/login">
          <button className="bg-[#FF5A5F] min-w-[5rem] py-2 px-4 text-white rounded-lg shadow-sm hover:shadow-xl active:scale-90 transition duration-150 ">
            Sign in
          </button>
        </Link>

        <div className={x ? "dark" : ""} onClick={onDarkToggle}>
          <MoonIcon className="h-7 px-1 cursor-pointer text-black hover:text-[#FF5A5F] active:scale-90 transition duration-150 dark:text-white dark:hover:text-[#FF5A5F]" />
        </div>
        <div>
          <Bars4Icon
            className="text-black h-7  cursor-pointer dark:text-white hover:text-[#FF5A5F] dark:hover:text-[#FF5A5F] visible active:scale-90 transition duration-150 sm:hidden"
            onClick={toggleNavMenu}
          />
        </div>
      </div>

      {navMenu && <Hamburger />}
    </header>
  );
};

export default Header;
