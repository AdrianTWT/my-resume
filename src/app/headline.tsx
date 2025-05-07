import Image from "next/image"

const Headline = () => {
  const keywordStyle = "font-jetbrains border py-2 px-4 rounded-lg hover:bg-white hover:text-black hover:scale-110 transform-all duration-500";

  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/coding-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="z-10 flex flex-col items-center">
        <div className="group w-48 h-60 perspective">
          <div className="relative w-full h-full rounded-lg transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
            <Image
              src="/my-photo.jpg"
              alt="My Photo"
              fill
              className="absolute rounded-lg shadow-md object-cover backface-hidden"
            />
            <Image
              src="/casual-photo.jpg"
              alt="My Photo"
              fill
              className="absolute rounded-lg shadow-md object-cover backface-hidden rotate-y-180"
            />
          </div>
        </div>
        <div className="p-4 text-4xl font-bold text-white">
          <p className="font-jetbrains">Adrian Teo Wei Tak</p>
        </div>
        <div className="flex gap-x-8 text-white">
          <p className={keywordStyle}>Computer Science</p>
          <p className={keywordStyle}>Mobile Application Development</p>
          <p className={keywordStyle}>Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default Headline;