import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";

function Recommed() {
  const [x, setX] = useLocalStorage("Mode", false);
  const toggleTheme = () => {
    setX(!x);
  };

  const [moodList , setMoodList]= useState('');
  const [book, setBook]= useState('');
  const getRecommed =()=>{
    if(!moodList)
      return ([]);
    if(!book)
      return ([]);
    
    // const matchRecommedation = suggestion.filter()

  }

  return (
    <div className="scrollbar-thin scrollbar-thumb-[#FF5A5F] scrollbar-track-gray-500/40">
      <Head>
        <title>Recommendation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header onDarkToggle={toggleTheme} />

      <div className="">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="mt-24 text-center text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-Josefin text-[#FF5A5F]"
        >
          RECOMMENDATION
        </motion.div>
        <div>
            <h1>First</h1>
            <div className="flex flex-col items-center  justify-center space-y-3 bg-slate-400 px-8 py-4 ">
              <label className="font-bold">Select Mood</label>
              <select className="w-[40%] py-2 px-4 rounded-md outline-none " onChange={(e)=> setMoodList(e.target.value)}>
                <option value="">Select your Mood:</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Meditating">Meditating</option>
                <option value="Soft Rock">Soft Rock</option>
                <option value="Bollywood">Bollywood</option>
              </select>
              {moodList}
            </div>
            <div className="flex flex-col items-center  justify-center space-y-3 bg-slate-400 px-8 py-4 ">
              <label className="font-bold">Select Book Type</label>
              <select className="w-[40%] py-2 px-4 rounded-md outline-none " onChange={(e)=> setBook(e.target.value)}>
                <option value="">Select Book Type</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Autobiography">Autobiography</option>
                <option value="Biography">Biography</option>
                <option value="Poetic">Poetic</option>
              </select>
              {book}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Recommed;
