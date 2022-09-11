import React from "react";

import Footer from "components/Footers/Footer.js";

import Navbar from "components/Navbars/AuthNavbar.js";


export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')",
            
              }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative pt-16 pb-4 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    About us
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        The idea of MIC-PA originated way back in 2004 when our founder Mr. Rizwan Ahmad, a degree holder and Marine Chief Engineer Certificate of Competency decided to quit his sailing and start a career at the shore with an ambition to serve the betterment of seafarers’ life by counseling and continuous efforts to improve the safety of life at Sea within our capabilities.
                        He is an engineer of high caliber and served on various types of vessels for 13 years in companies like Soechi Lines, Gulf Petroleum, Vela International (Bahri now), etc., Staring on shore as a Marine Engineer Superintendent,  he climbed to the rank of Senior Fleet Manager, heading a team of Superintendents managing a fleet of gas/oil/chemical tankers and of all sizes, including VLCCs engaged on worldwide trading.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
