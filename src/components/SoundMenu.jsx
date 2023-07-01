import React from 'react';
import waves from '../assets/menuAction/waves.png';
import user from '../assets/menuAction/User.svg';
import mic from '../assets/menuAction/Mic.svg';
import deafen from '../assets/menuAction/Deafen.svg';
import addFriend from '../assets/menuAction/Add Friend.svg';

const SoundMenu = () => {
  return (
    <div className='w-full '>
      {/* sound wave */}
      <div className='w-full h-[84px] flex items-center justify-center bg-secondary'>
        <img src={waves} alt='waves' className='w-[300px] h-[50px]  ' />
      </div>
      {/* profile picture */}
      <div className='flex flex-row justify-between items-center h-[80px] px-2  bg-primary '>
        <div className='flex items-center gap-2'>
          <img src={user} alt='avater' />
          <p className='text-dimWhite'>sophiefortune</p>
        </div>
        {/* sound sitting */}
        <div className='flex justify-center items-center gap-5 '>
          <img src={mic} alt='icon' className='cursor-pointer' />
          <img src={deafen} alt='icon' className='cursor-pointer' />
          <img src={addFriend} alt='icon' className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default SoundMenu;
