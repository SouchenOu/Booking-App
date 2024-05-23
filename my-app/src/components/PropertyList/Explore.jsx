import React from 'react'

const Explore = () => {
  return (
    <div className='flex  max-w-[1800px] flex-col gap-[20px]'> 
        <h1 className='text-[40px] font-bold'>Explore Morocco</h1>
        <p className='text-[20px]'>These popular destinations have a lot to offer</p>
        <div className='flex gap-[10px]'>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg" alt="Hotels"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Hotels</h1>
                    <h2 className='texl-lg'>Hotels</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg" alt="Appartements"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Appartements</h1>
                    <h2 className='text-lg'>Appartements</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://i.pinimg.com/originals/74/a1/ce/74a1ce39517604d4812123b25e256f0c.jpg" alt="Villas"/>
                <div className=''>
                    <h1 className='text-2xl'>Villas</h1>
                    <h2 className='text-lg'>Villas</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg" alt="Resorts"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Resorts</h1>
                    <h2 className='text-lg'> Resorts</h2>
                </div>
            </div>
            <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                <img className='w-[1800px] h-[200px] object-cover' src="https://static.wixstatic.com/media/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg/v1/fill/w_1199,h_800,al_c/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg" alt="Cabins"/>
                <div className='cursor-pointer'>
                    <h1 className='text-2xl'>Cabins</h1>
                    <h2 className='text-lg'>Cabins</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore
