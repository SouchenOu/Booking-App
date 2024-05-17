import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../context/darkModeContext';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons"




const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='h-[50px] border-b-[0.5px] border-solid border-gray-500 flex items-center text-[14px]' style={{color : "black"}}>
      <div className='w-[100%] p-[20px]  flex items-center justify-between'>
        <div className='flex flex-items justify-center gap-[10px] p-[3px] px-[14px] border-[0.5px] border-solid border-[lightgray]'>
            <input type="text" placeholder="Search..." className='border-none outline-none bg-transparent text-[20px]'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[18px] py-[3px]'  style={{color : "#7451f8"}}/>
        </div>
        <div className='flex items-center p-[500px] gap-[20px] relative'>
            <div className='flex items-center mr-[20px] relative  text-[20px] font-bold gap-[10px]'>
                <FontAwesomeIcon icon={faGlobe} className='text-[25px]' />
                English
            </div>
            <div className='flex items-center mr-[20px] relative font-bold '>
                <FontAwesomeIcon icon={faMoon} className="text-[25px]" onClick={()=> dispatch({type: "TOGGLE"})}/>

            </div>
            <div className='flex items-center mr-[20px] font-bold relative'>
                <FontAwesomeIcon icon={faXmark} className='text-[25px]'/>
            </div>
            <div className='flex items-center mr-[20px] font-bold relative'>
                <FontAwesomeIcon icon={faBell}  className='text-[25px]'/>
                <div className='w-[15px] h-[15px] bg-[red] rounded-full flex items-center justify-center text-[15px] font-bold absolute top-[-5px] right-[-5px]' style={{color : "white"}}>1</div>

            </div>
            <div className='flex items-center mr-[20px] font-bold relative'>
                <FontAwesomeIcon icon={faMessage} className='text-[25px]'/>
                <div className='w-[15px] h-[15px] bg-[red] rounded-full flex items-center justify-center text-[15px] font-bold absolute top-[-5px] right-[-5px]' style={{color : "white"}}>3</div>
            </div>
            <div className='flex items-center mr-[20px] font-bold relative'>
                <FontAwesomeIcon icon={faBars} className='text-[20px]'/>
            </div>
            <div className="flex items-center mr-[20px] font-bold relative">
                <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
                />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
