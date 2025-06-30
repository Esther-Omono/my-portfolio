import Accordion from './Accordion';

export default function Services() {
  const accordionData = [
    {
      title: 'Frontend Development',
      content: [
        'Responsive Web Development',
        'Single Page Application (SPA)',
        'E-commerce Frontend Development',
        'Landing Page',
      ],
    },
    {
      title: 'User Experience & Interface',
      content: [
        'UI/UX Implementation',
        'Website Redesign & Modernization',
        'Mobile-First Development',
      ],
    },
    {
      title: 'Technical',
      content: ['API Integration'],
    },
  ];

  return (
    <div className='bg-[#2C3640] text-[#F2F6EB] px-25 py-20 flex justify-between gap-5'>
      <div className='space-y-15 font-[Montserrat] flex-1'>
        <div className='space-y-5'>
          <h1 className='text-4xl font-bold'>My Services</h1>
          <p>
            Creating web experiences that connect with your audience and achieve
            your goals
          </p>
        </div>
        <button className='border rounded-full w-25 h-25 font-bold bg-[#F2F6EB] text-[#2C3640] hover:bg-[#2C3640] hover:text-[#F2F6EB] hover:border-2 cursor-pointer'>
          Let's Talk
        </button>
      </div>
      <div className='flex-1'>
        <Accordion
          items={accordionData}
          allowMultiple={false}
          defaultOpen={0}
        />
      </div>
    </div>
  );
}
