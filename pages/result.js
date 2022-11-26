import React, { useState } from "react";
import Header from "./components/Header";

const Result = () => {
  const [x, setX] = useState(false);
  const toggleTheme = () => {
    setX(!x);
  };
  return (
    <>
      <div className="flex flex-col mt-52 text-center  items-center justify-center dark:bg-gray-300">
        <p className="text-red-700  font-Josefin font-extrabold text-8xl ">
          OPPS !!!
        </p>
        <p className="text-gray-600  font-Josefin text-3xl tracking-wider">
          THIS SITE IS UNDER CONTRUCTION
        </p>
        <p className="text-gray-600 tracking-widest p-2 text-sm font-Josefin">
          WE WILL UPDATE IT SOON !!
        </p>
      </div>
    </>
  );
};

export default Result;
