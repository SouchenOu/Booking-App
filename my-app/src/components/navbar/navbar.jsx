import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);
  console.log("user here navbar-->", user);
  
  const navigate = useNavigate()
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
                
            </div> : <div className='w-[300px]'>
                  {user &&
                      <div>
                        <span className='text-[30px]  bold-[400px] flex gap-[10px]'> welcome <h1 className='text-[#F4EFC1] text-[30px] font-[400px]'>{user.details.username}</h1>
                        <button className='px-4 py-2 ml-4 text-[20px] font-[300px] bg-white rounded cursor-pointer' onClick={handleLogout} style={{color : '#022E51'}}>LogOut</button>
                      </span>

                      </div> 
                      }


                </div>}

            
            
        </div>
      
    </div>
  )
}

export default Navbar
