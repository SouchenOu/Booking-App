import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Features from '../../components/features/features'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturesProperties from '../../components/featuresProperties/featuresProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type = "home"/>
      <div className='mt-[50px] flex-col flex items-center gap-[30px]'>
        <Features/>
        <h1 className=' text-2xl font-bold items-center'>Browser by property type</h1>
        <PropertyList/>
        <h1 className='text-2xl font-bold items-center'>Home guests love</h1>
        <FeaturesProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
