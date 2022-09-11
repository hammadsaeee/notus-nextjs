/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-0 md:pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="md:pt-32 pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Maritime International Coronation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                MIC-PA is an effort to provide the best cost-effective shipping solutions to Industry and be the ultimate choice.
                Our motto is to only work on a win-win methodology and absolute transparency for an ever-lasting relationship with our affiliates at both ends.
              </p>

            </div>
          </div>
        </div>
        <img
          className="absolute hidden md:block top-25 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px rounded-tl-lg style=border-radius: 50%"
          src="https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          
          //src="/img/pattern_nextjs.png"

         // src="/img/index_main.png"
          alt="..."
        />
      </section>

      <section className="mt-0 md:mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container w-full mx-auto">
          <div className="flex flex-column flex-col md:flex-row items-top">
            <div className="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1552207802-77bcb0d13122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Our Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We are a team of high-caliber maritime professionals providing services in various marine-related Survey / Consultancy fields, some of which are listed hereunder.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full px-4 mt-4">
              <div className="flex flex-row">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                  Pre-Purchase / Condition Surveys
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                  <i className="fas fa-poll-h"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                  Pre-Chartering Survey
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                  <i className="fas fa-poll"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                  On/Off Hire Condition and Bunker Survey
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                  <i className="fas fa-indent"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                  Accident and Incident Investigations and Root Cause Analysis
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-flag"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                   Flag State Inspections
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                <i className="fas fa-unlink"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                P&I and H&M Condition / Damage Survey
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-band-aid"></i>
                  
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Expert Witness Survey, Investigation and Opinion for Law Firms
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-file-medical-alt"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Vessel Inspections and reporting for Owners, Managers, Charterers, Insurers, Banks and Law Firms
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fab fa-watchman-monitoring"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Superintendency / Project Supervision
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Marine and Technical Consultancy
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                <i className="fas fa-calculator"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                ISM, ISPS, ISO, MLC and Navigation Internal Audits
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-screwdriver"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Repair Supervision
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                <i className="fas fa-anchor"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Dry Docking Preparation & Supervision
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-toolbox"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Technical investigation
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-cubes"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                New building superintendency
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10   shadow-lg rounded-full bg-white">
                <i className="fas fa-tasks"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Project Management
                </h6>
              </div>
              <div className="flex flex-row mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-10 h-10  shadow-lg rounded-full bg-white">
                <i className="fab fa-docker"></i>
                </div>
                <h6 className="text-lg font-semibold pl-4 flex items-center justify-center">
                Ship chartering / Brokerage
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-12 pt-12 pb-20">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Our Team
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our team has a cumulative experience of more than 50 years.
                We are proud of our team due to Prompt response, factual reporting, ethical practices, and outstanding service to our clients. We are a dedicated team of Marine professionals with experience in carrying out Surveys/Inspections and providing Marine and Technical Superintendency on behalf of our clients, which include local and international clientele across the world.
                With qualified surveyors, adequate local knowledge and strategic office locations in Lisbon, we are well placed to serve the needs of the fleet en route to and from Asia and the US along with Europe.
                Our team holds vastly remarkable experience in dealing with intricate situations, tanker shipboard management and the interrelated facets. Their extensive expertise includes dry docking, financial disputes and claims, assessing damages and the linked surveys. Their sphere included SIRE/OCIMF Program-related overviews, Quay Apron and Berth Safety Audit, Root Cause Analysis, MOC Risk Assessments, TMSA follow-up, Audits (ISM/ISO Internal & External) and the Third Party Inspections.
                Their expertise in Performance Monitoring and Management, Formulation and Implementation of PMS, Customer Satisfaction, setting up KPIs, Contract/dispute Negotiations and Persuasion, Strategic Planning and Leadership is an asset that is available at a very affordable price for our prestigious customers.
              </p>
            </div>
          </div>
        </div>
      </section>


      
      <Footer />
    </>
  );
}
