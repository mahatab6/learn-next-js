"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const params = usePathname();
  console.log(params, );

  if(!params.includes("dashboard")){
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
  } else{
    return <></>;
  }
    
};

export default Navbar;