import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='font-[Montserrat] flex flex-col justify-center items-center px-25 text-center space-y-5 text-[#2C3640] bg-[#F2F6EB] h-[calc(100vh-5rem)]'>
      <h1 className='text-4xl font-bold'>
        I'm ESTHER <br /> A Frontend Engineer
      </h1>
      <p>
        I craft clean, user-focused solutions that prioritize performance,
        accessibility, and <br /> modern design practices.
      </p>
      <button className='bg-[#2C3640] text-[#F2F6EB] hover:bg-[#F2F6EB] hover:text-[#2C3640] border-2 border-transparent hover:border-[#2C3640] px-8 py-3 font-bold rounded-lg cursor-pointer'>
        Let's Talk
      </button>
      {/*
      <div className='mt-7 space-y-3'>
        <p className='text-base font-bold'>Follow me</p>
        <div className='flex justify-center gap-4'>
          <FaLinkedin className='cursor-pointer' size={30} />
          <FaGithub className='cursor-pointer' size={30} />
        </div>
      </div>*/}
    </div>
  );
}
