import React from "react";
import Link from "next/link";

import router from "next/router";

export default function Navbar({ textColorDark = false }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={`${textColorDark ? 'text-blueGray-700' : 'text-white'} text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
                href="#pablo"
              >
                MIC-PA
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none p-8" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/in/rizwan-ahmad-6b164445/"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-linkedin text-lg leading-lg "></i>
                  <span className="lg:hidden inline-block ml-2">Rizwan Ahmad</span>
                </a>
              </li>
              <li className="flex items-center">
                <button
                  style={{ width: '100px' }}
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => router.push('/profile')}
                >
                  About us
                </button>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="flex items-center ">
                <button
                  style={{ width: '100px' }}
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"

                  onClick={() => router.push('/contact_us')}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
