import ProjectCards from './Projectcards';

export default function Project() {
  return (
    <div className='bg-[#2C3640] text-[#F2F6EB] px-25 py-15 font-[Montserrat]'>
      <div className='space-y-5'>
        <h1 className='text-4xl font-bold'>My Projects</h1>
        <p>
          Explore my latest frontend engineering projects showcasing <br />{' '}
          modern web technologies and creative solutions.
        </p>
      </div>

      <ProjectCards />

      {/* Add More Projects CTA */}
      <div className='text-center mt-12'>
        <div className='inline-block bg-[#F2F6EB] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
          <h3 className='text-xl font-bold text-[#2C3640] mb-2'>
            More Projects Coming Soon
          </h3>
          <p className='text-[#2C3640] mb-4'>
            I'm constantly working on new and exciting projects.
          </p>
          <button className='bg-[#2C3640] text-[#F2F6EB] px-6 py-2 rounded-lg font-medium hover:bg-[#F2F6EB] hover:text-[#2C3640] border-2 border-transparent hover:border-[#2C3640] transition-all duration-200'>
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
