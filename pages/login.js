import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Header from "./components/Header";
import ADM from "/image-assets/ADM.png";
import Research from "/image-assets/Research.png";



const login = () => {

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300 space-y-4">
      <div className="">
        <Image
          src={ADM}
          className="h-16 m-4 w-auto object-contain self-start"
        />
        <div className="text-4xl text-center m-2 pt-4 text-gray-500">
          Log in to access your account
        </div>
        <div className="items-center justify-center">
          <Image src={Research} className="object-contain h-80 w-auto  " />
        </div>
      </div>

      <div
        className="bg-[#FF5A5F] px-8 py-4 mt-8 m-5 cursor-pointer text-black items-center text-center font-bold text-lg"
        // onClick={() => signInWithPopup(auth,provider)}
      >
        Sign in with Google
      </div>
    </div>
  );
};

export default login;
