const Summary = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 font-jetbrains text-center">Summary</h1>
      <div className="w-[40vw] h-[50vh] flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-white via-blue-100 to-white hover:from-blue-100 hover:via-white hover:to-blue-100 shadow-lg hover:shadow-xl transform-all transition-colors duration-500">
        <p className="p-10 text-justify font-sans leading-relaxed">
          A fresh graduate and full scholarship recipient from Universiti Teknologi Malaysia (UTM), with a Bachelor&apos;s degree in Computer
          Science. A consistent Dean&apos;s List achiever skilled in problem-solving, with strong proficiency in mobile application/web
          development and hands-on experience in video game development. Currently working as a software developer.
        </p>
      </div>
    </div>
  )
}

export default Summary;