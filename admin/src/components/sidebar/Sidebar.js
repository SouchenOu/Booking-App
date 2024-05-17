import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../context/darkModeContext';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {faBell}  from "@fortawesome/free-solid-svg-icons";
import {faUserNurse} from "@fortawesome/free-solid-svg-icons";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'








const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className=' flex-[1]  min-h-[100vh] p-[0]  bg-white border-r-[0.5px] border-solid border-gray-300'>
            <div className='h-[50px] flex items-center justify-center'>
                <Link to="/">
                    <span className='text-[20px] font-bold' style={{color : "#6439ff"}}>AdminPage</span>
                </Link>
            </div>
            <hr  className='h-[0] border-[0.5px] border-solid' style={{color : "##6439ff"}} />
            <div className='flex items-start justify-start'>
                <ul className=' flex flex-col items-start justify-center list-none m-[0] p-[0]'>
                    <p className='text-[30px] font-bold mt-[15px] mb-[5px] p-[15px]' style={{color : "#999"}}>Main</p>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faColumns} className='text-[18px]'  style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600] ' style={{color : "#888"}}>Dashboard</span>
                    </li>
                    <p className='text-[30px] font-bold p-[15px]' style={{color : "#999"}}>List</p>
                    <Link to="/" className=''>
                        <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                            <FontAwesomeIcon icon={faUser} className='text-[18px]'  style={{color : "#7451f8"}}/>
                            <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Users</span>
                        </li>

                    </Link>
                    <Link to="" className=''>
                        <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                            <FontAwesomeIcon icon={faHotel} className='text-[18px]' style={{color : "#7451f8"}}/>
                            <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Hotels</span>
                        </li>

                    </Link>
                    <Link to="" className=''>
                        <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                            <FontAwesomeIcon icon={faBed} className='text-[18px]' style={{color : "#7451f8"}}/>
                            <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Rooms</span>
                        </li>

                    </Link>
                    <Link to="" className=''>
                        <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                            <FontAwesomeIcon icon={faTruck} className='text-[18px]' style={{color : "#7451f8"}}/>
                            <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Delivray</span>
                        </li>

                    </Link>
                    <p className='text-[30px] font-bold p-[15px]' style={{color : "#999"}}>Useful</p>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faHotel} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>State</span>
                    </li>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faBell} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Notification</span>
                    </li>
                    <p className='text-[30px] font-bold p-[15px]' style={{color : "#999"}}>Service</p>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faUserNurse} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>System Health</span>
                    </li>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faHotel} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Logs</span>
                    </li>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faGear} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Settings</span>
                    </li>
                    <p className='text-[30px] font-bold p-[15px]' style={{color : "#999"}}>User</p>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faAddressCard} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>Profile</span>
                    </li>
                    <li className='flex items-center justify-center gap-[10px] pl-[30px] cursor-pointer'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-[18px]' style={{color : "#7451f8"}}/>
                        <span className='text-[20px] bold-[600]' style={{color : "#888"}}>LogOut</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-enter m-[10px]">
                <div className="w-[20px] h-[20px] rounded-[5px] border-[1px] border-solid border-gray-[300] cursor-pointer m-[5px] bg-black" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="w-[20px] h-[20px] rounded-[5px] border-[1px] border-solid border-gray-[300] cursor-pointer m-[5px] " onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
         </div>
      
      
  )
}

export default Sidebar
