import WorkInfo from "../components/work-info";

const WorkExperience = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col">
      <div className="absolute inset-0 bg-[url('/working-background.jpg')] bg-cover bg-center rounded-3xl" />
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />

      <div className="z-10 flex flex-col gap-y-10 text-white p-8">
        <h1 className="text-center text-5xl font-jetbrains">Work Experience</h1>
        <WorkInfo
          companyName={"SOCOE"}
          location={"Sarawak, Malaysia"}
          designation={"Software Developer"}
          workingPeriod={"Feb 2025 - April 2025"}
          workingDetails={[
            "Develop the web-based system for the Sarawak state government",
            "Handle both frontend and backend development using ReactJS and Laravel",
            "Conduct functional and performance testing to ensure system reliability",
          ]}
        />
        <WorkInfo
          companyName={"KARUNA (SARAWAK) ENTERPRISE SDN. BHD."}
          location={"Sarawak, Malaysia"}
          designation={"Mobile Application Developer (Internship)"}
          workingPeriod={"Sep 2023 - Feb 2024"}
          workingDetails={[
            "Developed a mobile application for creating online parking coupons using the React Native framework",
            "Led the frontend development of 90% of the app interface",
            "Performed functional and performance testing throughout development",
            "Integrated text recognition (OCR) capabilities into the application",
          ]}
        />
      </div>
    </div>
  )
}

export default WorkExperience;