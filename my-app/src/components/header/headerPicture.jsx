import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import {DateRange} from "react-date-range"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"
import './header.css'

import {useNavigate} from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const HeaderPicture = ({type}) => {

    const [destination, setDestination] = useState("");
    const {user} = useContext(AuthContext);

    const [active, setActive] = useState(null);
    const[openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    // const [options, setOptions] = useState();
    const [dates, setDates] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key: 'selection'
        }
    ]);

    const {dispatch} = useContext(SearchContext);

    const handleClick = (value) =>{
        setActive(value);
    }


    const optionCounter = (element, action) =>{
        setOptions((prev)=>
        {
            return {
                ...prev,
                [element] : action === 'In' ? options[element] + 1 : options[element] - 1,
            }
        })

    }

    const navigate = useNavigate();

    const handleSearch = () =>{
        dispatch({type : "NEW_SEARCH", payload: {destination, dates, options}})
        navigate('/hotels' ,{state: {destination,dates,options}});


    } 
  return (
    <div className='text-white flex justify-center h-[700px] relative navbar-background' >
        <div className= 'w-full  px-[500px] mt-[20px] ml-[0px]  mb-[100px] mr-[0px]'>
            <div className='flex gap-[40px] mb-[50px]'>
                <div className={`cursor-pointer flex gap-[10px] items-center  ${active === 'stays' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-[14px] rounded-lg `} onClick={()=>handleClick("stays")}>
                    <FontAwesomeIcon icon={faBed} className='text-[20px]'/>
                    <span className='text-[25px] font-bold'>Stays</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Flights' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={()=>handleClick("Flights")}>
                    <FontAwesomeIcon icon={faPlane} className='text-[20px]'/>
                    <span className='text-[25px] font-bold'>Flights</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Car' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={()=>handleClick("Car")}>
                    <FontAwesomeIcon icon={faCar} className='text-[20px]'/>
                    <span className='text-[25px] font-bold'>Car rentals</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === 'Attractions' ? 'border border-blue-500' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={() =>handleClick("Attractions")}>
                    <FontAwesomeIcon icon={faBed} className='text-[20px]'/>
                    <span className='text-[25px] font-bold'>Attractions</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center ${active === 'taxis' ? 'border border-blue-500' : ' border-gray-300'}   outline-none p-2 rounded-lg `} onClick={()=>handleClick("taxis")}>
                    <FontAwesomeIcon icon={faTaxi} className='text-[20px]'/>
                    <span className='text-[25px] font-bold'>Airports taxis</span>
                </div>
            </div>
            { type !== 'list' &&
                 <>
                 <h1 className='text-white  text-[60px] font-bold '> Find your next stay</h1>
                     <p className='mt-[20px] mb-[20px]  text-[40px]'> Search low prices on hotels, homes and much more....</p>
                    {!user && <button className=' p-[10px]  border-[3px]  text-white rounded cursor-pointer' style={{background : '#B74803'}}> SignIn / Register</button>} 
                     <div className='h-[80px]  flex items-center justify-between border-solid border-[7px] border-[#E4C580]   p-6 rounded-lg absolute bottom-[-25px]  w-[1500px]' style={{background:'#fff'}} >
                         <div className='gap-[10px] flex items-center' >
                             <FontAwesomeIcon icon={faBed} className='text-[30px]' style={{color: 'gray'}}/>
                             <input onChange={(e) => setDestination(e.target.value)} type='text'  placeholder="Where are you going?" className='border-none outline-none text-[20px] font-bold	' style={{color :'gray'}}/>
     
                         </div>
                         <div className='cursor-pointer gap-[10px] flex items-center'>
                             <FontAwesomeIcon icon={faCalendarDay} className='text-[30px]' style={{color: 'gray'}}/>
                             <span className="text-[20px] font-bold" onClick={()=>setOpenDate(!openDate)}  style={{color : 'gray'}} > {`${format(dates[0].startDate, "MM/dd/yyyy")}`}</span>
                     { openDate && <DateRange className=' z-[2] top-[50px] absolute cursor-pointer' editableDateInputs={true} onChange={(item) => 
                         setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} minDate={new Date()}/>}
                         </div>
                         <div onClick={()=>setOpenOptions(!openOptions)} className=' gap-[10px] flex items-center cursor-pointer'>
                             <FontAwesomeIcon icon={faPerson} className='text-[20px]' style={{color: 'gray'}}/>
                             <span className='text-[20px] font-bold' style={{color : 'gray'}}>{options.adult} . {options.children} . {options.room}</span>
                            {openOptions && <div className='  z-[2] absolute top-[60px] text-gray-500 rounded-lg' style={{background: '#f0efef'}}>
                                 <div className='flex justify-between m-[10px]'>
                                     <span className='text-[20px] font-bold'>Adult</span>
                                     <div className='flex items-center gap-10 text-lg'>
                                         <button disabled={options.children <= '1'} onClick={() => optionCounter("adult", "De")}className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}}>-</button>
                                         <span className=''>{options.adult}</span>
                                         <button onClick={() => optionCounter("adult", "In")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}}>+</button>
                                     </div>
                                    
                                 </div>
                                 <div className='flex justify-between gap-10 m-[10px]'>
                                     <span className='text-[20px] font-bold'>Children</span>
                                     <div className='flex items-center gap-10 text-lg'>
                                         <button disabled={options.children <= '1'} onClick={()=> optionCounter("children", "De")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}}>-</button>
                                         <span className=''>{options.children}</span>
                                         <button onClick={()=>optionCounter("children", "In")}className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}}>+</button>
                                     </div>
                                    
                                 </div>
                                 <div className='flex justify-between m-[10px]'>
                                     <span className='text-[20px] font-bold'>Room</span>
                                     <div className='flex items-center gap-10 text-lg'>
                                         <button disabled={options.children <= '1'} onClick={()=>optionCounter("room", "De")} className='w-[50px] h-[50px] rounded-lg ' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}} >-</button>
                                         <span className='text-[20px]'>{options.room}</span>
                                         <button onClick={()=>optionCounter("room", "In")} className='w-[50px] h-[50px] rounded-lg' style={{background: '#b8b8b8', color: '#022E51', border : '1px solid #022E51'}}>+</button>
                                     </div>
                                     
                                 </div>
                             </div>} 
                         </div>
                         <div className='flex items-center justify-center'>
                             <button className='p-[20px] rounded cursor-pointer text-[20px] font-bold w-[200px] border-[5px] border-solid border-yellow-400' style={{background: '#0D19A3'}} onClick={handleSearch}>Search</button>
                         </div>
                     </div>
                    
             
                 
                 </>
            }
           
                
                </div>
        
      
    </div>
  )
}

export default HeaderPicture
