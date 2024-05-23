import React from 'react'

const Last = () => {
  const Site = ({backgroundImage, title, subtitle, peopleJoined}) =>{
    return (
        <div className={`h-[500px] w-full min-w-[600px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ` }   style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='flex flex-col h-full items-start justify-between'>
                <div className='flex items-center justify-center gap-3 p-10'>
                    <div className='rounded-full  p-4' >
                        <img src="/morocco.png" alt="map" width={30} height={30}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-[18px] font-[700] text-white'>{title}</h4>
                        <p className=' text-[14px] font-[400] text-white'>{subtitle}</p>

                    </div>
                </div>
                
           </div>

        </div>
    )

}

  return (
    // <div className='flex flex-col items-start justify-start max-w-[2000px] gap-[20px]'>
    //   <h1 className='text-[40px] font-bold'>Travel more, spend less</h1>
    //   <div className=' flex flex-col items-start justify-start border-[2px] w-[1800px] border-solid border-gray-500 p-[40px] gap-[20px]'>
    //       <h1 className='text-[30px] font-bold'>Sign in, save money</h1>
    //       <p className='text-[20px] '>Save 10% or more at participating properties - just look for the blue Genius label</p>
    //       <div className='flex items-center justify-center gap-[20px]'>
    //         <button className='text-[20px] font-bold border-[2px] border-solid border-[#0D19A3] px-[20px] py-[10px] text-white' style={{background : '#0D19A3'}}>Sign In</button>
    //         <button className='text-[20px] font-bold border-[2px] border-solid border-[#0D19A3] px-[20px] text-white py-[10px]' style={{background : '#0D19A3'}}>Sign Up</button>
    //       </div>
    //   </div>
    //   <div className='border-[2px] border-solid border-gray-500 w-[2000px]'>
    //     <img src="/res.jpg" alt="" className='w-[1300px] h-[600px]'/>
    //   </div>
      
    // </div>
    <section className=' px-[20px]  2xl:mx-auto 2xl:max-w-[1440px] flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 relative'>
    <div className='hide-scrollbar flex h-full w-full items-start justify-start gap-8 overflow-x-auto lg:h-[600px] xl:h-[640px]'>
        <Site backgroundImage='/v.jpg' title="Villa 5 stars" subtitle="Somewhere in Casablanca" peopleJoined="50+ People"/>
        <Site backgroundImage='/hh2.jpg' title="Hotel 4 stars" subtitle="Somewhere in Rabat" peopleJoined="500+ People"/>
        <Site backgroundImage='/rt.jpg' title="HOtel 5 Stars" subtitle="Somewhere in Agadir" peopleJoined="500+ People"/>

    </div>
    <div className='flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className=' flex flex-col p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 w-full overflow-hidden rounded-3xl' style={{background : '#0D19A3'}}>
            <h2 className='text-[24px] font-[400] md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%] capitalize text-white'>
                <strong>Feelling lost</strong> And not Knowing The way?
            </h2>
            <p className='text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt-5 text-white'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
            <img src="/morocco.png" alt="" width={186} height={219}/>
        </div>
    </div>

    
</section>
  )
}

export default Last
