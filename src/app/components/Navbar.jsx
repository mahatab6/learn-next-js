import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-10/12 mx-auto'>
          <ul className='flex justify-between'>
            <Link href='/'>
            <li>Home</li>
            </Link>
            <Link href='/services'>
            <li>Services</li>
            </Link>
            <Link href='/about'>
            <li>About</li>
            </Link>
          </ul>
        </nav>
    );
};

export default Navbar;