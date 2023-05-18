import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navber__links">
                <Link to='/about'> About Projec</Link>
                <Link to='/main'> Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;