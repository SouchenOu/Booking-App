import React from 'react'

const SearchItem = () => {
  return (
    <div className='border-[1px] border-yellow-300 p-[50px] rounded-lg flex gap-[20px] mb-[20px]'>
        <img className='w-[400px] h-[400px] object-cover' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/33/7d/hotel-view.jpg?w=1200&h=-1&s=1' alt=""/>
        <div className='flex flex-col gap-[10px] flex-[2]' >
            <h1 className='text-2xl font-bold' style={{color : '#CC6D3D'}}>Towel street apartments</h1>
            <span className='text-xl'>500 meter from center</span>
            <span className='text-xl p-[3px] rounded-lg' style={{background: '#A3B4C8'}}>Free airport taxi</span>
            <span className='text-xl font-bold'>Studio apartement with air conditioning</span>
            <span className='text-xl' >Entire studio . 1 bathroom . 21m  1 full bed </span>
            <span className='text-xl font-extrabold' style={{color : '#53759c'}}> Free cancellation</span>
            <span className='text-l' style={{color : '#53759c'}}>You can cancel later, so look in this greate price today</span>
        </div>
        <div className='flex-[1] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <span className='text-2xl'>Excelent</span>
                <button className='text-white p-[8px] font-bold border-none' style={{background : '#022E51'}}>8.9</button>
            </div>
            <div className='flex flex-col gap-[5px] text-right'>
                <span className='text-2xl font-normal'>123$</span>
                <span className='text-xl font-semibold' style={{color : 'gray'}}>Includes taxes and fees</span>
                <button className='text-white text-2xl font-bold p-[10px] border-none rounded-lg cursor-pointer' style={{background : '#022E51'}}>See availabality</button>
            </div>
        </div>
      
    </div>
  )
}

export default SearchItem
