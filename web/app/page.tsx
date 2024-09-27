"use client";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Home() {
  const [expandedSchoolIndex, setExpandedSchoolIndex] = useState(-1);
  const [expandedWorkIndex, setExpandedWorkIndex] = useState(-1);
  const [expandedStartupIndex, setExpandedStartupIndex] = useState(-1);

  const handleSchoolItemClick = (index: number) => {
    setExpandedSchoolIndex(expandedSchoolIndex === index ? -1 : index);
  };

  const handleWorkItemClick = (index: number) => {
    setExpandedWorkIndex(expandedWorkIndex === index ? -1 : index);
  };

  const handleStartupItemClick = (index: number) => {
    setExpandedStartupIndex(expandedStartupIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="container mx-auto my-12 px-4 w-full max-w-2xl">
        <header className="w-full py-6 text-gray-800">
          <div className="container flex flex-col">
            <h1 className="text-3xl font-bold">Anubhav Nigam</h1>
            <nav className="mt-4 flex">
              <a
                href="mailto:a43nigam@gmail.com"
                className="mr-2 hover:text-gray-400 border-gray-200 border rounded p-1"
              >
                <CiMail className="text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/anubhav-nigam/"
                className="mx-2 hover:text-gray-400 border-gray-200 border rounded p-1"
              >
                <FaLinkedin className="text-gray-600" />
              </a>
              <a
                href="https://github.com/a3yu"
                className="mx-2 hover:text-gray-400 border-gray-200 border rounded p-1"
              >
                <FaGithub className="text-gray-600" />
              </a>
            </nav>
          </div>
        </header>
        <section className="bg-white pb-4 border-gray-200">
          <p className="text-gray-600 text-sm">
            Hey, I&apos;m Anubhav, but some of my friends call me Bhuvy. I like to cook/eat <a href="https://www.instagram.com/bubbles_eats_fr/" style={{ color: '#ef4444' }}><u>food</u></a>
               &nbsp;and play/watch sports, but mostly play tennis, golf, and snowboard. I also like music and play the piano and saxophone, 
              and plan on learning the guitar soon. The drop-downs below will tell you more about me professionally!
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/16j60NBSmHNwY7mJ_Yj_ZQdxC7eNpR_Tw/view?usp=share_link"
              style={{ color: '#ef4444' }}
            >
              <u>Resume Link</u>
            </a>
          </p>
        </section>

        <section className="bg-white py-6 border-gray-200">
          <span className="flex space-x-2 items-center mb-4">
            <h2 className="text-md font-semibold text-black">School</h2>
          </span>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleSchoolItemClick(0)}
            >
              <div className="flex items-center">
                <img src="/cu.png" alt="Cornell" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black">Cornell - Applied & Engineering Physics (B.S.)</h3>
              </div>
              {expandedSchoolIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedSchoolIndex === 0 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Coursework:
                  </span>{" "}
                    Lasers and Photonics, Spacecraft Propulsion, Nanofabrication and Electronic Characterization
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-6  border-gray-200">
          <span className="flex space-x-2 items-center mb-4">
            <h2 className="text-md font-semibold text-black">Work</h2>
          </span>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(0)}
            >
              <div className="flex items-center">
                <img src="/cu.png" alt="Cornell" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black">Cornell - Undergrad Researcher</h3>
              </div>
              {expandedWorkIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 0 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  Work in <a href="https://www.yasudalab.org" style={{ color: '#ef4444' }}><u>Yasuda Lab</u></a> to use 
                  van der Waals materials to fabricate/study low dimensional heterostructures, specifically superconducting 
                  superlattices - these have applications in non-volatile memory and quantum information science. See projects for more info.
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(1)}
            >
              <div className="flex items-center">
                <img
                  src="/sf.png"
                  alt="Space Force"
                  className="w-6 h-6 mr-2"
                />
                <h3 className="text-sm text-black">
                  Air Force Research Lab - Research Intern (DoD Secret)
                </h3>
              </div>
              {expandedWorkIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 1 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  Experimentally modelled and studied ionospheric plasma behavior. Explored novel processes to 
                  develop exotic materials relevant to the Space Force.
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(2)}
            >
              <div className="flex items-center">
                <img
                  src="/hyperloop.png"
                  alt="Hyperloop"
                  className="w-6 h-6 mr-2"
                />
                <h3 className="text-sm text-black">
                  Cornell Hyperloop - Mechanical Engineer
                </h3>
              </div>
              {expandedWorkIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 2 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  Worked with the team to design, engineer, and implement a linear induction motor in our pod.
                  Currently designing a maglev system.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-6">
          <span className="flex space-x-2 items-center mb-4">
            <h2 className="text-md font-semibold text-black">Past Projects</h2>
          </span>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(0)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">2D Transfer Station (Current)</h3>
              </div>
              {expandedStartupIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 0 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  I&apos;m designing a system for my lab which will allow us to transfer single molecule thick
                  layers of van der Waals materials to be able to stack them very precisely (±5µm).&nbsp;
                  <a href="https://www.instagram.com/bubbles_eats_fr/" style={{ color: '#ef4444' }}><u>Read More</u></a>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(1)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">Cryogenic Measurement System</h3>
              </div>
              {expandedStartupIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 1 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  I designed and built a probe for my lab which allows us to measure our samples at 
                  very cold (&lt;10K) temperatures. <a href="https://www.instagram.com/bubbles_eats_fr/" style={{ color: '#ef4444' }}><u>Read More</u></a>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(2)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">Automatic Tennis Ball Launcher</h3>
              </div>
              {expandedStartupIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 2 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  This was my first exposure to real-world engineering. I designed the entire system from scratch
                  in CAD and had to engineer my machine under a budget. <a href="https://www.instagram.com/bubbles_eats_fr/" style={{ color: '#ef4444' }}><u>Read More</u></a>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
