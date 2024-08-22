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
  const [expandedWorkIndex, setExpandedWorkIndex] = useState(-1);
  const [expandedStartupIndex, setExpandedStartupIndex] = useState(-1);

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
            <h1 className="text-3xl font-bold">Aedin Yu</h1>
            <nav className="mt-4 flex">
              <a
                href="mailto:aedinyu05@gmail.com"
                className="mr-2 hover:text-gray-400 border-gray-200 border rounded p-1"
              >
                <CiMail className="text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/aedin-yu/"
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
            I pursue exciting and impactful things.
            <br />
            <br /> I am currently building Fermata, a tool to analyze dataset
            quality.
            <br />
            <br />I built my first robot in middle school, since then I have
            always been obsessed with the crossover between hardware and
            computers. In the past, I have built computer vision systems for
            melanoma diagnosis and currently work on vision systems at John
            Deere for autonomy and automation.
          </p>
        </section>

        <section className="bg-white py-6  border-gray-200">
          <h2 className="text-md font-semibold mb-4">Work</h2>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(0)}
            >
              <div className="flex items-center">
                <img src="/jd.png" alt="John Deere" className="w-6 h-6 mr-2" />
                <h3 className="text-sm">John Deere - SWE Intern</h3>
              </div>
              {expandedWorkIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 0 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Perception systems for automation and autonomy.
                  </span>{" "}
                  Worked on making ML models for multispectral perception
                  systems. Worked on really interesting projects, super sharp
                  peers, and overall a great time.
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(1)}
            >
              <div className="flex items-center">
                <img
                  src="/cu.png"
                  alt="Cornell University"
                  className="w-6 h-6 mr-2"
                />
                <h3 className="text-sm">
                  Cornell University - Undergraduate Researcher
                </h3>
              </div>
              {expandedWorkIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 1 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Modular tools for researchers to run causal inference
                    experiments better.
                  </span>{" "}
                  Making intuitive tools for non-programmers to use is an
                  interesting design challenge. This job really changed how I
                  approach architecting systems.
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleWorkItemClick(2)}
            >
              <div className="flex items-center">
                <img
                  src="/jh.png"
                  alt="Johns Hopkins"
                  className="w-6 h-6 mr-2"
                />
                <h3 className="text-sm">
                  Johns Hopkins - Machine Learning Researcher
                </h3>
              </div>
              {expandedWorkIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedWorkIndex === 2 && (
              <div className="text-sm transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Low cost computer vision system that diagnoses malignant
                    skin lesions.
                  </span>{" "}
                  This was apart of my high school ISEF project. This is where
                  my interest for computer vision was birthed.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-6">
          <h2 className="text-md font-semibold mb-4">Graveyard</h2>
          <div className="space-y-2">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(0)}
            >
              <div className="flex items-center">
                <h3 className="text-sm">Gekko (2024)</h3>
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
                  <span className="font-semibold">
                    Be more in tune with customer base. Talk with them early and
                    understand their values.
                  </span>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(1)}
            >
              <div className="flex items-center">
                <h3 className="text-sm ">TaskRaise (2023-2024)</h3>
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
                    Understand and plan the "how" of your product early. Think
                    deeply about what to emphasize and what could be an issue.
                  </span>
                </p>
              </div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2"
              onClick={() => handleStartupItemClick(2)}
            >
              <div className="flex items-center">
                <h3 className="text-sm">MathRanks (2022-2023)</h3>
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
                    Baptism by fire is a great way to learn. Learn by doing.
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
