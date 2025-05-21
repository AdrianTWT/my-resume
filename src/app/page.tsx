import Image from "next/image";
import Summary from "./tabs/summary";
import Headline from "./headline";
import AboutMe from "./tabs/about-me";
import WorkExperience from "./tabs/work-experience";
import Education from "./tabs/education";
import Project from "./tabs/project";
import Skill from "./tabs/skill";

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-100">

      <Headline />

      <div className="flex p-10 gap-x-10 justify-around">
        <Summary />
        <AboutMe />
      </div>

      <div className="px-8">
        <WorkExperience />
      </div>

      <div className="p-8">
        <Education />
      </div>

      <Project />

      <div className="p-8">
        <Skill />
      </div>
    </div>
  );
}
