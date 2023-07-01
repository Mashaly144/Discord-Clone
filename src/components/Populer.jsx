import React from 'react';
import { popularCards } from '../constants';
import icon from '../assets/card/SymbolMember.svg';
import SectionHead from '../UI/SectionHead';

const Populer = () => {
  return (
    <div className='mt-5'>
      {/* header */}
      <SectionHead title='Populer Right Now' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-5'>
        {popularCards.map((popularCard, index) => (
          <div
            key={index}
            className='populer-card overflow-hidden relative gap-2 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 cursor-pointer'
          >
            {/* card image */}
            <img
              className='w-full h-44 sm:h-56 md:h-64 lg:h-52 object-cover flex-1'
              src={popularCard.background}
              alt='Card Image'
            />

            {/* card body */}
            <div className='flex flex-col justify-between items-start h-full p-5 flex-1 '>
              <div className='flex flex-col items-start'>
                <h1 className='text-white mb-1 text-base sm:text-lg md:text-xl lg:text-2xl'>
                  {popularCard.title}
                </h1>
                <p className='text-dimWhite text-sm sm:text-base md:text-lg lg:text-xl w-[200px]'>
                  {popularCard.content}
                </p>
              </div>
              {/* card number state */}
              <div className='text-dimWhite flex items-center text-sm sm:text-base md:text-lg lg:text-xl'>
                <img src={icon} className='mr-1 w-6' alt='Member Icon' />{' '}
                {popularCard.value} Members
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populer;
