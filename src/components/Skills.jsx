import SectionLabel from './SectionLabel';

export default function Skills() {
  return (
    <section className='bg-[#242734] px-30 py-10'>
      <SectionLabel>Skills</SectionLabel>
      {/*<p className='text-white font-[Poppins] pt-5 text-justify'>
        An overview of my technical skills across various technologies and
        tools.
      </p>*/}

      <div>
        <div>
          <h2>Core Frontend</h2>
          <div>
            <p>HTML5 (semantic)</p>
            <p>CSS3 (Flexbox, Grid)</p>
            <p>JavaScript (ES6+)</p>
            <p>Responsive Design</p>
            <p>Accessibility</p>
          </div>
        </div>
        <div>
          <h2>Frameworks/Tools</h2>
        </div>
        <div>
          <h2>Engineering Practices</h2>
        </div>
      </div>
    </section>
  );
}
