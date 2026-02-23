import SectionLabel from './SectionLabel';
import SkillCard from './SkillCard';

export default function Skills() {
  const skillsData = [
    {
      title: 'Core Frontend',
      skills: [
        'HTML5 (semantic)',
        'CSS3 (Flexbox, Grid)',
        'JavaScript (ES6+)',
        'TailwindCSS',
        'Responsive Design',
        'Accessibility',
      ],
    },
    {
      title: 'Frameworks/Tools',
      skills: ['React', 'Vite', 'Git & GitHub', 'REST APIs', 'NPM'],
    },
    {
      title: 'Engineering Practices',
      skills: [
        'Component-based architecture',
        'State management',
        'Clean code principles',
        'Performance optimization',
        'Debugging',
      ],
    },
  ];

  return (
    <section id='skills' className='bg-[#242734] px-10 md:px-30 py-15'>
      <SectionLabel>Skills</SectionLabel>

      <p className='text-slate-400 font-[Poppins] mt-5 '>
        An overview of my technical skills across various technologies and
        tools.
      </p>

      <div className='font-[Montserrat] mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {skillsData.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}
