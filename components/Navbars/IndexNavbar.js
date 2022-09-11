import React from "react";
import Link from "next/link";
import router from "next/router";

export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="px-8 w-full px-4 flex items-center justify-between">
          <div className="w-full relative flex justify-between w-auto static block justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                <img src="/img/brand/micpalogo.png"/>
              </a>
            </Link>
          </div>
          <div
            className={
              "flex items-center bg-white bg-opacity-0 shadow-none block"
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-row list-none ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/in/rizwan-ahmad-6b164445/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-linkedin text-lg leading-lg "></i>

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
