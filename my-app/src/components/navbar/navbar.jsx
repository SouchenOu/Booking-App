import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[70px] justify-center flex" style={{ background: '#003580' }}>
        <div className="max-w-[1024px] w-full text-white flex justify-between py-2	">
            <span className="font-medium cursor-pointer ">HotelBooking</span>
            <div className="">
                <button className="px-4 py-2 mr-4  bg-white rounded cursor-pointer" style={{color : '#003580'}}>Register</button>
                <button className="px-4 py-2 ml-4  bg-white rounded cursor-pointer" style={{color: '#003580'}}>Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
