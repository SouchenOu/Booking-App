import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Features from '../../components/features/features'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturesProperties from '../../components/featuresProperties/featuresProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import ListCheck from '../../components/PropertyList/ListCheck'
import Explore from '../../components/PropertyList/Explore'
import Inspiration from '../../components/PropertyList/Inspiration'
import Last from '../../components/PropertyList/Last'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type = "home"/>
      <div className='mt-[50px] flex-col flex items-center gap-[30px]'>
        <Features/>
        <h1 className=' text-[40px] font-bold items-center'>Browser by property type</h1>
        <PropertyList/>
          <Explore/>
        < ListCheck/>



        
        <h1 className='text-[40px] font-bold items-center'>Stay at our top unique properties</h1>
        <p className='text-[20px] font-bold text-gray'>From castles and villas to boats and igloos, we've got it all</p>
        <FeaturesProperties/>
        <Inspiration/>
        <Last/>

        <MailList/>

        <Footer/>
      </div>
    </div>
  )
}

export default Home
