import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'

const NavbarPicture = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
    const navigateFunc = () =>{
      navigate("/login");

    }
  return (
    
    <div className="h-[70px] justify-center flex navbar-background" >
        <div className="max-w-[2024px] w-full text-white flex justify-between py-2 gap-[600px]	">
          <Link to="/">
            <span className="font-bold text-[40px] cursor-pointer ">Booking.com</span>

          </Link>
          {!user ? <div className="flex items-center justify-center gap-[30px] w-full">
                <button className="px-4 py-2 mr-4 text-[20px] font-[300px]  bg-white rounded cursor-pointer" style={{color : '#022E51'}}>Register</button>
                <button className="px-4 py-2 ml-4 text-[20px] font-[300px] bg-white rounded cursor-pointer" onClick={navigateFunc} style={{color: '#022E51'}}>Login</button>
                
            </div> : <div className='w-[300px]'>
                  {user && <span className='text-[30px]  bold-[400px] flex gap-[10px]'> welcome <h1 className='text-[#F4EFC1] text-[30px] font-[400px]'>{user.username}</h1></span>}


                </div>}
            
            
        </div>
      
    </div>
  )
}

export default NavbarPicture
