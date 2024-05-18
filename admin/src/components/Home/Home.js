import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Widget from '../Widget/Widget'
import Features from '../Features/Features'
import Chart from '../Chart/Chart'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-[6]'>
            <Navbar/>
            <div className='flex p-[20px] gap-[20px]'>
                <Widget type="user"/>
                <Widget type="orders"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className=' flex px-[5px] py-[10px]'>
                <Features/>
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>

            </div>


        </div>
        
      
    </div>
  )
}

export default Home
