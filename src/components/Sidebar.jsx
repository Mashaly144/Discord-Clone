import React from 'react';
import { sidebarGroup } from '../constants';
import logo from '../assets/Logo/logo.svg';
const Sidebar = () => {
  return (
    <div className=' h-full bg-dimPurble flex flex-col items-center p-4'>
      {/* main explore icons */}
      <div className='border-b-2 border-dimWhite mb-[20px] '>
        <img src={logo} className='pb-4 hover:scale-150  transition-all' />
      </div>

      {/* server icons  */}
      <ul className='flex flex-col justify-center items-center gap-[24px]'>
        {sidebarGroup.map((groub, index) => (
          <li
            key={index}
            className='cursor-pointer w-full hover:scale-150 transition-all '
          >
            <img src={groub} className='' alt='groubs' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
