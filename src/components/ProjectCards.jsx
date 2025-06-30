import { FaCode } from 'react-icons/fa6';
import { GoCpu } from 'react-icons/go';
import { FaPalette, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../utils/ProjectList';

const ProjectCards = () => {
  const techIcons = {
    React: <FaCode className='w-5 h-5' />,
    TypeScript: <GoCpu className='w-5 h-5' />,
    Tailwind: <FaPalette className='w-5 h-5' />,
    CSS3: <FaPalette className='w-5 h-5' />,
  };

  return (
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`group relative bg-[#2C3640] rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden ${
            project.featured ? 'ring-3 ring-[#F2F6EB]' : 'ring-1 ring-[#F2F6EB]'
          }`}
        >
          {/* Featured Badge */}
          {project.featured && (
            <div className='absolute top-4 left-4 z-10 bg-[#2C3640] border border-[#F2F6EB] text-[#F2F6EB] px-3 py-1 rounded-full text-sm font-medium'>
              Featured
            </div>
          )}

          {/* Project Image */}
          <div className='relative overflow-hidden h-48'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>

          {/* Project Content */}
          <div className='p-6'>
            <h3 className='text-xl font-bold text-[#F2F6EB] mb-2 transition-colors duration-200'>
              {project.title}
            </h3>
            <p className='text-[#F2F6EB] mb-4 line-clamp-2'>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className='flex items-center gap-1 bg-[#F2F6EB] px-3 py-1 rounded-full text-sm text-[#2C3640] transition-all duration-200 group-hover:animate-pulse'
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className='animate-pulse group-hover:animate-spin transition-all duration-500'>
                    {techIcons[tech] || <FaCode className='w-4 h-4' />}
                  </span>
                  {tech}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3'>
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 bg-[#2C3640] border border-[#F2F6EB] hover:bg-[#F2F6EB] hover:text-[#2C3640] text-[#F2F6EB] px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg'
              >
                <FaExternalLinkAlt className='w-4 h-4' />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 bg-[#2C3640] border border-[#F2F6EB] hover:bg-[#F2F6EB] hover:text-[#2C3640] text-[#F2F6EB] px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg'
              >
                <FaGithub className='w-4 h-4' />
                GitHub
              </a>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
