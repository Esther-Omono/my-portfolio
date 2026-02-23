import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#323647] px-10 md:px-30 py-4 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-600' : ''
      }`}
    >
      <div className='w-full flex justify-between items-center'>
        <p className='text-[#FCC258] text-xl sm:text-2xl font-[Montserrat] font-bold'>
          Esther
        </p>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 sm:gap-8'>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className='md:hidden text-slate-400 hover:text-white text-2xl transition-colors'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='absolute bg-[#323647] w-full px-6 md:hidden mt-4 flex flex-col gap-4 pb-4 border rounded-bl-2xl border-slate-600 pt-4'>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className='block text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
