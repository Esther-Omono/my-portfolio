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
    <header id='home' className='bg-[#323647] px-10 md:px-30 py-10'>
      {/* Hero Section */}
      <div className='grid md:grid-cols-2 items-center gap-14 mt-10'>
        {/* Left Side */}
        <div>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-[Montserrat]'>
            Esther <br /> Atakere.
          </h1>

          {/* Yellow Dash */}
          <div className='mt-5 h-1 w-10 bg-[#FCC258] rounded'></div>

          {/* Social icons placeholder */}
          <div className='flex gap-6 mt-8 text-slate-400 text-xl'>
            <a
              className='hover:text-white transition'
              href={mailtoLink}
              title='Send me an email'
              aria-label='Send an email to enitanatakere@gmail.com'
            >
              <span>
                <MdMailOutline />
              </span>
            </a>

            <a
              className='hover:text-white transition'
              href='https://www.linkedin.com/in/esther-atakere/'
              target='_blank'
              rel='noopener noreferrer'
              title='Check me out on LinkedIn'
              aria-label='Send a message to me on LinkedIn'
            >
              <span>
                <FaLinkedinIn />
              </span>
            </a>

            <a
              className='hover:text-white transition'
              href='https://github.com/Esther-Omono'
              target='_blank'
              rel='noopener noreferrer'
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

          <h2 className='text-white text-2xl sm:text-3xl lg:text-4xl font-[Poppins] py-4'>
            A Frontend Developer
          </h2>
          <p className='text-slate-400 text-justify leading-relaxed'>
            With hands-on experience in building interactive and responsive web
            interfaces. I'm passionate about crafting clean, user-focused
            solutions that prioritize performance, accessibility, and modern
            design practices.
          </p>

          <a href='#projects'>
            <div className='inline-flex pt-6 text-[#FCC258] items-center gap-2 hover:gap-3 transition-all'>
              <p>My Projects</p>
              <FaArrowRight />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
