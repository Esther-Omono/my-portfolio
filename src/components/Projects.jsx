import ProjectsCard from './ProjectsCard';
import SectionLabel from './SectionLabel';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section id='projects' className='bg-[#323647] px-10 md:px-30 py-15'>
      <SectionLabel>Projects</SectionLabel>
      <p className='text-slate-400 font-[Poppins] mt-5 '>
        Explore my latest frontend projects showcasing modern web technologies
        and creative solutions.
      </p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-[Montserrat]'>
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
