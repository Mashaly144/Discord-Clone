import React from 'react';
import Profile from './Profile';
import NewMembers from './NewMembers';
import RecentActivity from './RecentActivity';
const RightSidebar = () => {
  return (
    <div className='bg-[#2C2F48] h-screen scrollbar-hide overflow-y-scroll w-full'>
      <Profile />
      <NewMembers />
      <RecentActivity />
    </div>
  );
};

export default RightSidebar;
