import Head from "next/head";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import { useEffect, useState } from "react";
import Content from "./components/Content";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useUI } from "../Context/UIContext";

export default function Home() {
  const [x, setX] = useLocalStorage("Mode", false);

  const toggleTheme = () => {
    setX(!x);
  };

  const { user, setUser } = useUI();
  // const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("Login");
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
        // userInfo();
      } else {
        // console.log('Required');
        setUser(null);
        router.push("./login");
      }
    });
  }, [user]);

  return (
    <div
      className={`${
        x ? "dark" : ""
      } overflow-x-none pt-10 max-h-screen scrollbar-thin scrollbar-thumb-[#FF5A5F] scrollbar-track-gray-500 overflow-y-scroll`}
    >
      <Head>
        <title>Anti Depression Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* Header */}
      <div>
        <Header
          onDarkToggle={toggleTheme}
          name={user && user.name}
          photo={user && user.photoUrl}
        />

        {/* Banner */}
        <Banner />

        <div className="flex flex-col bg-white lg:flex-row scrollbar- dark:bg-gray-700 p-2">
          {/* Mission */}

          <Content
            tellContent="OUR MISSION"
            paraGraph="Our mission is to make people aware about depression and to break the myths of people about depression. We belive in empowering and encouraging people to give priority to their mental health."
          />

          {/* Plans */}
          <Content
            tellContent="FUTURE PLAN"
            paraGraph="To improve the web page and making it more interative for user by adding the chatbot. Providing our services for the betterment of our society is our main goal and we try to achieve by teamwork and individual excellence."
          />
        </div>
        {/* <DarkMode /> */}
        {/* Subscribe */}
        <Subscribe />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
