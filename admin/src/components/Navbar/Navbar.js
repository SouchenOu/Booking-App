import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"




const Navbar = () => {
  return (
    <div className='h-[50px] border-b-[0.5px] border-solid border-gray-500 flex items-center text-[14px]' style={{color : "black"}}>
      <div className='w-[100%] p-[20px]  flex items-center justify-between'>
        <div className='flex flex-items justify-center gap-[10px] p-[3px] px-[14px] border-[0.5px] border-solid border-[lightgray]'>
            <input type="text" placeholder="Search..." className='border-none outline-none bg-transparent' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[18px]'  style={{color : "#7451f8"}}/>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
