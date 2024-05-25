import React, { useEffect, useState } from 'react'
import './Explore.css'

const Inspiration = () => {
    const images1 = [
        '/new.jpg',
        '/new2.jpg',
        '/new3.jpg'
    ];
   
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 1000);

      

        return () => {
            clearInterval(interval1);
        };
    }, [images1.length]);
  return (
    <div className='flex  max-w-[1800px] gap-[20px]'>
         <section className='hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto'>
                <div className='rounded-lg  relative  cursor-pointer overflow-hidden flex-shrink-0 zoom-container'>   
                        <img className="w-[800px] h-[600px] object-cover brightness-75" src={images1[currentImageIndex1]} alt="hotel"/>
                        <div className='absolute bottom-[10px] right-[10px] text-2xl font-bold p-2 text-white' >
                            <div className='flex gap-[4px]'>
                                <div className='flex flex-col p-[20px]'>
                                    <h1 className='text-[30px] font-bold'>New Year’s Eve in New York City</h1>
                                    <p className='text-[20px]'>Ring in the new year with iconic moments and unforgettable memories in New York City</p>
                                </div>
                            </div>         
                        </div>
                                    
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0 zoom-container'>
                    <img className='w-full h-[400px] object-cover' src="/japan.jpg" alt="Hotels" />
                    <div className='cursor-pointer p-2'>
                        <h1 className='text-[30px] font-bold'>6 best ryokans in Japan to rejuvenate yourself</h1>
                        <p className='text-[20px]'>Discover unmissable ryokans to relax and unwind in style.</p>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0 zoom-container'>
                    <img className='w-full h-[400px] object-cover' src="/k.jpg" alt="Hotels" />
                    <div className='cursor-pointer p-2'>
                        <h1 className='text-[30px] font-bold'>7 best places in Asia to celebrate Christmas</h1>
                        <p className='text-[20px]'>Discover the shimmering lights and festive sights of Asia’s holiday season.</p>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0 zoom-container'>
                <img className='w-full h-[400px] object-cover' src="/lond.jpg" alt="Hotels" />
                    <div className='cursor-pointer p-2'>
                        <h1 className='text-[30px] font-bold'>6 magical Christmas experiences in London</h1>
                        <p className='text-[20px]'>A London Christmas: cherished traditions and new discoveries.</p>
                    </div>
                    </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0 zoom-container'>
                    <img className='w-full h-[400px] object-cover' src="/kk.jpg" alt="Hotels" />
                    <div className='cursor-pointer p-2'>
                        <h1 className='text-[30px] font-bold'>Top 5 places for winter sports in South Korea</h1>
                        <p className='text-[20px]'>Ski Olympic slopes and jumps, before relaxing in a traditional Korean bathhouse.</p>
                    </div>
                </div>
      
    </section>

    </div>
   
  )
}

export default Inspiration
