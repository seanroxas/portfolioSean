import React, { useState } from "react";
import PropTypes from "prop-types";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-900 sticky top-0">
        <div className="w-5/6 border-b-2 flex flex-wrap items-center justify-between mx-auto p-4">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="font-real self-center text-2xl font-semibold text-orange-400">
              ../SVR
            </span>
          </p>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <span className="font-real sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-slate-900">
              <li>
                <a
                  href="#AboutMe"
                  className="font-real block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#Experience"
                  className="font-real block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="font-real block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="font-real block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
