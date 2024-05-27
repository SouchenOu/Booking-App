import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  console.log("user here navbar-->", user);
  const MessageBar = () =>{
    navigate('/message');
  }
  
    const navigateFunc = () =>{
      navigate("/login");

    }
    const navigateRegister = () =>{
      navigate("/register");

    }
    const handleLogout = async () => {
      // Clear authentication token from cookies or local storage
    // document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      await axios.get('http://localhost:8000/auth/logout');
      dispatch({type : "LOGOUT"});
      navigate("/login");
      


    // Reset user state
    // Redirect the user to the login page
    };
    const contactUs = () =>{
      navigate('/contact');
    }
  return (
    
    <div className="h-[70px] justify-center flex" style={{ background: '#0D19A3' }}>
        <div className="max-w-[2024px] w-full text-white flex justify-between py-2 gap-[600px]	">
          <Link to="/">
            <span className="font-bold text-[40px] cursor-pointer ">Booking.com</span>

          </Link>
          {!user ? <div className="flex items-center justify-center gap-[30px] w-full">
                <button className="px-4 py-2 mr-4 text-[20px] font-[300px]  bg-white rounded cursor-pointer" onClick={navigateRegister} style={{color : '#022E51'}}>Register</button>
                <button className="px-4 py-2 ml-4 text-[20px] font-[300px] bg-white rounded cursor-pointer" onClick={navigateFunc} style={{color: '#022E51'}}>Login</button>
                <button className='text-[30px] font-[300px] cursor-pointer underline' onClick={contactUs}>Contact Us</button>
                <div className='flex items-center mr-[20px] font-bold relative' onClick={MessageBar}>
                  <FontAwesomeIcon icon={faMessage} className='text-[28px] cursor-pointer' />
                  <div className='w-[19px] h-[19px] bg-[red] rounded-full flex items-center justify-center text-[15px] font-bold absolute top-[-5px] right-[-5px]' style={{color : "white"}}>3</div>
              </div>
            </div> : <div className=' flex items-center justify-center w-[1500px]'>
                  {user &&
                      <div className='flex gap-[30px]'>
                        <span className='text-[30px]  bold-[400px] flex gap-[10px]'> welcome <h1 className='text-[#F4EFC1] text-[30px] font-[400px]'>{user.details.username}</h1></span>
                        <button className='text-[30px] font-[300px] cursor-pointer underline' onClick={contactUs}>Contact Us</button>
                        <div className='flex items-center mr-[20px] font-bold relative' onClick={MessageBar}>
                          <FontAwesomeIcon icon={faMessage} className='text-[28px] cursor-pointer' />
                          <div className='w-[19px] h-[19px] bg-[red] rounded-full flex items-center justify-center text-[15px] font-bold absolute top-[-5px] right-[-5px]' style={{color : "white"}}>3</div>
                        </div>
                        <button className='px-4 py-2 ml-4 text-[20px] font-[300px] bg-white rounded cursor-pointer' onClick={handleLogout} style={{color : '#022E51'}}>LogOut</button>

                      </div> 
                      
                      }


                </div>}

            
            
        </div>
      
    </div>
  )
}

export default Navbar
