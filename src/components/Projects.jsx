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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
