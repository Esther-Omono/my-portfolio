export default function Nav() {
  return (
    <nav className='font-[Montserrat] px-25 h-20 flex items-center justify-between bg-[#F2F6EB] text-[#2C3640] border-b-[1.5px] border-[#2C3640] sticky top-0 z-50'>
      <div>
        <p className='text-2xl font-bold'>Esther</p>
      </div>
      <div>
        <ul className='flex  gap-10 text-base text-'>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <button
        type='button'
        className='border-2 border-[#2C3640] px-4 py-1 hover:bg-[#2C3640] hover:text-[#F2F6EB] font-bold cursor-pointer'
      >
        Contact
      </button>
    </nav>
  );
}
