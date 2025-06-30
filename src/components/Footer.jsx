export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='font-[Montserrat] px-25 h-20 flex items-center justify-center bg-[#F2F6EB] text-[#2C3640] border-t-[1.5px] border-[#2C3640]'>
      <p>© {currentYear} Esther. All rights reserved.</p>
    </footer>
  );
}
