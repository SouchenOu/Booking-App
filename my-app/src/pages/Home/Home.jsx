import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Features from '../../components/features/features'
import PropertyList from '../../components/PropertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type = "home"/>
      <div className='mt-[50px] flex-col flex items-center gap-[30px]'>
        <Features/>
        <h1 className='w-[1024px] text-2xl'>Browser by property type</h1>
        <PropertyList/>
        <h1 className=''>Home guests love</h1>
      </div>
    </div>
  )
}

export default Home
