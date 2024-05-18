import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Usercomponent from './Usercomponent'

const Users = ({data}) => {
  console.log("data here users-->", data);
  return (
    <div className='flex w-full'>
      <Sidebar/>
      <div className='flex-[6]'>
        <Navbar/>
        <Usercomponent element={data}/>


      </div>
    </div>
  )
}

export default Users
