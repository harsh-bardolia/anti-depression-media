import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Hamburger = () => {
  return (
    <div>
      <div className="w-screen items-end text-end pr-6 list-none text-gray-600 font-bold dark:text-white ">
        <Link href="/" >
          <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
            Overview
          </li>
        </Link>
        <Link href="/features">
          <li className="hover:text-[#f05055] cursor-pointer active:scale-90 transition duration-150">
            Features
          </li>
        </Link>
        <Link href='/letstest'>
          <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
            Let&apos;s Test
          </li>
        </Link>
        <Link href='/contact'>
          <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
            Contact Us
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Hamburger;
