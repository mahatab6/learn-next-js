import Notfound404 from '@/app/not-found';
import React from 'react'

export default function details({ params }) {
    const id = params?.id;

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

    const searchId = services.find((d)=> d.id === id);
    if(searchId){
        return (
            <div>
                <h1>{searchId?.name}</h1>
                <img src={searchId?.image} alt="" />
                <p>{searchId?.description}</p>
            </div>
        )
    }
    else{
        return (
         Notfound404()
        );
    }

 
}
