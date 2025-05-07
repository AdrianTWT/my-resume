import Image from "next/image";
import Summary from "./tabs/summary";
import Headline from "./headline";
import AboutMe from "./tabs/about-me";
import WorkExperience from "./tabs/work-experience";
import Education from "./tabs/education";

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

      {/* Add a section called University Project, with two sections: 
          First one with only the title and my fyp video/gif as the background.
          Second one will be opened with the button on the first one (add smooth transition), it contains the details.
       */}

      <div className="bg-yellow-100 w-full h-[100vh] flex flex-col items-center justify-center">
        <p>hi</p>
      </div>
    </div>
  );
}
