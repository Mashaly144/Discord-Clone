import React from 'react';

const SectionHead = (props) => {
  return (
    <div className='flex justify-between py-6'>
      <h1 className='text-white font-poppins text-2xl sm:text-3xl'>
        {props.title}
      </h1>
      <span className='text-dimWhite text-2xl sm:text-3xl cursor-pointer hover:text-white transition-all'>
        See all
      </span>
    </div>
  );
};

export default SectionHead;
