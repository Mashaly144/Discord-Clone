import React from 'react';
import Banner from './Banner';
import RecentAdd from './RecentAdd';
import Populer from './Populer';
import FeatureCommunity from './FeatureCommunity';
import SearchBar from './SearchBar';

const Feed = () => {
  return (
    <div className='bg-primary w-full h-screen  '>
      {/* top search bar */}
      <SearchBar />
      <div className='p-7 h-screen scrollbar-hide overflow-scroll'>
        {/* banner */}
        <Banner />
        {/* feature community */}
        <FeatureCommunity />
        {/* popular right now */}
        <Populer />
        {/* recent add */}
        <RecentAdd />
      </div>
    </div>
  );
};

export default Feed;
