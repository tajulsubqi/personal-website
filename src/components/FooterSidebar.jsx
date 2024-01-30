import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { RiTiktokFill } from "react-icons/ri"
import { AiOutlineMail } from "react-icons/ai"
import { Link } from "react-router-dom"

const FooterSidebar = () => {
  return (
    <>
      <div className="md:mt-4 my-3 md:py-2 md:px-4 text-black dark:text-white">
        <p className="mb-4 hidden md:block font-semibold text-center">Let`s Connect</p>
        <div className="flex text-2xl justify-center gap-1">
          <Link to="https://github.com/tajulsubqi" target="_blank">
            <AiOutlineGithub
              size={32}
              className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white p1"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/tajulsubqi" target="_blank">
            <AiFillLinkedin
              size={32}
              className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white p-1"
            />
          </Link>
          <Link to="https://instagram.com/tajulsubqi__" target="_blank">
            <AiOutlineInstagram
              size={32}
              className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white p-1"
            />
          </Link>
          <Link to="https://www.tiktok.com/@kidstersenyum" target="_blank">
            <RiTiktokFill
              size={32}
              className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white p-1"
            />
          </Link>
          <Link to="mailto:subqitajul@gmail.com" target="_blank">
            <AiOutlineMail
              size={32}
              className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white p-1"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default FooterSidebar
