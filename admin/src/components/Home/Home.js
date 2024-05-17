import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-[6]'>
            <Navbar/>


        </div>
        
      
    </div>
  )
}

export default Home
