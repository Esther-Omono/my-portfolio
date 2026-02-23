import SectionLabel from './SectionLabel';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const emailAddress = 'enitanatakere@gmail.com';
  const subject = 'Inquiry from your website';
  const body = 'Hello, I would like to get in touch with you.';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className='bg-[#323647] px-10 md:px-30 py-15'>
      <SectionLabel>Contact</SectionLabel>

      <p className='text-slate-400 mt-5 font-[Poppins]'>
        Have a project in mind or want to collaborate? Feel free to reach out.
      </p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 font-[Montserrat]'>
        {/* LEFT: Contact Info */}
        <div className='space-y-6'>
          <div className='bg-[#242734] p-6 rounded-2xl shadow-md shadow-black/20'>
            <h3 className='text-white font-semibold text-lg'>Let us Connect</h3>

            <p className='text-slate-400 mt-3'>
              I am open to frontend roles, freelance projects, and creative
              collaborations.
            </p>

            <div className='mt-6 space-y-4 text-slate-300'>
              <a
                className='block'
                href={mailtoLink}
                title='Send me an email'
                aria-label='Send an email to enitanatakere@gmail.com'
              >
                <div className='flex items-center gap-3 text-slate-400 hover:text-white transition-colors'>
                  <FaEnvelope className='text-lg' />
                  <span>enitanatakere@gmail.com</span>
                </div>
              </a>

              <a
                className='block'
                href='https://github.com/Esther-Omono'
                title='Check out my GitHub'
                aria-label='Check out my work on GitHub'
              >
                <div className='flex items-center gap-3 text-slate-400 hover:text-white transition-colors'>
                  <FaGithub className='text-lg' />
                  <span>github.com/Esther-Omono</span>
                </div>
              </a>

              <a
                className='block'
                href='https://www.linkedin.com/in/esther-atakere/'
                title='Check me out on LinkedIn'
                aria-label='Send a message to me on LinkedIn'
              >
                <div className='flex items-center gap-3 text-slate-400 hover:text-white transition-colors'>
                  <FaLinkedinIn className='text-lg' />
                  <span>linkedin.com/in/Esther-Atakere</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className='bg-[#242734] p-6 rounded-2xl shadow-md shadow-black/20'>
          <form className='space-y-6'>
            <div>
              <label className='block text-slate-300 text-sm mb-2'>Name</label>
              <input
                type='text'
                className='w-full bg-[#323647] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition'
              />
            </div>

            <div>
              <label className='block text-slate-300 text-sm mb-2'>Email</label>
              <input
                type='email'
                className='w-full bg-[#323647] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition'
              />
            </div>

            <div>
              <label className='block text-slate-300 text-sm mb-2'>
                Message
              </label>
              <textarea
                rows='4'
                className='w-full bg-[#323647] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-[#242734] font-semibold py-3 rounded-lg hover:opacity-90 transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
