import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiSearch } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API_URL } from '../Utils/constants';
import { cacheResults } from '../Utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugggestions, setShowSuggestions] = useState(false);


  const searchCache = useSelector(store=> store.search);
  const dispatch = useDispatch(); 

// console.log("ApiCall-");
  useEffect(() => { 
    const timer = setTimeout(() => {
    if (searchCache[searchQuery]) {  //if present in cache => don't make apic all
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions()} 
     }, 200);
  
    return () => {
    clearTimeout(timer);
  };
},);


const getSearchSuggestions = async () => {
  const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API_URL + searchQuery);
  const json = await data.json();
  setSuggestions(json[1]);

  //upadate cache
  dispatch(cacheResults({
    [searchQuery] : json[1],
  }));
}

//to update cache
const toggleMenuHandler = () => {
  dispatch(toggleMenu());
};


return (
  <div className='px-4 py-2 flex justify-between items-center shadow-md w-full sticky top-0 z-10 bg-white h-[4.62rem] outline'>

    <div className='left-items flex items-center'>
      <button className='p-2 rounded-full hover:bg-zinc-200' >
        <RxHamburgerMenu
          size='1.5rem'
          onClick={() => toggleMenuHandler()}
        />
      </button>

      <a href="/">
        <img className='flex cursor-pointer h-16 items-center max-md:hidden' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Logo" />
      </a>
    </div>

    <div className='center w-3/5 2xl:w-2/5 '>
      <div className='searchbar flex-1 flex items-center rounded-3xl border-2'>
        <input
          className='rounded-l-3xl p-2 pl-8 focus:outline-none w-full'
          type="text"
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
         <button className='p-3 cursor-pointer px-8 bg-zinc-100 hover:bg-zinc-200 rounded-r-3xl max-md:bg-white max-md:border-none max-md:px-4 max-lg:px-4'>
          <TfiSearch size='1.2rem' />
          </button>
      </div>

      {showSugggestions && 
      <div
        className="px-2 py-1.5 w-[41.5rem] fixed shadow-lg rounded-lg border border-zinc-200 bg-zinc-100">
        <ul >
          {suggestions.map(s => 
          <li 
          key={s} 
          className='flex py-2 hover:bg-gray-500 shadow-sm'
          >
            <span className='flex-shrink-0 mt-1 pr-2'><TfiSearch size='0.9rem' /></span> 
            <span className='flex-grow'>{s}</span>
          </li>
          )}
        </ul>
      </div>}
    </div>

    <div>
      <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
    </div>

  </div>
)
}

export default Head;