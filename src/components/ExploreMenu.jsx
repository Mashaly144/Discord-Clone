import React from 'react';
import { exploreMenu } from '../constants';

const ExploreMenu = () => (
  <section
    className={`font-poppins text-[15]  text-white p-5 capitalize w-full  `}
  >
    <div className='text-left border-b-2 text-2xl uppercase border-white font-semibold h-[60px]'>
      Explore
    </div>
    <div>
      <ul className='mt-7'>
        {exploreMenu.map((explore) => (
          <li
            key={explore.id}
            className={`flex justify-start items-center gap-4 explore-menu my-4 py-1 rounded-[5px] cursor-pointer`}
          >
            <img src={explore.icon} className='w-[34px] h-[34px]' />
            <h1>{explore.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ExploreMenu;
