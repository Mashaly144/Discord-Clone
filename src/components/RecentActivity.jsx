import React from 'react';
import { memberActivity } from '../constants';

const RecentActivity = () => {
  return (
    <div className=' p-4'>
      <div className='flex justify-between text-dimWhite '>
        <p className='text-dimWhite text-[20px]'>Recent Activity</p>
        <span className='text-[20px] cursor-pointer hover:text-white'>
          See all
        </span>
      </div>

      <ul className=''>
        {memberActivity.map((member) => (
          <li
            key={member.id}
            className='flex items-center gap-4 bg-[#393D5E] p-2 my-[10px] rounded-[10px] cursor-pointer hover:shadow-shadowHover transition-all hover:scale-105'
          >
            <img src={member.icon} />
            <div className='flex flex-col items-start gap-1'>
              <h2 className='text-white'>
                {member.name}{' '}
                <span className='text-dimWhite'>{member.activity}</span>
              </h2>

              <p className='text-dimWhite'>{member.lastScene} min ago</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
