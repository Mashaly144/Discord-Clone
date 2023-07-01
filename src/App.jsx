import React from 'react';
import './App.css';
import { RightSidebar, LeftSidebar, Feed } from './components';

const App = () => {
  return (
    <div className='flex justify-between w-full h-screen overflow-hidden scroll-smooth'>
      {/* done */}
      <div className='w-[600px]'>
        <LeftSidebar />
      </div>
      <div className='w-full'>
        <Feed />
      </div>
      <div className='w-[600px]'>
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
