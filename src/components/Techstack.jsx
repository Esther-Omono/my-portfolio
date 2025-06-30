import { FaCss3, FaGitAlt, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

export default function Techstack() {
  return (
    <div className='px-25 py-10 bg-[#F2F6EB] text-[#2C3640] font-[Montserrat] space-y-7'>
      <h2 className='text-3xl font-bold text-center'>My Tech Stack</h2>
      <div className='flex justify-evenly'>
        <FaReact size={50} fill='#61DBFB' />
        <FaCss3 size={50} fill='#663399' />
        <SiTypescript size={50} fill='#3178C6' />
        <RiTailwindCssFill size={50} fill='#36B7F0' />
        <FaGitAlt size={50} fill='#F1502F' />
      </div>
    </div>
  );
}
