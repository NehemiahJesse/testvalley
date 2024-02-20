
import React from 'react';
import Searchbar from './Searchbar';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <div className="big-body">
    <header className="header-container">
      <div className="top-nav">
        <div className="top-nav2">
          <img src="/logo.svg" className="logo"/>
          <div className="menu-icon">
           <span>☰</span>
          </div>

         {/* Additional elements for wider screens */}
          <p className="header-p">카테고리</p>
           <Searchbar />
        </div>
        <div className="button-area">
                <button className="arrow-button">
                <img src='/arrow.svg'/>
                </button>
                <button>로그인 / 회원가입</button>  
        </div>
        <div className='icon-area'>
          <img className='ico' src='/bell.svg'></img>
          <img className="ico" src='/search2.svg'></img>
        </div>
      </div>
    </header>
    </div>
);
};



export default Header;