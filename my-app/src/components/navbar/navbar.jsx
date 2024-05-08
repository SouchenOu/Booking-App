import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-[70px] justify-center flex" style={{ background: '#022E51' }}>
        <div className="max-w-[1024px] w-full text-white flex justify-between py-2	">
          <Link to="/">
            <span className="font-medium cursor-pointer ">HotelBooking</span>

          </Link>
            <div className="">
                <button className="px-4 py-2 mr-4  bg-white rounded cursor-pointer" style={{color : '#022E51'}}>Register</button>
                <button className="px-4 py-2 ml-4  bg-white rounded cursor-pointer" style={{color: '#022E51'}}>Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
