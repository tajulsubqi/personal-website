import foto from "../assets/foto.png"
import { FcApproval } from "react-icons/fc"
import { BiSolidHome } from "react-icons/bi"
import { GoProjectSymlink } from "react-icons/go"
import { AiOutlineSolution } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import FooterSidebar from "./FooterSidebar"
import DarkModeToggle from "./DarkModeToggle"
import "animate.css/animate.min.css"

const Sidebar = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="dark:bg-gray-800  bg-slate-200  h-screen w-[370px] flex-shrink-0 top-0 sticky hidden lg:block">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-b-lg h-[110px] relative z-10">
          <p
            className="text-center text-xl text-white font-semibold p-3"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Welcome
          </p>
          <DarkModeToggle />
        </div>
        <div className="flex flex-col items-center mt-[-40px] text-black dark:text-white">
          <img
            src={foto}
            alt="profile tajul"
            width={150}
            className=" z-20 border-solid border-2 border-black dark:border-white rounded-full mb-3 animate__animated animate__fadeIn aspect-square object-cover"
          />
          <h5 className="font-bold text-xl flex justify-center items-center gap-2">
            Tajul Subqi <FcApproval className="text-xl" />
          </h5>
          <p className="text-sm font-semibold">Frontend Developer</p>
        </div>
        <hr className="mt-6 border-1 border-black dark:border-slate-400" />
        <ul className="px-3 py-2  text-black dark:text-white  font-semibold">
          <li className="hover:bg-indigo-200 p-2 cursor-pointer  rounded">
            <NavLink to="/" className="flex items-center hover:dark:text-black gap-2">
              <BiSolidHome size={20} /> Home
            </NavLink>
          </li>
          <li className="hover:bg-indigo-200 p-2 cursor-pointer rounded">
            <NavLink
              to="/projects"
              className="flex items-center hover:dark:text-black gap-2"
            >
              <GoProjectSymlink size={20} />
              Project
            </NavLink>
          </li>
          <li className="hover:bg-indigo-200 p-2 cursor-pointer rounded">
            <NavLink
              to="/about"
              className="flex items-center hover:dark:text-black gap-2"
            >
              <AiOutlineSolution size={20} />
              About
            </NavLink>
          </li>
          <button className="mt-3">
            <Link
              to="https://wa.link/jyyfyc"
              target="_blank"
              className="flex items-center gap-2 py-2 px-7 text-white text-sm rounded-full bg-indigo-600 font-bold hover:bg-indigo-700"
            >
              Hire Me
            </Link>
          </button>
        </ul>
        <hr className="mt-2 border-1 border-black dark:border-slate-400" />
        <FooterSidebar />
        <hr className="mt-4 border-1 border-black hidden md:block dark:border-slate-400" />
        <div className=" text-black dark:text-white">
          <p className="px-4 text-sm text-center bottom-3 absolute pb-4">
            &copy; {currentYear} Copyright By{" "}
            <strong className="text-indigo-600"> Tajul Subqi</strong>
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
