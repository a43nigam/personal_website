"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

// Project data structure
const projects: { [key: string]: any } = {
  "ml-research": {
    title: "ML Research (Current)",
    images: ["/cmu1.png"],
    content: `I am working to create a ML model which has a physics-inspired architecture. The idea is to 
project fields from tokens, and evolve/interfere these fields via learned operators to model the evolution
or progression of a system. This field-based mechanism theoretically has some inductive bias to improve learning
on PDE solving tasks and time-series data. It is also O(N) (kind of) which makes it
efficient for long token sequences. So far we have demostrated that the model is able to learn well on time-series data.`
  },
  "mechanical-engineer": {
    title: "Magnetic Levitation/Propulsion",
    images: [],
    content: 'I am in charge of magnetic systems for Cornell Hyperloop, a student run engineering team.',
    additionalSections: [
      {
        content: `For <b>levitation</b>, I adapted a team member's 1 magnet, 1 DoF code to write a 3 DoF code of a 4-magnet system. We're making a small-scale demonstrator for levitation (minipod) which these controls will be implemented on. See the code <a href="https://github.com/a43nigam/hyperloopLevControls" style="color: #ef4444;" target="_blank"><u>here</u></a>.

        </br></br> I designed the circuit for levitation control; we vary current into electromagnets to control force, so we needed a robust circuit which could ensure that we were driving the correct current into our electromagnets, even as resistances in the system changed due to heat.
        
        </br></br> I also designed the test apparatus for levitation, which allows us to characterize the performance of one or more of our magnets on our actual track.`
      },
      {
        content: 'For <b >propulsion</b>, we are designing and manufacturing a custom linear induction motor. For this, I wrote a script to calculate thrust and slip velocity given motor parameters, which allowed us to make initial design decisions. We are also using ANSYS Maxwell to simulate motor performance. Based on these results, we will laser cut silicon steel sheet and laminate it to form the stator. </br></br> I designed test systems for our propulsion system as well. We have a flywheel test rig and a thrust test rig - the flywheel rig enables characterization of top speed, and the thrust rig helps find maximum force produced from a standstill. '

      }
    ]
  },
  "quantum-nanomaterial": {
    title: "Quantum Nanomaterial Research (Current)",
    images: [],
    content: `At CMU, I worked with the LIQUID group (Prof. Jyoti Katoch) to study exotic 2D materials. We collaborate with Berkeley Lab
to perform nanoARPES, which enables direct imaging of the band structure of 2D materials. I designed and built a
cryogenic 2D material transfer station to enable exfoliation and stacking of heterostructures at low temperatures.`,
    additionalSections: [
      {
        content: `At Cornell, I worked with Prof. Kenji Yasuda's group. While there, I recieved an grant to study the effects of strain 
on topological phase transitions, specifically relating to superconductivity, 
in twisted bilayer graphene - <a href="https://drive.google.com/file/d/1YqmvLswqt_TtEVW7aM7dI__Ce7M3N3gr/view?usp=sharing" style="color: #ef4444;" target="_blank"><u>read more</u></a>.
I also designed and built a probe which allows us to characterize our samples at 
very cold (&lt;20K) temperatures in a cryostat. <a href="https://drive.google.com/file/d/1IuZToAt6wPuzQhtcjHU-t1dLO8-oafNR/view?usp=sharing" style="color: #ef4444;" target="_blank"><u>Read more</u></a>.`
      }
    ]
  },
  "ionospheric-plasma": {
    title: "Ionospheric Plasma Research",
    images: ["/af.jpg"],
    content: `Worked at the space vehicles division of the Air Force Research Lab at Kirtland AFB in Albuquerque, NM. 
Designed and integrated an experiment to study ionospheric plasmas, studied materials used in satellite engineering.`
  },
  "microchannel-detector": {
    title: "Microchannel Plate Particle Detector",
    images: ["/uchicago.png"],
    content: `Worked with Professor Henry Frisch at UChicago to identify applications of 
laminated microchannel plates (developed originally for neutrino detection) in 
medical devices, specifically PET scanners. I did some preliminary experimentation at Cornell
and planned on working with Dr. Frisch during the summer of 2024, but funding eventually fell through.
Here is the <a href="https://drive.google.com/file/d/1tpD9lRtIwuELRE6dxN9GMo4vOKZFmOUK/view?usp=sharing" style="color: #ef4444;" target="_blank"><u>research proposal</u></a>.`
  },
  "tennis-launcher": {
    title: "Automatic Tennis Ball Launcher",
    images: [],
    content: `This was my first exposure to real-world engineering. I designed the entire system from scratch 
in Fusino 360 and had to engineer my machine under a budget. This being my first real project, I documented
it very poorly - it was also a few years ago during the pandemic. I've done my best to document it <a href="https://drive.google.com/file/d/1QikwpGcgBHDIERVQPPPHPemorV9nE2zY/view?usp=sharing" style="color: #ef4444;" target="_blank"><u>here</u></a>.`
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const project = projects[params.id];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <main className="container mx-auto my-12 px-4 w-full max-w-2xl">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
          <p className="text-gray-600">Project not found</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="container mx-auto my-12 px-4 w-full max-w-2xl">
        <header className="w-full py-6 text-gray-800">
          <div className="container flex flex-col">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-4 self-start"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
            <h1 className="text-3xl font-bold">{project.title}</h1>
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
          <div className="flex items-center mb-4">
            {project.images.map((img: string, idx: number) => (
              <img key={idx} src={img} alt="" className="w-6 h-6 mr-2" />
            ))}
          </div>
          <div
            className="text-gray-700 text-sm"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
          {project.additionalSections && project.additionalSections.map((section: any, idx: number) => (
            <div key={idx} className="mt-4">
              <br />
              <div
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
