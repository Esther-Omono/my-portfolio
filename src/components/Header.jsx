import Navbar from './Nav';
import SectionLabel from './SectionLabel';
import { MdMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Header() {
  const emailAddress = 'enitanatakere@gmail.com';
  const subject = 'Inquiry from your website';
  const body = 'Hello, I would like to get in touch with you.';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <header className='bg-[#323647] px-10 md:px-30 py-10'>
      {/* Navigation Section */}
      <div className='flex justify-between pb-5'>
        <p className='text-[#FCC258] text-2xl font-[Montserrat] font-bold'>
          Esther
        </p>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className='grid md:grid-cols-2 gap-16 mt-15'>
        {/* Left Side */}
        <div>
          <h1 className='text-white text-6xl font-bold leading-tight font-[Montserrat]'>
            Esther <br /> Atakere.
          </h1>

          {/* Yellow Dash */}
          <div className='mt-6 h-1 w-12 bg-[#FCC258] rounded'></div>

          {/* Social icons placeholder */}
          <div className='flex gap-6 mt-10 text-slate-400 text-lg'>
            <a
              href={mailtoLink}
              title='Send me an email'
              aria-label='Send an email to enitanatakere@gmail.com'
            >
              <span>
                <MdMailOutline />
              </span>
            </a>

            <a
              href='https://www.linkedin.com/in/esther-atakere/'
              title='Check me out on LinkedIn'
              aria-label='Send a message to me on LinkedIn'
            >
              <span>
                <FaLinkedinIn />
              </span>
            </a>

            <a
              href='https://github.com/Esther-Omono'
              title='Check out my GitHub'
              aria-label='Check out my work on GitHub'
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className='text-white text-4xl font-[Poppins] py-4'>
            A Frontend Developer
          </h2>
          <p className='text-slate-400 text-justify'>
            With hands-on experience in building interactive and responsive web
            interfaces. I'm passionate about crafting clean, user-focused
            solutions that prioritize performance, accessibility, and modern
            design practices.
          </p>

          <Link to='/projects'>
            <div className='pt-4 text-[#FCC258] flex items-center gap-2'>
              <p>My Projects</p>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
