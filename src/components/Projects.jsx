import React from "react";

function Projects() {
  return (
    <div className="bg-slate-900 box-border w-full h-auto flex justify-center ">
      <section
        id="Projects"
        className="bg-slate-900 mt-16 sm:mt-34 h-auto w-full sm:w-4/6 sm:h-auto px-4 sm:px-6 lg:px-8 "
      >
        <p className="font-bold font-real text-left text-orange-400 text-xl sm:text-3xl">
          ../Projects
        </p>
        <div className="w-full flex items-center justify-center ">
          <div className="p-8 mt-12 gap-8 gap-y-8 flex justify-center flex-wrap gap-4">
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    City Weather Application
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Developed a weather application with responsive UI where you
                  can search for current weather condition in a city.
                </p>
                <p className="mt-3 mb-3 font-real text-orange-400 font-bold">
                  ReactJS, TailwindCSS and OpenWeatherMap
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://api-weather-git-main-sean-roxas-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-slate-700"
                  >
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/seanroxas/ApiWeather"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    To-Do List
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Developed a simple to-do list with responsive UI and with
                  functionalities such as add task, move task up and down,
                  delete task.
                </p>
                <p className="mt-4 mb-10 font-real text-orange-400 font-bold">
                  ReactJS and TailwindCSS
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://todolistsean.netlify.app"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-slate-700"
                  >
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/seanroxas/todolistSeanRoxas"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    Chat Application // WIP
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Currently Developing a real-time chat application with user
                  authentication and other chat application features.
                </p>
                <p className="mt-4 mb-10 font-real text-orange-400 font-bold">
                  MERN, Socket.io and TailwindCSS
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://github.com/seanroxas/ChatAppSean"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    Video Game List
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Developed a user controlled list for video games where user
                  can do CRUD in the list. it uses mongoDB for the database
                </p>
                <p className="mt-4 mb-10 font-real text-orange-400 font-bold">
                  MERN and TailwindCSS
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://github.com/seanroxas/VideoGameStore"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    Seminar Attendance Wesbite
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Developed a Seminar Attendance Website where teachers can see
                  the status of the students attendance. and where students can
                  login to change their attendance
                </p>
                <p className="mt-4 mb-10 font-real text-orange-400 font-bold">
                  SpringBoot, MySQL, Javascript and Java
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://github.com/seanroxas/attWeb"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-slate-600 font-real rounded-lg shadow">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-real font-extrabold tracking-tight text-white">
                    LOKAL: Android Route Replay Application
                  </h5>
                </a>
                <p className="mb-3 font-real text-white">
                  Developed an Android application that enables administrators
                  to visualize the users' routes in a day using Kotlin, Python,
                  JavaScript, and Firebase.
                </p>
                <p className="mt-4 mb-10 font-real text-orange-400 font-bold">
                  Kotlin, Firebase, Python and JavaScript
                </p>

                <div className="flex justify-center gap-4 mt-4 md:mt-6">
                  <a
                    href="https://drive.google.com/file/d/1hBDRt2J2URpMIqnxJ-KTxf6VdPTHAVeP/view?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700"
                  >
                    Download APK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <a
            href="https://github.com/seanroxas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 px-6 text-lg font-medium text-white bg-slate-500 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            <span className="mr-3">GitHub Repository</span>
            <svg
              className="text-white h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.13-1.11-1.43-1.11-1.43-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.37 1.1 2.95.84.09-.65.35-1.1.64-1.35-2.24-.26-4.61-1.12-4.61-4.97 0-1.1.39-2 1.04-2.71-.1-.27-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.69.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.56 1.38.21 2.39.1 2.66.65.71 1.04 1.61 1.04 2.71 0 3.86-2.38 4.71-4.62 4.97.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 10 0"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
