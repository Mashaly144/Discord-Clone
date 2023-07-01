import React from 'react';
import { recentlyCards } from '../constants';
import SectionHead from '../UI/SectionHead';

const RecentAdd = () => {
  return (
    <div className='mt-5 mb-16'>
      {/* header */}
      <SectionHead title='Recently Add' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5  '>
        {recentlyCards.map((card, index) => {
          return (
            <div
              key={index}
              className='col-span-1 relative shadow-md rounded-[20px] flex flex-col hover:shadow-shadowHover transition-all'
            >
              {/* card image */}
              <img
                className='w-full h-[50px] md:h-56 lg:h-64 object-cover flex-1 rounded-t-[20px]'
                src={card.background}
                alt='Card Image'
              />
              {/* card details */}
              <div className='p-3 rounded-b-[20px] bg-secondary  flex flex-col  justify-evenly items-start flex-1'>
                {/* card body */}
                <div className='flex flex-col justify-between items-start'>
                  <h2 className=' sm:text-xl md:text-2xl text-white font-semibold mb-2'>
                    {card.title}
                  </h2>
                  <p className='text-dimWhite text-sm sm:text-base md:text-lg'>
                    {card.content}
                  </p>
                </div>
                {/* card footer */}
                <div className='text-dimWhite flex justify-between items-center py-2'>
                  {/* foot right */}
                  <div className='flex items-center space-x-2'>
                    <img
                      src={card.symbolMember}
                      className='w-6'
                      alt='Member Symbol'
                    />
                    <span className='text-sm sm:text-base'>
                      {card.valueMember}
                    </span>
                    <p className='text-sm sm:text-base'>Members</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentAdd;
