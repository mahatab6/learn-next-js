"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [shouldShowNavbar, setShouldShowNavbar] = useState(false);

  useEffect(() => {
    if (!pathname?.includes("dashboard")) {
      setShouldShowNavbar(true);
    }
  }, [pathname]);

  if (!shouldShowNavbar) return null;

  return (
    <nav className='w-10/12 mx-auto'>
      <ul className='flex justify-between'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/services'><li>Services</li></Link>
        <Link href='/about'><li>About</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
