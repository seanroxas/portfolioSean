import React, { useState } from "react";
import PropTypes from "prop-types";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-900 fixed top-0 left-0 right-0 z-10 ">
        <div className="mx-auto w-full sm:w-5/6 px-2 sm:px-6 lg:px-8 border-b-2 border-white border-solid">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex inset-y-0 left-0 mr-10 flex items-center"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <button
                  className="text-white md:hidden focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="text-orange-400 text-3xl font-real font-bold ml-0">
                  ../SVR
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:block flex-grow">
                <div className="flex justify-end space-x-4">
                  <a
                    href="#Profile"
                    className="text-white
                      rounded-md px-3 py-2 text-md font-real font-medium"
                    aria-current="page"
                  >
                    About Me
                  </a>
                  <a
                    href="#Experience"
                    className="text-white
                      rounded-md px-3 py-2 text-md font-real font-medium"
                    aria-current="page"
                  >
                    Experience
                  </a>
                  <a
                    href="#Projects"
                    className="text-white
                      rounded-md px-3 py-2 text-md font-real font-medium"
                    aria-current="page"
                  >
                    Projects
                  </a>
                  <a
                    href="#Contact"
                    className="text-white
                      rounded-md px-3 py-2 text-md font-real font-medium"
                    aria-current="page"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="absolute top-0 left-0 w-full z-40 bg-slate-900 transition-all duration-300 ease-in-out">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
