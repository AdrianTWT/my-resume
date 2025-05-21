import { MapPinIcon, PhoneIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 font-jetbrains text-center">About Me</h1>
      <div className="w-[40vw] h-[50vh] flex flex-col gap-y-2 items-center justify-center rounded-3xl bg-gradient-to-r from-white via-blue-100 to-white hover:from-blue-100 hover:via-white hover:to-blue-100 shadow-lg hover:shadow-xl transform-all transition-colors duration-500">
        {/* <div className="flex gap-x-4"> */}
          <div className="flex gap-x-2">
            <MapPinIcon className="w-6 h-6" />
            <p>Sarawak, Malaysia</p>
          </div>
          <div className="flex gap-x-2">
            <PhoneIcon className="w-6 h-6" />
            <p>+60 1126833853</p>
          </div>
        {/* </div> */}

        <div className="flex gap-x-2">
          <EnvelopeIcon className="w-6 h-6" />
          <p>adriantwt@hotmail.my</p>
        </div>

        <div className="flex gap-x-2">
          <LinkIcon className="w-6 h-6" />
          <a
            href="https://www.linkedin.com/in/adrian-teo-wei-tak/"
            target="_blank"
            className="hover:text-blue-800 underline text-blue-600"
          >
            https://www.linkedin.com/in/adrian-teo-wei-tak/
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;