import React from 'react'
import useFetch from '../../hooks/useFetch'

const FeaturesProperties = () => {
    const {data, loading, error} = useFetch("http://localhost:8000/hotels/features?featured=true");
  return (
    <div className='flex w-full max-w-[1800px] gap-[20px] justify-between '>
        <div className='gap-[10px] flex flex-col shadow-custom  p-[40px]'>
            <img className=''  src="/h3.jpg" alt=""/>
            <span className=' text-[30px] font-bold'>{data[0]?.name}</span>
            <span className='font-normal'>{data[0]?.city}</span>
            <span className='font-medium'>Starting from {data[0]?.cheapestPrice}$</span>
            <div className=''>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        <div className='gap-[10px] flex flex-col shadow-custom  p-[40px]'>
            <img className='' src="/h4.jpg" alt=""/>
            <span className='text-[30px] font-bold'>{data[1]?.name}</span>
            <span className='font-normal'>{data[1]?.city}</span>
            <span className='font-medium'>Starting from {data[1]?.cheapestPrice}$</span>
            <div className='gap-[2px]'>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        <div className='gap-[10px] flex flex-col shadow-custom  p-[40px]'>
            <img className='' src="/h9.jpg" alt=""/>
            <span className=' text-[30px] font-bold'>{data[2]?.name}</span>
            <span className='font-normal'>{data[2]?.city}</span>
            <span className='font-medium'>Starting from {data[2]?.cheapestPrice}$</span>
            <div className='gap-[2px]'>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        <div className='gap-[10px] flex flex-col shadow-custom  p-[40px]'>
            <img className='' src="/h10.jpg" alt=""/>
            <span className=' text-[30px] font-bold'>{data[1]?.name}</span>
            <span className='font-normal'>{data[1]?.city}</span>
            <span className='font-medium'>Starting from {data[1]?.cheapestPrice}$</span>
            <div className='gap-[2px]'>
                <button className="p-[6px] mr-[10px] font-bold text-white rounded cursor-pointer" style={{background : '#003580'}} >8.9</button>
                <span className='text-lg'>Excelent</span>
            </div>

        </div>
        
      
    </div>
  )
}

export default FeaturesProperties
