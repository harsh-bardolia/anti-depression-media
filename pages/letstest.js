import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Header from "./components/Header";

const Letstest = () => {
  const [x, setX] = useState(false);
  const toggleTheme = () => {
    setX(!x);
  };

  return (
    <div class={x ? "dark" : ""} className="overscroll-x-none w-full">
      <Header onDarkToggle={toggleTheme} />

      <div className="flex flex-col items-center mt-6 bg-white dark:bg-gray-700">
        <div className=" py-14 text-[4.2rem] sm:text-[4.5rem] md:text-[4.8rem] lg:text-[5.5rem] font-Josefin text-[#FF5A5F]">
          Let&apos;s Test
        </div>
        <div className="p-5 m-6 w-fill bg-gray-300 rounded-xl">
          <div className="p-5 m-1">
            <ul className="list-decimal list-outside ">
              {/* First Question */}
              <li key={1} className="text-start text-lg text-black font-bold">
                How often have you had little interest or pleasure in doing
                things?
              </li>

              <div className="py-2 text-black dark:text-red">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_one"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_one"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_one"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_one"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Second Question */}

              <li key={2} className="text-start text-lg text-black font-bold">
                How often have you had little interest or pleasure in doing
                things?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_two"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_two"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_two"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_two"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Third Question */}

              <li key={3} className="text-start text-lg text-black font-bold">
                How often have you been bothered by trouble falling or staying
                asleep, or sleeping too much?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_three"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_three"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_three"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_three"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Fourth Question */}

              <li key={4} className="text-start text-lg text-black font-bold">
                How often do you feel that all your hobbies and interests are
                boring and worthless and nothing can stimulate you?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_four"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_four"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_four"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_four"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Fiveth Question */}

              <li key={5} className="text-start text-lg text-black font-bold">
                How often have you been bothered by feeling bad about yourself,
                or that you are a failure, or have let yourself or your family
                down?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_five"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900 "
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_five"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_five"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_five"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Sixth Question */}

              <li key={6} className="text-start text-lg text-black font-bold">
                Are you afraid of forming a new relationship and feel scared of
                attachment?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_six"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_six"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_six"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_six"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              {/* Seventh Question */}

              <li key={7} className="text-start text-lg text-black font-bold">
                How often you have an anxiety attack (suddenly feeling fear or
                panic)?
              </li>
              <div className="text-start text-sm text-gray-600 font-medium">
                <p className="pt-3">
                  An anxiety or panic attack occurs when your body experiences a
                  rush of intense psychological (mental) and physical symptoms.
                </p>
                <p className="pt-3">
                  You may feel an overwhelming sense of fear, apprehension and
                  anxiety. As well as these feelings, you may also experience
                  physical symptoms such as:
                </p>
                <ul className="px-10 list-disc list-outside ">
                  <li key={0} className="text-gray-500">
                    Nausea
                  </li>
                  <li key={1} className="text-gray-500">
                    Sweating
                  </li>
                  <li key={2} className="text-gray-500">
                    Trembling
                  </li>
                </ul>
              </div>
              {/* Eigth Question */}

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              <li key={8} className="text-start text-lg text-black font-bold">
                How often have you been bothered by feeling nervous, anxious or
                on edge?
              </li>
              {/* Nineth Question */}
              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_seven"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_seven"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_seven"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_seven"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              <li key={9} className="text-start text-lg text-black font-bold">
                How often have you been bothered by feeling afraid as if
                something awful might happen?
              </li>
              {/* Tenth Question */}

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_eight"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_eight"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_eight"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_eight"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
              <li key={10} className="text-start text-lg text-black font-bold">
                How often do you feel guilty or tearful for no reason?
              </li>

              <div className="py-2 ">
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_ten"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Not at all
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_ten"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Several days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_ten"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    More than half the days
                  </label>
                </div>
                <div class="flex items-center pl-4 m-2 rounded border w-[20rem] border-gray-500 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="radio_ten"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="radio_ten"
                    class="py-4 ml-2 w-full text-md font-normal text-gray-900"
                  >
                    Nearly Everyday
                  </label>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#FF5A5F] flex justify-between py-3 px-6 text-white rounded-lg shadow-sm hover:shadow-xl active:scale-90 transition duration-150 ">
              Submit
              <ArrowRightCircleIcon className="pl-3 h-6 items-center text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letstest;
