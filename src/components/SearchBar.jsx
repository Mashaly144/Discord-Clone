import React from 'react';
import Searchbutton from '../UI/Searchbutton';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchBar = () => {
  return (
    <form className='w-full h-[80px] flex justify-center items-center bg-secondary'>
      <Searchbutton />
    </form>
  );
};

export default SearchBar;
