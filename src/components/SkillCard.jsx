export default function SkillCard({ title, skills }) {
  return (
    <div className='rounded-2xl p-6 bg-[#323647] transition-all duration-300'>
      <h2 className='text-xl font-semibold text-white mb-4 text-center'>
        {title}
      </h2>

      <ul className='space-y-3 text-slate-400 text-sm'>
        {skills.map((skill, index) => (
          <li
            key={index}
            className='hover:text-white transition-colors duration-300'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
