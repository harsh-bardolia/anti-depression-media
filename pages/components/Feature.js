import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Feature = () => {
  return (
    <div className="dark:bg-gray-600 bg-white">
      <div className="flex flex-col  items-center w-fill ">
        <div className="text-[5rem] font-Josefin text-[#FF5A5F] ">
          FEATURES
        </div>
        <div className="flex flex-col items-start font-normal text-justify w-screen bg-slate-400 rounded-sm dark:bg-gray-300 ">
          <div className=" m-8 px-auto py-auto sm:m-9 md:m-10 lg:m-11 xl:m-12 2xl:m-14">
            <li key={0} className="text-start">
              It&apos;s Effectively Ask The Question To Patient So From That We Can
              Measure The Stage Of The Depression.
            </li>
            <li key={1} className="text-start">
              It Recommend The Song,movie,Book, Based On Patient Interest.
            </li>
            <li key={2} className="text-start">
              Give a Recommendation to a Doctor
            </li>
            <li key={3} className="text-start">
              Light/Dark Mode - High Refreshrate
            </li>
            <li key={4} className="text-start">
              High Refreshrate
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
