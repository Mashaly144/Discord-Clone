import React from 'react';
import { featureCards } from '../constants';
import SectionHead from '../UI/SectionHead';
const FeatureCommunity = () => {
  return (
    <div className='mt-5'>
      {/* header */}
      <SectionHead title='Feature Community' />
      {/* body */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
        {featureCards.map((card, index) => {
          return (
            <div
              key={index}
              className='col-span-1 relative h-96 sm:h-[350px] hover:shadow-shadowHover transition-all cursor-pointer rounded-3xl overflow-hidden'
            >
              <img
                className='w-full h-full object-cover absolute'
                src={card.background}
                alt='Card Image'
              />
              {/* card details */}
              <div className='p-3 rounded-t-3xl bg-primary/70 absolute bottom-0 w-full backdrop-blur-sm'>
                {/* card body */}
                <div className='flex flex-col justify-between items-start'>
                  <h2 className='text-2xl text-white font-semibold mb-2'>
                    {card.title}
                  </h2>
                  <p className='text-dimWhite text-left'>{card.content}</p>
                </div>
                {/* card footer */}
                <div className='text-dimWhite flex justify-between items-center py-4'>
                  {/*foot left */}
                  <div className='flex items-center space-x-2'>
                    <img
                      src={card.symbolOnline}
                      className='w-6'
                      alt='Online Symbol'
                    />
                    <span>{card.valueOnline}</span>
                    <p>Online</p>
                  </div>
                  {/* foot right */}
                  <div className='flex items-center space-x-2'>
                    <img
                      src={card.symbolMember}
                      className='w-6'
                      alt='Member Symbol'
                    />
                    <span>{card.valueMember}</span>
                    <p>Members</p>
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

export default FeatureCommunity;
