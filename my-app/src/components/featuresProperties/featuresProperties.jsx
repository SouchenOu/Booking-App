import React from 'react'

const FeaturesProperties = () => {
  return (
    <div className='flex w-full max-w-[1024px] gap-[20px] justify-between'>
        <div className='gap-[10px] flex flex-col'>
            <img className=''  src="https://cdn.generationvoyage.fr/2023/07/hotels-luxe-agadir-630x421.jpg" alt=""/>
            <span className='font-bold'>ApartHotel stare Miasto</span>
            <span className='font-normal'>Madrid</span>
            <span className='font-medium'>Starting from 120$</span>
            <div className=''>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        <div className='gap-[10px] flex flex-col'>
            <img className='' src="https://cdn.generationvoyage.fr/2023/07/hotels-luxe-agadir-630x421.jpg" alt=""/>
            <span className='font-bold'>ApartHotel stare Miasto</span>
            <span className='font-normal'>Madrid</span>
            <span className='font-medium'>Starting from 120$</span>
            <div className='gap-[2px]'>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        <div className='gap-[10px] flex flex-col'>
            <img className='' src="https://cdn.generationvoyage.fr/2023/07/hotels-luxe-agadir-630x421.jpg" alt=""/>
            <span className='font-bold'>ApartHotel stare Miasto</span>
            <span className='font-normal'>Madrid</span>
            <span className='font-medium'>Starting from 120$</span>
            <div className='gap-[2px]'>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        
      
    </div>
  )
}

export default FeaturesProperties
