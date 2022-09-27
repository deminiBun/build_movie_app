import React from "react";
import "./NavBar.css";
import icon from "../assets/icon.png";

const NavBar = () => {
  return (
    <header className='container'>
      <div className='header-container'>
        <img
          src={icon}
          alt='movie data base icon'
          width='100px'
          height='100px'
        />
        <div className='movie-list-hover'>
          <button className='headerbtn headerbtn-movie-list'>Movie List</button>
          <div className='headerbtn-bottom'></div>
        </div>
        <div className='liked-list-hover'>
          <button className='headerbtn headerbtn-liked-list'>Liked List</button>
          <div className='headerbtn-bottom'></div>
        </div>
        <div className='blocked-list-hover'>
          <button className='headerbtn headerbtn-blocked-list'>
            Blocked List
          </button>
          <div className='headerbtn-bottom'></div>
        </div>
      </div>
      <div className='header-bottom-line'></div>
      <h1 className='header-title'>The Most Popular Movies</h1>
    </header>
  );
};

export default NavBar;
