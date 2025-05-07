import {
  BuildingOfficeIcon,
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const WorkInfo = ({
  companyName,
  location,
  designation,
  workingPeriod,
  workingDetails,
}) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white/20 p-4 rounded-lg hover:bg-white/80 hover:text-black transform-all duration-300">
      <div className="flex justify-between">
        <span className="flex gap-x-2 text-blue-400 items-center">
          <BuildingOfficeIcon className="w-6 h-6" />
          <p className="font-bold">{companyName}</p>
        </span>

        <span className="flex gap-x-2 items-center">
          <p>{location}</p>
          <MapPinIcon className="w-6 h-6" />
        </span>
      </div>

      <div className="flex justify-between">
        <span className="flex gap-x-2 items-center">
          <BriefcaseIcon className="w-6 h-6" />
          <p>{designation}</p>
        </span>

        <span className="flex gap-x-2 items-center">
          <p>{workingPeriod}</p>
          <CalendarIcon className="w-6 h-6" />
        </span>
      </div>

      <ul className="list-disc pl-5 space-y-1">
        {workingDetails.map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkInfo;
