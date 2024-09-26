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
  const [expandedSchoolIndex, expandedWorkIndex, setExpandedWorkIndex] = useState(-1);
  const [expandedSchoolIndex, expandedStartupIndex, setExpandedStartupIndex] = useState(-1);

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
            Hey, I&apos;m Anubhav, but some of my friends call me Bhuvy. I grew up in the suburbs of Chicago
            and lived there my whole life before coming to college. I like to cook/eat <a href="https://www.instagram.com/bubbles_eats_fr/" style={{ color: '#ef4444' }}><u>food</u></a>
               &nbsp;and play/watch sports, but mostly play tennis, golf, and snowboard. I also like music -
              I play the piano and saxophone, and plan on learning the guitar soon.
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/16j60NBSmHNwY7mJ_Yj_ZQdxC7eNpR_Tw/view?usp=share_link"
              style={{ color: '#ef4444' }}
            >
              <u>Resume Link</u>
            </a>
            <br />
          </p>
        </section>

        <section className="bg-white py-6 border-black bg-yellow-100">
          <h2 className="text-md font-semibold mb-4">School</h2>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(0)}
            >
              <div className="flex items-center">
                <img src="/cu.png" alt="Cornell" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black">Cornell - Applied & Engineering Physics (B.S.)</h3>
              </div>
              {expandedEducationIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 0 && (
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
          <h2 className="text-md font-semibold mb-4">Work</h2>
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
                  <span className="font-semibold">
                    Studying superconducting superlattices
                  </span>{" "}
                  Work in Yasuda Lab to use van der Waals materials to fabricate/study low dimensional heterostructures - 
                  these have applications in non-volatile memory and quantum information science. See projects for more info.
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
                  <span className="font-semibold">
                    Ionospheric plasma physics / Materials development
                  </span>{" "}
                  Experimentally modelled ionospheric plasma behavior. Explored novel processes to 
                  develop materials relevant to the Space Force.
                  ).
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
                  <span className="font-semibold">
                    Magnetic thrust and levitation
                  </span>{" "}
                  Worked with the team to design, engineer, and implement a linear induction motor in our pod.
                  Currently working to engineer maglev.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-6">
          <span className="flex space-x-2 items-center mb-4">
            <h2 className="text-md font-semibold text-black">Past Projects</h2>
            <h2 className="italic text-xs">(Build quick, fail fast)</h2>
          </span>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(0)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">Gekko (2024)</h3>
              </div>
              {expandedStartupIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 0 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    GPTs for Canvas courses.
                  </span>{" "}
                  This was a cool project that I was able to work with a friend
                  on. This died because we were building a product that
                  didn&apos;t provide clear value to our customers (schools).
                  What we built was intuitively useful for students, but it
                  wasn&apos;t something schools were willing to adopt. <br />
                  <br />
                  Learning:{" "}
                  <span className="font-semibold">Talk with customers.</span>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(1)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">TaskRaise (2023-2024)</h3>
              </div>
              {expandedStartupIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 1 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Two-sided marketplace for labor seekers and fundraising
                    organizations.
                  </span>{" "}
                  I was able to build this a lot faster. This died because there
                  is a lot of red tape when student/youth labor is involved in
                  anything. Customers were totally game with the idea until
                  insurance and legal documents had to be filed, then it became
                  a logistical nightmare.
                  <br />
                  <br />
                  Learning:{" "}
                  <span className="font-semibold">
                    Understand and plan the &quot;how&quot; of your product
                    early.
                  </span>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(2)}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black">MathRanks (2022-2023)</h3>
              </div>
              {expandedStartupIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedStartupIndex === 2 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Online elo-based math competitions.
                  </span>{" "}
                  This was my first taste of development and building any sort
                  of product. This died as I got busy with college apps and
                  robotics. Learned tons about product vision and development.
                  <br />
                  <br />
                  Learning:{" "}
                  <span className="font-semibold">
                    Baptism by fire is a great way to learn.
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
