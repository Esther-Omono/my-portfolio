import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#242734] font-[Poppins]'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-8'>
          {/* Brand */}
          <div>
            <h3 className='text-lg font-semibold text-white'>Esther Atakere</h3>
            <p className='text-slate-400 text-sm mt-2 max-w-sm'>
              Frontend Developer crafting modern, responsive and accessible web
              experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-wrap gap-6 text-sm text-slate-400'>
            <a href='#about' className='hover:text-white transition-colors'>
              Home
            </a>
            <a href='#projects' className='hover:text-white transition-colors'>
              Projects
            </a>
            <a href='#contact' className='hover:text-white transition-colors'>
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-5 text-slate-400 text-lg'>
            <a
              href='mailto:enitanatakere@gmail.com'
              className='hover:text-white transition-colors'
              aria-label='Send Email'
            >
              <FaEnvelope />
            </a>

            <a
              href='https://github.com/Esther-Omono'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
              aria-label='GitHub Profile'
            >
              <FaGithub />
            </a>

            <a
              href='https://linkedin.com/in/esther-atakere'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-6 border-t border-slate-400 text-center text-xs text-slate-500'>
          © {new Date().getFullYear()} Esther Atakere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
