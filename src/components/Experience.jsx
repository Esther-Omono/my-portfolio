import SectionLabel from './SectionLabel';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id='experience' className='bg-[#242734] px-10 md:px-30 py-15'>
      <SectionLabel>Experience</SectionLabel>

      <div className='mt-12 relative'>
        {/* Vertical Line (Desktop Only) */}
        <div className='hidden md:block absolute left-3 top-0 h-full w-[2px] bg-[#FCC258]'></div>

        <div className='space-y-10'>
          {experienceData.map((item) => (
            <div key={item.id} className='relative md:pl-12'>
              {/* Yellow Dot */}
              <div className='hidden md:block absolute left-[6px] top-6 h-3 w-3 rounded-full bg-[#FCC258]'></div>

              <ExperienceCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
