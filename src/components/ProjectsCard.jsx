import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectsCard({
  title,
  description,
  image,
  technologies,
  githubURL,
  liveURL,
}) {
  return (
    <div className='bg-[#242734] rounded-2xl overflow-hidden shadow-md shadow-black/20 hover:scale-[1.02] transition-all duration-300'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />

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

        <div className='flex justify-between mt-10 text-sm'>
          <a
            href={githubURL}
            className='border border-slate-400 py-2 px-3 rounded-lg font-medium text-slate-400 hover:bg-slate-400 hover:text-[#242734] transition'
          >
            <div className='flex items-center gap-2'>
              <FaGithub />
              GitHub
            </div>
          </a>
          <a
            href={liveURL}
            className='border border-slate-400 py-2 px-3  rounded-lg font-medium text-slate-400 hover:bg-slate-400 hover:text-[#242734] transition'
          >
            <div className='flex items-center gap-2'>
              <HiOutlineExternalLink />
              Live Demo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
