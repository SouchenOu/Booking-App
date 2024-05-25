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
    
    <div className="h-[70px] justify-center flex" style={{ background: '#0D19A3' }} >
        <div className="max-w-[2024px] w-full text-white flex justify-between py-2 gap-[600px]	">
          <Link to="/">
            <span className="font-bold text-[40px] cursor-pointer ">Booking.com</span>

          </Link>
         
            
        </div>
      
    </div>
  )
}

export default NavbarPicture
