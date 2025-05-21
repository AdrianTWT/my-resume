"use client"

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Project = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="flex w-full h-[80vh]">
      <div className={`relative transition-all ease-in-out duration-1000 overflow-hidden ${isDetailsOpen ? 'w-[70vw]' : 'w-full'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/project-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative flex z-10 text-white h-full p-8 items-center justify-center transform-all duration-500">
          <h1 className="text-center text-5xl font-jetbrains">University Project</h1>
          <button className="cursor-pointer hover:scale-110 transform-all duration-200" onClick={() => setIsDetailsOpen(!isDetailsOpen)}>
            <ArrowRightCircleIcon className={`ml-4 w-12 h-12 text-white hover:text-green-400 transform-all duration-500 ${isDetailsOpen && 'rotate-180'}`} />
          </button>
        </div>

      </div>

      <div className={`flex transition-all ease-in-out duration-1000 overflow-hidden ${isDetailsOpen ? 'max-w-[30vw] max-h-[80vh] m-2' : 'max-w-0 max-h-0'} items-center`}>
        <div className="w-[30vw] p-4 rounded-lg bg-gradient-to-r from-white via-blue-100 to-white hover:from-blue-100 hover:via-white hover:to-blue-100 shadow-lg hover:shadow-xl transform-all transition-colors duration-500">
          <p className="text-center font-bold mb-2">Final Year Project - 2D Role-Playing Game With Educational Purpose Related To Malaysia Cultures And History</p>
          <ul className="list-disc pl-5 space-y-4 text-justify">
            <li>Designed the framework of the 2D RPG based on Malaysia cultures and history as a guideline for the development phase</li>
            <li>Developed a desktop-based 2D RPG that is proven to improve students&apos; understanding of the knowledge effectively</li>
            <li>Managed character design, level design, UI/UX design, storyline, combat mechanics, animations, coding singlehandedly</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project;