import React from 'react'

const SearchItem = () => {
  return (
    <div className='border-[1px] border-yellow-300 p-[50px] rounded-lg flex gap-[20px] mb-[20px]'>
        <img className='w-[400px] h-[400px] object-cover' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/33/7d/hotel-view.jpg?w=1200&h=-1&s=1' alt=""/>
        <div className='flex flex-col gap-[10px] flex-[2]' >
            <h1 className='text-2xl' style={{color : '#0071c2'}}>Towel street apartments</h1>
            <span className=''>500 meter from center</span>
            <span className=''>Free airport taxi</span>
            <span className=''>Studio apartement with air conditioning</span>
            <span className=''>Entire studio . 1 bathroom . 21m  1 full bed </span>
            <span className=''> Free cancellation</span>
            <span className=''>You can cancel later, so look in this greate price today</span>
        </div>
        <div className='flex-[1]'>details</div>
      
    </div>
  )
}

export default SearchItem
