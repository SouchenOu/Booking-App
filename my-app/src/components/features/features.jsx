import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './features.css';

const Features = () => {
    const { data, loading, error } = useFetch("https://booking-app-udqo.onrender.com/hotels/countByCity?cities=casablanca,fes,Maknes");

    const images1 = [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg'
    ];

    const images2 = [
        '/ttt.jpg',
    ];

    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 1000);

        const interval2 = setInterval(() => {
            setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
        }, 1000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [images1.length, images2.length]);

    return (
        <div className='flex flex-col w-full max-w-[800px] xl:max-w-[1800px] justify-between gap-[20px] z-[1] py-[30px]'>
            {loading ? ("Loading please wait") : (
                <>
                    <div className='flex flex-col'>
                        <h1 className=' px-[40px] text-[40px] font-bold'>Offers</h1>
                        <p className='px-[40px] text-[20px] text-gray-500'>Promotions, deals and special offers for you</p>
                        <div className='flex flex-col xl:flex-row 2xl:flex-row gap-[10px] p-[40px]'>
                            <div className='flex flex-col sm:flex-row xl:w-[900px] w-[700px] border-[2px] border-solid border-gray-500 p-[30px] gap-[10px]'>
                                <div className='flex flex-col gap-[10px]'>
                                    <h1 className='text-[30px] font-bold'>Planning a trip to the 2024 Summer Games?</h1>
                                    <p className='text-[20px]'>Brussels is a quick train ride from all the action</p>
                                    <button className='text-[20px] font-bold border-[1px] border-solid border-[#0D19A3] w-[300px] bg-[#0D19A3] text-white'>Explore Brussels</button>
                                </div>
                                <img src={images1[currentImageIndex1]} alt="img" className='w-[300px] h-[200px] transition-opacity duration-1000' />
                            </div>
                            <div className='flex flex-col sm:flex-row xl:w-[900px] w-[700px] border-[2px] border-solid border-gray-500 p-[30px] gap-[10px]' style={{ backgroundImage: `url(${images2[currentImageIndex2]})` }}>
                                <div className='flex flex-col gap-[10px]'>
                                    <h1 className='text-[30px] font-bold text-white'>Seize the moment</h1>
                                    <p className='text-[20px] text-white'>Save 15% or more when you book and stay before 1 October 2024</p>
                                    <button className='text-[20px] font-bold border-[1px] border-solid border-[#0D19A3] w-[300px] bg-[#0D19A3] text-white'>Find Gateway Deals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rest of your component */}
                </>
            )}
        </div>
    );
}

export default Features;