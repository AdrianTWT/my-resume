import EducationInfo from "../components/education-info";

const Education = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col">
      <div className="absolute inset-0 bg-[url('/education-background.jpg')] bg-cover bg-center rounded-3xl shadow-lg" />
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />

      <div className="z-10 flex flex-col gap-y-10 text-white p-8">
        <h1 className="text-center text-5xl font-jetbrains">Education & Extracurricular</h1>
        <EducationInfo
          institution={"UNIVERSITI TEKONOLOGI MALAYSIA (UTM)"}
          location={"Johor, Malaysia"}
          course={"Bachelor of Computer Science (Graphics and Multimedia Software) with Honours"}
          studyPeriod={"2020 - 2024"}
          achievements={[
            "CGPA: 3.91/4.00",
            "Recipient of Yayasan Sarawak Scholarship",
            "Recipient of Dean's List all semesters",
            "Developed a 2D role-playing game with an educational focus on Malaysia's culture and history as the final year project",
            "Participated in the Microsoft APAC AI for Accessibility Hackathon 2023",
          ]}
        />
        <EducationInfo
          institution={"SMK BATU LINTANG"}
          location={"Sarawak, Malaysia"}
          course={"Malaysian Higher School Certificate (STPM) - Science Stream"}
          studyPeriod={"2018 - 2019"}
          achievements={[
            "CGPA: 3.83/4.00",
            "Recipient of Academic Award of Best Student Form 6 Semester 3 (Science)",
            "Honorable Mention Recipient of Kangaroo Math Competition (KMC) 2019",
          ]}
        />
      </div>
    </div>
  )
}

export default Education;