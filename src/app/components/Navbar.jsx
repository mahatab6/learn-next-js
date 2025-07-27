import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-10/12 mx-auto'>
          <ul className='flex justify-between'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </nav>
    );
};

export default Navbar;