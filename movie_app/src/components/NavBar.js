import React from "react";
import "./NavBar.css";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

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
          <Link to='/'>
            <button className='headerbtn headerbtn-movie-list'>
              Movie List
            </button>
          </Link>
          <div className='headerbtn-bottom'></div>
        </div>
        <div className='liked-list-hover'>
          <Link to='/liked'>
            <button className='headerbtn headerbtn-liked-list'>
              Liked List
            </button>
          </Link>
          <div className='headerbtn-bottom'></div>
        </div>
        <div className='blocked-list-hover'>
          <Link to='/blocked'>
            <button className='headerbtn headerbtn-blocked-list'>
              Blocked List
            </button>
          </Link>

          <div className='headerbtn-bottom'></div>
        </div>
      </div>
      <div className='header-bottom-line'></div>
    </header>
  );
};

export default NavBar;
