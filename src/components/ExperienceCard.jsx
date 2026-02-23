export default function ExperienceCard({
  role,
  company,
  period,
  description,
  skills,
}) {
  return (
    <div className='relative bg-[#323647] rounded-2xl p-6 shadow-md shadow-black/20 font-[Montserrat]'>
      {/* Role & Company */}
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
        <h3 className='text-white text-lg font-semibold'>{role}</h3>
        <span className='text-slate-400 text-sm'>{period}</span>
      </div>

      <p className='text-slate-300 mt-1 font-medium'>{company}</p>

      <p className='text-slate-400 text-sm mt-4 leading-relaxed'>
        {description}
      </p>

      {/* Skills */}
      <div className='flex flex-wrap gap-2 mt-4'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='text-xs bg-[#242734] text-slate-300 px-3 py-1 rounded-full'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
