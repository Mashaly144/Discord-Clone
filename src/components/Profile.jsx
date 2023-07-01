import React from 'react';
import { profiles, notifications } from '../constants';
import squers from '../assets/TopAction/squers.svg';
const Profile = () => {
  return (
    <div>
      <nav className='w-full h-[80px]  border-b-[2px] border-l-[2px] border-white/10 justify-center flex'>
        <ul className='flex justify-evenly items-center w-full'>
          {notifications.map((notification, index) => (
            <li key={index} className='flex justify-between cursor-pointer'>
              <img
                src={notification}
                key={index}
                className='w-[35px] h-[35px]'
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className='text-white flex justify-center items-center '>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className='text-white flex flex-col justify-center items-center mb-[20px] '
          >
            <div className='relative my-[40px] flex justify-center cursor-pointer  items-center w-[200px] h-[200px]'>
              <img
                src={profile.avater}
                alt='avater'
                className=' absolute z-0 object-contain '
              />
              <img
                src={squers}
                alt='avater'
                className=' absolute z-10 object-contain'
              />
            </div>
            <div className='flex flex-col gap-2 font-semibold text-center '>
              <h1 className='font-poppins text-[22px]'>{profile.name}</h1>
              <p className='text-dimWhite'>@{profile.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
