import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiSearch } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';



const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className='px-4 py-2 flex justify-between items-center shadow-md w-full sticky top-0 z-10 bg-white h-[4.62rem]'>
      <div className='left-items flex items-center'>
        <button className='p-2 rounded-full hover:bg-zinc-200' >
          <RxHamburgerMenu
            size='1.5rem'
            onClick={() => toggleMenuHandler()}
          />
        </button>

        <img className='flex px-3 cursor-pointer h-10 items-center max-md:hidden' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/640px-YouTube_Logo_%282013-2017%29.svg.png" alt="Logo" />
      </div>
      <div className='center w-3/5 2xl:w-2/5 '>
         <div className='searchbar flex-1 flex items-center rounded-3xl border-2'> 
          <input 
          className='rounded-l-3xl p-2 pl-8 focus:outline-none w-full' 
          type="text" 
          placeholder='Search'
          />
          <div className='p-3 cursor-pointer px-8 bg-zinc-100 hover:bg-zinc-200 rounded-r-3xl max-md:bg-white max-md:border-none max-md:px-4 max-lg:px-4'>
            <TfiSearch size='1.2rem'/>
          </div>
        </div> 
      </div>
      <div>
        <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
      </div>
    </div>
  )
}

export default Head;