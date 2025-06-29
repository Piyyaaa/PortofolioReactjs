// components/ProjectCard.jsx
import { FiExternalLink } from "react-icons/fi"; // Pastikan kamu install react-icons
import { Link } from 'react-router-dom';

function ProjectCard({ gambar, nama, shortDesk, tools, delay, slug }) {
  return (
    <div
      className="p-4 bg-zinc-800 rounded-xl shadow-md hover:shadow-2xl hover:shadow-blue-700/40 transform hover:-translate-y-1 transition-all duration-300"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay={delay}
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-md mb-4 bg-white flex items-center justify-center">
        <img
          src={gambar}
          alt={`Project ${nama}`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2 text-white">{nama}</h1>
        <p className="text-base/loose mb-4 text-zinc-300">{shortDesk}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="py-1 px-3 text-sm font-medium rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-200"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="text-center" id="1">
          <Link
            to={`/project/${slug}`}
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-lg border border-zinc-600 transition duration-300"
          >
            <FiExternalLink /> See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
