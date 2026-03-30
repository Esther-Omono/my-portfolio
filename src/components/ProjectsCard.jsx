import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectsCard({
  title,
  description,
  image,
  technologies,
  githubURL,
  liveURL,
  isGithubAvailable = true,
  isLiveAvailable = true,
}) {
  return (
    <div className='bg-[#242734] rounded-2xl overflow-hidden shadow-md shadow-black/20 hover:scale-[1.02] transition-all duration-300'>
      {/* Image with browser frame */}
      <div className='bg-[#1a1d29] p-2'>
        <div className='bg-[#2a2e3f] h-6 flex items-center gap-1 px-2 rounded-t-md'>
          <span className='w-2 h-2 bg-red-400 rounded-full'></span>
          <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
          <span className='w-2 h-2 bg-green-400 rounded-full'></span>
        </div>

        <img
          src={image}
          alt={title}
          className='w-full h-44 object-cover rounded-b-md'
        />
      </div>

      {/* Project info */}
      <div className='p-6'>
        <h3 className='text-white text-lg font-semibold'>{title}</h3>
        <p className='text-slate-400 text-sm mt-3'>{description}</p>

        <div className='flex flex-wrap gap-2 mt-4'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='text-xs bg-[#323647] text-slate-300 px-3 py-1 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex justify-between mt-10 text-sm'>
          {/* GitHub */}
          <a
            href={isGithubAvailable ? githubURL : 'undefined'}
            disabled={!isGithubAvailable}
            className={`border py-2 px-3 rounded-lg font-medium text-slate-400 transition flex items-center gap-2
              ${
                isGithubAvailable
                  ? 'border-slate-400 hover:bg-slate-400 hover:text-[#242734] cursor-pointer'
                  : 'border-gray-600 bg-gray-700 cursor-not-allowed text-gray-400'
              }`}
          >
            <FaGithub />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={isLiveAvailable ? liveURL : 'undefined'}
            disabled={!isLiveAvailable}
            className={`border py-2 px-3 rounded-lg font-medium text-slate-400 transition flex items-center gap-2
              ${
                isLiveAvailable
                  ? 'border-slate-400 hover:bg-slate-400 hover:text-[#242734] cursor-pointer'
                  : 'border-gray-600 bg-gray-700 cursor-not-allowed text-gray-400'
              }`}
          >
            <HiOutlineExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
