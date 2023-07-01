import React from 'react';
import ExploreMenu from './ExploreMenu';
import Sidebar from './Sidebar';
import SoundMenu from './SoundMenu';

const LeftSidebar = () => {
  return (
    <div className='section-background h-screen w-full flex flex-col justify-between'>
      <div className='flex h-full'>
        <Sidebar />
        <ExploreMenu />
      </div>
      <SoundMenu />
    </div>
  );
};

export default LeftSidebar;
