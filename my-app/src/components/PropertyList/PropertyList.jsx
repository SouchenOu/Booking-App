import React from 'react'
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
    const {data, loading, error} = useFetch("https://booking-app-udqo.onrender.com/hotels/countByType");
  return (
    <div className='flex w-full  max-w-[1800px] justify-between gap-[10px] px-[40px]'>
        { loading ? ('loading...' ) : (
        <>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg" alt="Hotels"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Hotels</h1>
                    <h2 className='texl-lg'>{data[0]?.count} Hotels</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU" alt="Appartements"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Appartements</h1>
                    <h2 className='text-lg'>{data[1]?.count} Appartements</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://i.pinimg.com/originals/74/a1/ce/74a1ce39517604d4812123b25e256f0c.jpg" alt="Villas"/>
                <div className=''>
                    <h1 className='text-2xl'>Villas</h1>
                    <h2 className='text-lg'>{data[3]?.count} Villas</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg" alt="Resorts"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Resorts</h1>
                    <h2 className='text-lg'>{data[2]?.count} Resorts</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://static.wixstatic.com/media/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg/v1/fill/w_1199,h_800,al_c/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg" alt="Cabins"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Cabins</h1>
                    <h2 className='text-lg'>{data[4]?.count} Cabins</h2>
                </div>
            </div>
        </>)}
       
      
    </div>
  )
}

export default PropertyList
