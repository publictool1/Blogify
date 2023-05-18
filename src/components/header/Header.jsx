import React from 'react';
import './Header.css';
import logo from '../../images/blog.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className='header__component'>
      <div className="header__contant">
        <div className='image__contant'>
          <img src={logo} alt="1" />
          <div className='links__content'>
            <Link to=''> About Project</Link>
            <Link to='/main'> Posts</Link>
          </div>
        </div>
        <div className="title__contant">Blogify</div>
      </div>
    </div>
  );
}

export default Header;
