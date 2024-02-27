import React, { useState } from "react";
import PropTypes from "prop-types";

function AboutMe() {
  return (
    <>
      <div className="bg-slate-900box-border w-full h-auto flex justify-center ">
        <section
          id="AboutMe"
          className="bg-slate-900 mt-16 sm:mt-44 h-auto w-full sm:w-4/6 sm:h-auto px-4 sm:px-6 lg:px-8 mb-20"
        >
          <div className="w-full flex items-center justify-center mb-12 ">
            <div className="">
              <p className="font-real text-left mt-4 text-3xl sm:text-5xl text-white ">
                Sean Vastian Roxas
              </p>
              <p className="font-real text-right mt-4 text-lg sm:text-xl text-orange-400 ">
                ../Full-Stack Developer
              </p>
              <div className="flex items-center justify-end space-x-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/sean-roxas/"
                  target="_blank"
                  className="text-3xl"
                >
                  <svg
                    className="text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/seanroxas"
                  target="_blank"
                  className="text-3xl"
                >
                  <svg
                    className="text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>

                <a
                  href="https://drive.google.com/file/d/1qhe_QSSg71mwQ3T7PlL7MN8txk0jFshW/view?usp=sharing"
                  target="_blank"
                  className="text-3xl"
                >
                  <svg
                    className="text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="font-medium mt-20 font-real text-left text-orange-400 text-xl sm:text-3xl">
            ../About
          </p>

          <p className="font-real text-left mt-4 text-white text-md sm:text-md ">
            I am a Full-Stack Developer from the Philippines, my passion lies in
            crafting comprehensive websites and applications. Currently, I am
            dedicated to honing my skills by creating projects in React, Node.js
            and other frameworks/languages, driven by a desire to expand my
            expertise in web development.
          </p>
          <p className="font-real text-left mt-4 text-white textmd sm:text-md">
            I obtained my degree in Bachelor of Science in Information
            Technology in Emilio Aguinaldo College-Manila in 2023.
          </p>
          <p className="font-real text-left mt-4 text-white textmd sm:text-md">
            Hoping you'd like what you see in my portfolio and is willing to
            contact me!
          </p>
        </section>
      </div>
    </>
  );
}
export default AboutMe;
