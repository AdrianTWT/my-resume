import {
  BuildingLibraryIcon,
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const EducationInfo = ({
  institution,
  location,
  course,
  studyPeriod,
  achievements,
}) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white/20 p-4 rounded-lg hover:bg-white/80 hover:text-black transform-all duration-300">
      <div className="flex justify-between">
        <span className="flex gap-x-2 text-blue-400 items-center">
          <BuildingLibraryIcon className="w-6 h-6" />
          <p className="font-bold">{institution}</p>
        </span>

        <span className="flex gap-x-2 items-center">
          <p>{location}</p>
          <MapPinIcon className="w-6 h-6" />
        </span>
      </div>

      <div className="flex justify-between">
        <span className="flex gap-x-2 items-center">
          <AcademicCapIcon className="w-6 h-6" />
          <p>{course}</p>
        </span>

        <span className="flex gap-x-2 items-center">
          <p>{studyPeriod}</p>
          <CalendarIcon className="w-6 h-6" />
        </span>
      </div>

      <ul className="list-disc pl-5 space-y-1">
        {achievements.map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationInfo;
