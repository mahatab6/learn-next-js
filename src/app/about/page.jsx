"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AboutPage() {

    // active user logical implemant

    const router = useRouter();
    const isLoggedIn = false;
    const handleNavigation = () => {
        if(isLoggedIn){
            router.push("/about/address");
        } else{
            router.push("/")
        }
    }



  return (
    <div>
        <p>AboutPage</p>

        <p>
            <Link href='/about/address'>address</Link>
        </p>

        <button className=' cursor-pointer' type='button' onClick={handleNavigation} >Address</button>
    </div>
  )
}
