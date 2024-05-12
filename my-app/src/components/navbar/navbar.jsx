import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user} = useContext(AuthContext);
    console.log("user in nav-->", user);
  return (
    
    <div className="h-[70px] justify-center flex" style={{ background: '#022E51' }}>
        <div className="max-w-[1024px] w-full text-white flex justify-between py-2 gap-[600px]	">
          <Link to="/">
            <span className="font-medium cursor-pointer ">HotelBooking</span>

          </Link>
            <div className="flex items-center justify-center gap-[30px] w-full">
                <button className="px-4 py-2 mr-4 text-[20px] font-[300px]  bg-white rounded cursor-pointer" style={{color : '#022E51'}}>Register</button>
                {user ? <button className="px-4 py-2 ml-4 text-[20px] font-[300px] bg-white rounded cursor-pointer" style={{color: '#022E51'}}>LogOut</button> : <button className="px-4 py-2 ml-4  bg-white rounded cursor-pointer" style={{color: '#022E51'}}>Login</button>}
                <div className='w-[300px]'>
                  {user && <span className='text-[30px]  bold-[400px] flex gap-[10px]'> welcome <h1 className='text-orange-500 text-[30px] font-[400px]'>{user.username}</h1></span>}


                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
