import { AiOutlineProject } from "react-icons/ai"
import { allProject } from "../data"
import { Link } from "react-router-dom"

const CardLastProject = () => {
  // Mengambil 4 elemen terakhir dari array allProject
  // Balik urutan array lattestProject dan ambil 4 elemen pertama
  const lastFourProjects = [...allProject].reverse().slice(0, 4)

  return (
    <>
      <div className="mt-4">
        <h6 className="flex items-center gap-2 font-semibold mb-6">
          <AiOutlineProject className="text-lg" /> Latest Projects
        </h6>
        <div className="flex flex-wrap gap-4 justify-center animate__animated animate__fadeInUp">
          {lastFourProjects.map((latest) => {
            if (latest.image) {
              return (
                <div
                  className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={latest.title}
                >
                  <div>
                    <img
                      className="rounded-t-lg w-full p-4"
                      src={latest.image}
                      alt={latest.alt}
                      width={300}
                    />
                  </div>
                  <div className="p-3">
                    <div>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {latest.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {latest.desc}
                      </p>
                    </div>
                    <div className="flex gap-3 mb-4 p-2 rounded-xl">
                      {latest.tech1 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={latest.tech1}
                          alt={latest.alt1}
                          width="30"
                          height="30"
                        />
                      )}
                      {latest.tech2 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={latest.tech2}
                          alt={latest.alt2}
                          width="30"
                          height="30"
                        />
                      )}
                      {latest.tech3 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={latest.tech3}
                          alt={latest.alt3}
                          width="30"
                          height="30"
                        />
                      )}
                      {latest.tech4 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={latest.tech4}
                          alt={latest.alt4}
                          width="30"
                          height="30"
                        />
                      )}
                    </div>
                    <button>
                      <Link
                        to={latest.link}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-full hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        {latest.preview}
                      </Link>
                    </button>
                  </div>
                </div>
              )
            }
            return null // Jika image tidak ada dalam data, return null untuk menghindari rendering
          })}
        </div>
      </div>
    </>
  )
}

export default CardLastProject
