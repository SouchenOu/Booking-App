import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {DateRange} from "react-date-range"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"

const Header = () => {

    const [active, setActive] = useState(null);
    const[openDate, setOpenDate] = useState(false);
    // const [openOptions, setOpenOptions] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    // const [options, setOptions] = useState();
    const [date, setDate] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key: 'selection'
        }
    ]);

    const handleClick = (value) =>{
        setActive(value);
    }


    const optionCounter = (element, action) =>{
        setOption((prev)=>
        {
            return {
                ...prev,
                [element] : action === 'In' ? option[element] + 1 : option[element] - 1,
            }
        })

    }


    
  return (
    <div className='text-white flex justify-center  relative' style={{ background: '#003580'}}>
        <div className='w-full max-w-[1024px] mt-[20px] ml-[0px]  mb-[100px] mr-[0px]'>
            <div className='flex gap-[40px] mb-[50px]'>
                <div className={`cursor-pointer flex gap-[10px] items-center  ${active === 'stays' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={()=>handleClick("stays")}>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Flights' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={()=>handleClick("Flights")}>
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Car' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={()=>handleClick("Car")}>
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Attractions' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={() =>handleClick("Attractions")}>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center ${active === 'taxis' ? 'border border-blue-500' : ' border-gray-300'}   outline-none p-2 rounded-lg `} onClick={()=>handleClick("taxis")}>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airports taxis</span>
                </div>
            </div>
                <h1 className='text-white  text-2xl font-bold '> A life time of discounts? It's Genius</h1>
                <p className='mt-[20px] mb-[20px]'> Get rewarded for your travels - unlock instant savings of 10% or more with a free bookingHotels account.</p>
                <button className=' p-[10px]  border-[3px]  bg-white rounded cursor-pointer' style={{color : '#003580'}}> SignIn / Register</button>
                <div className='h-[30px] flex items-center justify-between border-solid border-[3px]  border-yellow-300  p-6 rounded-lg absolute bottom-[-25px] w-full max-w-[1024px]' style={{background:'#fff'}} >
                    <div className='gap-[10px] flex items-center' >
                        <FontAwesomeIcon icon={faBed} className='' style={{color: 'lightgray'}}/>
                        <input type='text'  placeholder="Where are you going?" className='border-none outline-none	' style={{color :'lightgray'}}/>

                    </div>
                    <div className='gap-[10px] flex items-center'>
                        <FontAwesomeIcon icon={faCalendarDay} className='' style={{color: 'lightgray'}}/>
                        <span onClick={()=>setOpenDate(!openDate)} className='' style={{color : 'lightgray'}} > {`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
                { openDate && <DateRange className='top-[50px] absolute' editableDateInputs={true} onChange={(item) => 
                    setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>}
                    </div>
                    <div className='gap-[10px] flex items-center'>
                        <FontAwesomeIcon icon={faPerson} className='' style={{color: 'lightgray'}}/>
                        <span className=' ' style={{color : 'lightgray'}}>{option.adult} . {option.children} . {option.room}</span>
                        <div className='absolute top-[50px] text-gray-500 rounded-lg' style={{background: '#f0efef'}}>
                            <div className='flex justify-between m-[10px]'>
                                <span className=''>Adult</span>
                                <div className='flex items-center gap-10 text-xl'>
                                    <button onClick={() => optionCounter("adult", "De")}className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}}>-</button>
                                    <span className=''>1</span>
                                    <button onClick={() => optionCounter("adult", "In")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}}>+</button>
                                </div>
                               
                            </div>
                            <div className='flex justify-between m-[10px]'>
                                <span className=''>Children</span>
                                <div className='flex items-center gap-10 text-xl'>
                                    <button onClick={()=> optionCounter("children", "De")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}}>-</button>
                                    <span className=''>1</span>
                                    <button onClick={()=>optionCounter("children", "In")}className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}}>+</button>
                                </div>
                               
                            </div>
                            <div className='flex justify-between m-[10px]'>
                                <span className=''>Room</span>
                                <div className='flex items-center gap-10 text-xl'>
                                    <button onClick={()=>optionCounter("room", "De")} className='w-[50px] h-[50px] rounded-lg ' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}} >-</button>
                                    <span className=''>1</span>
                                    <button onClick={()=>optionCounter("room", "In")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#003580', border : '1px solid #003580'}}>+</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='gap-[10px] flex items-center '>
                        <button className='p-[10px] rounded cursor-pointer' style={{background: '#003580'}}>Search</button>
                    </div>
                </div>
               
        </div>
        
      
    </div>
  )
}

export default Header
