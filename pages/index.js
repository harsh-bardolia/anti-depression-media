import Head from "next/head";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import { useEffect, useState } from "react";
import Content from "./components/Content";

export default function Home() {
  const [x, setX] = useState(false);

  const toggleTheme = () => {
    setX(!x);
  };

  return (
    <div className={`${x ? "dark" : ""} overflow-x-none pt-10`}>
      <Head>
        <title>Anti Depression Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* Header */}
      <div>
        <Header onDarkToggle={toggleTheme} />

        {/* Banner */}
        <Banner />

        <div className="flex flex-col bg-white lg:flex-row dark:bg-gray-700 p-2">
          {/* Mission */}

          <Content
            tellContent="OUR MISSION"
            paraGraph="To determine the initial stage of a depression and also provide the way
        to overcome from this situation. For that, we provide some
        recommendations like songs, movies, books, based on user interest. And
        if stage is higher, then we also suggest a doctor for you."
          />

          {/* Plans */}
          <Content
            tellContent="OUR PLANS"
            paraGraph="Anti Depression Media means managing & challenging tasks throughout
        continuous Improvements and Innovations. We believe in empowering and
        encouraging people to aware about depression and to overcome from it. We
        believe in Teamwork and individual excellence in self-belief & trusting
        You."
          />
        </div>

        {/* Subscribe */}
        <Subscribe />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
