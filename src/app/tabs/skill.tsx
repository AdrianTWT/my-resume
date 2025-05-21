"use client"

const Skill = () => {
  const skillContainerStyle = "relative rounded-lg p-6 pt-12 w-[60%] shadow-md hover:scale-110 transform-all duration-200";
  const skillTitleStyle = "absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-4 py-1 text-2xl font-bold rounded-md shadow";

  return (
    <div className="w-full h-[80vh] flex flex-col gap-y-20">
      <h1 className="text-center text-5xl font-jetbrains">Skills</h1>

      <div className="flex gap-x-10">
        <div className={`${skillContainerStyle}`}>
          <div className="absolute inset-0 bg-[url('/qualification-background.jpg')] bg-cover bg-center shadow-lg rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />

          <h2 className={skillTitleStyle}>Qualification</h2>
          <p className="text-xl text-white relative z-10">
            Earned a certificate for completing the course &apos;
            <a
              href="https://www.udemy.com/certificate/UC-b37fef98-819e-4bc6-9af7-42848c956cea/"
              target="_blank"
              className="hover:text-blue-400 underline text-blue-300"
            >
              React Native - The Practical Guide [2024]
            </a>
            &apos; on Udemy.
          </p>
        </div>

        <div className={skillContainerStyle}>
          <div className="absolute inset-0 bg-[url('/language-background.jpg')] bg-cover bg-center shadow-lg rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />

          <h2 className={skillTitleStyle}>Languages</h2>
          <ul className="list-disc pl-5 space-y-1 text-xl text-white relative z-10">
            <li>Native in Mandarin, Hokkien</li>
            <li>Fluent in English</li>
            <li>Intermediate in Malay</li>
          </ul>
        </div>

        <div className={`${skillContainerStyle} w-[80%]`}>
          <div className="absolute inset-0 bg-[url('/skill-background.jpg')] bg-cover bg-center shadow-lg rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />

          <h2 className={skillTitleStyle}>Technical Skills</h2>
          <ul className="list-disc pl-5 space-y-1 text-xl text-white relative z-10">
            <li>Advanced in C++, JavaScript, HTML/CSS</li>
            <li>Proficient in Java, PHP, Python</li>
            <li>Experienced in React Native framework, Blender 3D, Unity Game Engine</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill;