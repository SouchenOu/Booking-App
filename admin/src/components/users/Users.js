import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

const Users = () => {
  return (
    <div className='flex w-full'>
      <Sidebar/>
      <div className='flex-[6]'>
        <Navbar/>

      </div>
    </div>
  )
}

export default Users
