import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Searchbar = () => {
  return (
  <div className='search-nav'>
    {/* Form and input elements */}
    <form>
        <button className="search-button">
          <img src="/search_new.svg" alt="" className="search-icon" />
        </button>
        <input
          type="search"
          placeholder='Type Here'
          className="search-input"
          onChange={(e) => handleSearch(e)}
        />
      </form>
  </div>

  );
};

export default Searchbar;