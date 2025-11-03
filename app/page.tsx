"use client";
import { useRouter } from "next/navigation";
import { CiMail } from "react-icons/ci";
import {
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const router = useRouter();

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
                target="_blank"
              >
                <CiMail className="text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/anubhav-nigam/"
                className="mx-2 hover:text-gray-400 border-gray-200 border rounded p-1"
                target="_blank"
              >
                <FaLinkedin className="text-gray-600" />
              </a>
            </nav>
          </div>
        </header>
        <section className="bg-white pb-4 border-gray-200">
          <p className="text-gray-600 text-sm">
            Hey, I&apos;m Anubhav. I like to cook/eat food, play tennis, golf, and snowboard. I also play piano, saxophone, and guitar
            <br></br>
            <br></br>
            <h3>Tools I&apos;ve used: Python, Mathematica, MATLAB, SolidWorks, Ansys, LabVIEW, EaglePCB, Photo/E-Beam Lithography, AFM Microscopy</h3>
            <br></br>
            <h3>In physics, I&apos;m interested in 2d materials (topological states!) and magnetic confinement fusion.</h3>
              <br></br>
              <h3>In engineering, I&apos;m interested in spacecraft systems design and plasma propulsion.</h3>
          </p>
        </section>

        <section className="bg-white py-6">
          <span className="flex space-x-2 items-center mb-4">
            <h2 className="text-md font-semibold text-black">Projects</h2>
          </span>
          <div className="space-y-2">
            
            {/* <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 hover:text-gray-600"
              onClick={() => router.push("/projects/ml-research")}
            >
              <div className="flex items-center">
                <img src="/cmu1.png" alt="CMU" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black">ML Research (Current)</h3>
              </div>
            </div> */}

            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 group"
              onClick={() => router.push("/projects/mechanical-engineer")}
            >
              <div className="flex items-center">
                <img src="/hyperloop.png" alt="hyperloop" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black group-hover:text-gray-400">Magnetic Propulsion/Levitation</h3>
              </div>
            </div>
            
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 group"
              onClick={() => router.push("/projects/quantum-nanomaterial")}
            >
              <div className="flex items-center">
                <img src="/cmu1.png" alt="CMU" className="w-6 h-6 mr-2" />
                <img src="/cu.png" alt="CU" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black group-hover:text-gray-400">Quantum Nanomaterial Research</h3>
              </div>
            </div>
          
            {/* <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 group"
              onClick={() => router.push("/projects/ionospheric-plasma")}
            >
              <div className="flex items-center">
                <img src="/af.jpg" alt="af" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black group-hover:text-gray-400">Ionospheric Plasma Research</h3>
              </div>
            </div> */}
            
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 group"
              onClick={() => router.push("/projects/microchannel-detector")}
            >
              <div className="flex items-center">
                <img src="/uchicago.png" alt="uchicago" className="w-6 h-6 mr-2" />
                <h3 className="text-sm text-black group-hover:text-gray-400">Microchannel Plate Particle Detector</h3>
              </div>
            </div>
            
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-2 group"
              onClick={() => router.push("/projects/tennis-launcher")}
            >
              <div className="flex items-center">
                <h3 className="text-sm text-black group-hover:text-gray-400">Automatic Tennis Ball Launcher</h3>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
