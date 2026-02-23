import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav>
      <ul className='flex gap-8'>
        {navItems.map((item) => (
          <li key={item.name} className='relative'>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 
                ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <div className='flex flex-col items-center'>
                  {item.name}

                  {/* Yellow Dot */}
                  {isActive && (
                    <span className='mt-1 h-1 w-1 rounded-full bg-[#FCC258]'></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
