import { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ items, allowMultiple = false, defaultOpen = null }) => {
  const [openItems, setOpenItems] = useState(() => {
    if (defaultOpen !== null) {
      return allowMultiple ? [defaultOpen] : defaultOpen;
    }
    return allowMultiple ? [] : null;
  });

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev === index ? null : index));
    }
  };

  const isOpen = (index) => {
    return allowMultiple ? openItems.includes(index) : openItems === index;
  };

  return (
    <div className='w-full max-w-2xl mx-auto'>
      {items.map((item, index) => (
        <div key={index} className='border-b border-[#F2F6EB] last:border-b-0'>
          {/* Header */}
          <button
            onClick={() => toggleItem(index)}
            className='w-full py-4 text-left flex items-center justify-between transition-colors duration-200 cursor-pointer'
          >
            <span className='font-[Montserrat] text-[#F2F6EB] text-2xl'>
              {item.title}
            </span>
            <FaChevronCircleDown
              className={`w-6 h-6 text-[#F2F6EB] transition-transform duration-200 ${
                isOpen(index) ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className='font-[Montserrat] pb-4'>
              <div className='pl-4 py-3'>
                <div className='space-y-3'>
                  {item.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} className='flex items-start'>
                      <div className='w-2 h-2 bg-[#F2F6EB] rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <p className='text-[#F2F6EB] text-sm leading-relaxed'>
                        {contentItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
