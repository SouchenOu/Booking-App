import { faArrowRight, faHeart, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({elem}) => {

  return (
    <div className='border-[1px] relative border-yellow-300 p-[50px] rounded-lg flex gap-[20px]  mb-[20px]'>
        <img className='w-[400px] h-[400px] object-cover' src={elem.photos[0]} alt=""/>
        <div className=' absolute rounded-[50%] p-[7px] '>
            <FontAwesomeIcon icon={faHeart} className='  w-[30px] h-[30px] cursor-pointer ' style={{color : 'white'}} />
        </div>
        <div className='flex flex-col gap-[10px] flex-[2]'>
            <h1 className='text-2xl font-bold' style={{color : '#CC6D3D'}}>{elem.name}</h1>
            <div className='flex gap-[30px] w-[580px]'>
                <Link className='text-[20px] font-[400] underline' style={{color : '#0D19A3'}}>{elem.address}</Link>
                <Link className='text-[20px] font-[400] underline' style={{color : '#0D19A3'}}>Show on map</Link>
                <span className='text-[20px] font-[400]'>{elem.distance}</span>
            </div>

            { elem.city === 'Agadir' && 
                <div className='flex gap-[10px]'>
                    <FontAwesomeIcon icon={faUmbrellaBeach} className='text-[40px] font-bold w-[20px] h-[20px]'  />
                    <span className='text-xl'>{elem.From} beach </span>


                </div>
            }
            <span className='text-xl p-[9px] rounded-lg font-bold ' style={{background: '#A3B4C8'}}>Free airport taxi</span>
            <span className='text-xl font-bold'>{elem.desc}</span>
            <span className='text-xl' >Entire studio . 1 bathroom . 21m  1 full bed </span>
            {elem.New ? <span className='text-[20px] font-[500]' style={{color : 'green'}}>Breakfast included</span> : (!elem.New && elem.type === 'hotel') ? <span className='text-[20px] font-[500]' style={{color : 'violet'}}>Only 3 rooms left at this price on our site</span> : <span className='text-[20px] font-[500]' style={{color : 'red'}}>Only 4 left at this price on our site</span>}
            <span className='text-xl font-extrabold' style={{color : '#53759c'}}> Free cancellation</span>
            <span className='text-l' style={{color : '#53759c'}}>You can cancel later, so look in this greate price today</span>
        </div>
        <div className='flex-[1] flex flex-col justify-between'>
            <div className='flex gap-[10px] px-[30px] w-full'>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold' style={{color : 'red'}}>{elem.rating === 6  ? 'Good' : elem.rating > 7 ? "Very Good" : "Review Score" }</span>

                    <span className='text-2xl w-full'>{elem.Reviews}</span>


                </div>
                <button className='text-white px-[8px] py-[0px] w-[50px] h-[40px] font-bold border-none' style={{background : '#0D19A3'}}>{elem.rating}</button>
            </div>
            <div className='flex flex-col gap-[5px] text-right'>
                <span className='text-2xl font-bold'>{elem.cheapestPrice} MAD</span>
                <span className='text-xl font-semibold' style={{color : 'gray'}}>{elem.Taxes}</span>
                <Link to={`/hotels/${elem._id}`} className='relative flex items-center justify-center'>
                        <button className='text-white  text-[20px] font-bold px-[100px] w-[360px] py-[10px] border-none rounded-lg cursor-pointer' style={{background : '#0D19A3'}}>See availabality</button>
                        <FontAwesomeIcon icon={faArrowRight} className=' size-7 absolute right-[5px]  text-white  text-center '/>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default SearchItem
