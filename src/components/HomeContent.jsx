import { BsDownload } from "react-icons/bs"
import Skills from "./Skills"
import "animate.css/animate.min.css"
import CardLastProject from "./CardLastProject"
import cv from "../assets/cv/CV.Hervinsa.pdf"
import { Link } from "react-router-dom"

const HomeContent = () => {
  return (
    <>
      <div className="p-8 bg-slate-100  w-full min-h-screen dark:bg-gray-700 dark:text-white ">
        <div className="container ">
          <h1 className="font-bold text-[22px] md:text-4xl mb-2 animate__animated animate__fadeInUp">
            Hi There 👋, I'm Tajul Subqi🤝
          </h1>
          <p className="font-bold text-xl mb-4 animate__animated animate__fadeInUp">
            Frontend Developer
          </p>
          <p className="w-full leading-6 mb-4 text-gray-700 dark:text-gray-200">
            I am a{" "}
            <span className="text-indigo-600 dark:text-indigo-300 font-semibold">
              Frontend Developer
            </span>{" "}
            who has a passion for Web Development, one of my life mottos is "Don't rush
            the process, trust that great things take time" which means don't rush the
            process, believe that great things take time.
          </p>
          <button>
            <Link
              // to={cv}
              target="_blank"
              className="flex items-center gap-2 py-3 px-5 text-white text-sm rounded-full bg-indigo-600 font-bold hover:bg-indigo-700"
            >
              <BsDownload />
              Download CV
            </Link>
          </button>
        </div>
        <hr className="mt-4 border-1 border-black dark:border-slate-400" />
        <Skills />
        <CardLastProject />
      </div>
    </>
  )
}

export default HomeContent
