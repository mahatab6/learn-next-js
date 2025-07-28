import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {

  // data/services.js

const services = [
  {
    id: 'srv-101xa',
    name: 'Web Development',
    image: 'https://i.ibb.co/BHn0Jjyz/Web-Development.png',
    description: 'Full-stack web development services using modern technologies like React, Node.js, and MongoDB.',
  },
  {
    id: 'srv-204bk',
    name: 'UI/UX Design',
    image: 'https://i.ibb.co/TBpfBn99/UIUX-Design.jpg',
    description: 'Crafting intuitive and engaging user interfaces for web and mobile applications.',
  },
  {
    id: 'srv-309mn',
    name: 'SEO Optimization',
    image: 'https://i.ibb.co/Fk5YcLRG/SEO-image1.jpg',
    description: 'Boost your website’s search engine ranking with our expert SEO services.',
  },
];


  return (
    <div>
        <p className='text-2xl font-bold text-center mt-10'>ServicesPage</p>
        <div className='flex gap-5'>
          {
            services.map((d)=>(
              <div key={d?.id} className=''>
                <Link href={`/services/${d?.id}`} >
                <img className='w-100 h-100'  src={d?.image} alt="" />
                </Link>
                <h1>{d?.name}</h1>
              </div>
            ))
          }
        </div>
    </div>
  )
}
