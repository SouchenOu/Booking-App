import React, { useState } from 'react'

const ListFinal = () => {
  const [active, setActive] = useState('Regions');
  const handleClick = (type) =>{
    if(type === 'Regions')
    {
      setActive('Regions')
    }else if(type ==='Cities'){
      setActive('Cities')
    }else if(type === 'interest'){
      setActive('interest')
    }

  }
  return (
    <div className='flex flex-col w-full xl:max-w-[1800px] max-w-[800px] gap-[30px]'>
      <h1 className='text-[40px] font-bold'>Destinations we love</h1>
      <div className='flex gap-[40px]'>
          <span className={`text-[22px] flex items-center cursor-pointer ${active === 'Regions' ? 'border border-blue-500 text-blue-800  bg-gray-100 px-[20px] rounded-2xl' : ' border-gray-300'}  outline-none p-[5px] rounded-lg `} onClick={()=>handleClick("Regions")}>Regions</span>
          <span className={`text-[22px] flex items-center cursor-pointer ${active === 'Cities' ? 'border border-blue-500 text-blue-800  bg-gray-100 px-[20px] rounded-2xl' : ' border-gray-300'}  outline-none p-[5px] rounded-lg `} onClick={()=>handleClick("Cities")}>Cities</span>
          <span className={`text-[22px] flex items-center cursor-pointer ${active === 'interest' ? 'border border-blue-500 text-blue-800  bg-gray-100 px-[20px] rounded-2xl' : ' border-gray-300'}  outline-none p-[5px] rounded-lg `} onClick={()=>handleClick("interest")}>Places of interest</span>
      </div>
      { active === 'Cities' && <div className='flex flex-col xl:flex-row  gap-[50px] w-full p-[20px]'>
        <div className='flex flex-col gap-[10px]  border-b-black'>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Amsterdam, Netherlands</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>549 holiday rentals, 18 cottages, 11 beach rentals, 5 cabins, 4 glamping sites</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Marseille, France</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>1,805 holiday rentals, 1,011 beach rentals, 253 cottages, 4 cabins</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Geneva, Switzerland</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>63 holiday rentals, 5 cottages</p>
            </div>
        </div>
        <div className='flex flex-col gap-[10px]  '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Bordeaux, France</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>629 holiday rentals, 54 cottages</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Berlin, Germany</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >911 holiday rentals, 37 cottages, 14 beach rentals</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Lille, France</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >440 holiday rentals, 16 cottages</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]  '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Bangkok</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>4041 hotels</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>York</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >828 hotels</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Newcastle upon Tyne</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >389 hotels</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]  '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>London</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>14532 hotels</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Liverpool</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >1081 hotels</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Leeds</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >382 hotels</p>
          </div>
        </div>

      </div>}
      { active === 'Regions' && <div className='flex gap-[50px] w-full  flex-col xl:flex-row p-[20px]'>
      <div className='flex flex-col gap-[10px] '>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Amsterdam, Netherlands</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>549 holiday rentals, 18 cottages, 11 beach rentals, 5 cabins, 4 glamping sites</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Marseille, France</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>1,805 holiday rentals, 1,011 beach rentals, 253 cottages, 4 cabins</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px]'>Geneva, Switzerland</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>63 holiday rentals, 5 cottages</p>
            </div>
        </div>
        <div className='flex flex-col gap-[10px] '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Bordeaux, France</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>629 holiday rentals, 54 cottages</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Berlin, Germany</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >911 holiday rentals, 37 cottages, 14 beach rentals</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Lille, France</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >440 holiday rentals, 16 cottages</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Bangkok</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>4041 hotels</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>York</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >828 hotels</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Newcastle upon Tyne</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >389 hotels</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>London</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>14532 hotels</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px]'>Liverpool</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >1081 hotels</p>
          </div>
          <div>
            <h1 className='text-[20px]'>Leeds</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >382 hotels</p>
          </div>
        </div>

      </div>}
      { active === 'interest' && <div className='flex gap-[50px] w-full  flex-col xl:flex-row p-[20px]'>
        <div className='flex flex-col gap-[10px] '>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px] '>Mykonos</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>1,455 properties</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px] '>Zanzibar</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>834 properties</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='text-[20px] '>Ras Al Khaimah</h1>
              <p className='text-[20px] text-gray-500 w-[400px]'>114 properties</p>
            </div>
        </div>
        <div className='flex flex-col gap-[10px] '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Lake District</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>2,406 properties</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Bora Bora</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >59 properties</p>
          </div>
          <div>
            <h1 className='text-[20px] '>Tenerife</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >9,610 properties</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Phuket Province</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>5,501 properties</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Uttar Pradesh</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >4,389 properties</p>
          </div>
          <div>
            <h1 className='text-[20px] '>Texel</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >410 properties</p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] '>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Bali</h1>
            <p className='text-[20px] text-gray-500 w-[400px]'>120444 hotels</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] '>Bihar</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >1081 hotels</p>
          </div>
          <div>
            <h1 className='text-[20px] '>Leeds</h1>
            <p className='text-[20px] text-gray-500 w-[400px]' >382 hotels</p>
          </div>
        </div>

      </div>}
      
    </div>
  )
}

export default ListFinal
