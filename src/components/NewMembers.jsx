import React from 'react';
import { newMembers } from '../constants';
const NewMembers = () => {
  return (
    <div className='bg-[#2C2F48] p-4'>
      <div className='flex justify-between text-dimWhite '>
        <p className='text-dimWhite text-[20px]'>New Members</p>
        <span className='text-[20px] cursor-pointer hover:text-white'>
          See all
        </span>
      </div>
      <ul className=''>
        {newMembers.map((member) => (
          <li
            key={member.id}
            className='flex items-center hover:scale-105 gap-4 bg-[#393D5E] p-2 my-[10px] rounded-[10px] cursor-pointer hover:shadow-shadowHover transition-all'
          >
            <img src={member.icon} />
            <div className='flex flex-col items-start gap-1'>
              <h2 className='text-white'>{member.name}</h2>
              <p className='text-dimWhite'>{member.lastScene} min ago</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewMembers;
