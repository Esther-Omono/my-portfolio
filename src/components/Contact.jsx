import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Contact = () => {
  return (
    <div className='font-[Montserrat] bg-[#F2F6EB] text-[#2C3640] px-25 py-10'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold'>Contact Me</h1>
        <p>Let's connect and build something amazing together!</p>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <form className='mt-5 flex flex-col flex-1 space-y-5'>
          <input
            type='text'
            placeholder='Name'
            className='h-10 border bg-transparent border-[#2C3640] px-3 py-2.5 text-base rounded-lg'
          />
          <input
            type='email'
            placeholder='Email Address'
            className='h-10 border bg-transparent border-[#2C3640] px-3 py-2.5 text-base rounded-lg'
          />
          <textarea
            placeholder='Message...'
            className='h-25 border bg-transparent border-[#2C3640] px-3 py-2.5 text-base rounded-lg'
          />
          <button className='bg-[#2C3640] text-[#F2F6EB] hover:bg-[#F2F6EB] hover:text-[#2C3640] border-2 border-transparent hover:border-[#2C3640] px-8 py-3 font-bold rounded-lg cursor-pointer'>
            Send
          </button>
        </form>

        <div className='flex-1 space-y-5'>
          <p className='text-center'>Keep in touch with me!</p>
          <div className='flex justify-evenly'>
            <MdEmail size={50} />
            <FaLinkedin size={50} />
            <FaGithub size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
