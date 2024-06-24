import { faBicycle, faCity, faFaceSmile, faHeart, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const ListCheck = () => {

  const [active, setActive] = useState("Beatch");
  const handleFunction = (type) =>{
    if(type === "Romance")
    {
      setActive("Romance");
    }else if(type === "Beatch"){
      setActive("Beatch");
    }else if(type === "Romance"){
      setActive("Romance");
    }else if(type === "OutDoors"){
      setActive("OutDoors");
    }else if(type === "City"){
      setActive("City");
    }else if(type === "relax"){
      setActive("relax");
    }

  }
  return (
    <div className='flex flex-col w-full xl:max-w-[1800px] justify-between gap-[20px] z-[1]'>
      <h1 className=' px-[40px] text-[40px] font-bold'>Quick and easy trip planner</h1>
      <p className='px-[40px] text-[20px]'>Pick a vibe and explore the top destinations in Morocco</p>
      <div className='flex gap-[40px] mb-[50px]'>
                <div className={`cursor-pointer flex gap-[10px] items-center  ${active === "Beatch" ? 'border border-blue-500 rounded-full bg-gray-200' : ' border-gray-300'}  outline-none p-[14px] rounded-lg `} onClick={() =>handleFunction("Beatch")} >
                    <FontAwesomeIcon icon={faUmbrellaBeach} className='text-[20px] '/>
                    <span className='text-[20px]'>Beatch</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === "Romance" ? 'border border-blue-500 rounded-full bg-gray-200' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={() => handleFunction("Romance")} >
                    <FontAwesomeIcon icon={faHeart} className='text-[20px]'/>
                    <span className='text-[20px]'>Remance</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === "OutDoors" ? 'border border-blue-500 rounded-full bg-gray-200' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={() => handleFunction("OutDoors")}>
                    <FontAwesomeIcon icon={faBicycle} className='text-[20px]'/>
                    <span className='text-[20px]'>OutDoors</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center  ${active === "City" ? 'border border-blue-500 rounded-full bg-gray-200' : ' border-gray-300'}  outline-none p-2 rounded-lg `} onClick={() =>handleFunction("City")}>
                    <FontAwesomeIcon icon={faCity} className='text-[20px]'/>
                    <span className='text-[20px]'>City</span>
                </div>
                <div className={`cursor-pointer flex gap-3 items-center ${active === "relax" ? 'border border-blue-500 rounded-full bg-gray-200' : ' border-gray-300'}   outline-none p-2 rounded-lg `} onClick={() => handleFunction("relax")} >
                    <FontAwesomeIcon icon={faFaceSmile} className='text-[20px]'/>
                    <span className='text-[20px]'>Relax</span>
                </div>
            </div>
            {active === 'Beatch' && <div className='flex items-center justify-center gap-[30px]'>
                 <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1900px] h-[200px] object-cover' src="/19.jpg" alt="Hotels"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Aourir</h1>
                        <h2 className='texl-lg'> 13 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/20.jpg" alt="Appartements"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Tamraght Oufella</h1>
                        <h2 className='text-lg'>14 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/44.jpg" alt="Villas"/>
                    <div className=''>
                        <h1 className='text-[20px] font-bold'>Tamraght Ouzdar</h1>
                        <h2 className='text-lg'> 11 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/40.jpg" alt="Resorts"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Taghazout</h1>
                        <h2 className='text-lg'> 17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="55.jpg" alt="Cabins"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Imsouane</h1>
                        <h2 className='text-lg'>15 km away</h2>
                    </div>
                </div>
            </div>}


            
            {active === 'Romance' && <div className='flex items-center justify-center gap-[30px]'>
                 <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1900px] h-[200px] object-cover' src="/22.jpg" alt="Hotels"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Ghazoua</h1>
                        <h2 className='texl-lg'> 13 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/23.jpg" alt="Appartements"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Dar Caïd Layadi</h1>
                        <h2 className='text-lg'>14 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/25.jpg" alt="Villas"/>
                    <div className=''>
                        <h1 className='text-[20px] font-bold'>Chafchaouen</h1>
                        <h2 className='text-lg'> 11 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/28.jpg" alt="Resorts"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Jamaa lfna</h1>
                        <h2 className='text-lg'> 17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/30.jpg" alt="Cabins"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Assila</h1>
                        <h2 className='text-lg'>15 km away</h2>
                    </div>
                </div>
            </div>}

            {active === 'OutDoors' && <div className='flex items-center justify-center gap-[30px]'>
                 <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1900px] h-[200px] object-cover' src="/66.jpg" alt="Hotels"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Tafraoute</h1>
                        <h2 className='texl-lg'> 97 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/67.jpg" alt="Appartements"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>lala takrkost</h1>
                        <h2 className='text-lg'>14 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/imlil.jpg" alt="Villas"/>
                    <div className=''>
                        <h1 className='text-[20px] font-bold'>Imlil</h1>
                        <h2 className='text-lg'> 11 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/husa.jpg" alt="Resorts"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>El huseima</h1>
                        <h2 className='text-lg'> 17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/waza.jpg" alt="Cabins"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Ouarzazate</h1>
                        <h2 className='text-lg'>30 km away</h2>
                    </div>
                </div>
            </div>}
            {active === 'City' && <div className='flex items-center justify-center gap-[30px]'>
                 <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1900px] h-[200px] object-cover' src="/88.jpg" alt="Hotels"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Taroudant</h1>
                        <h2 className='texl-lg'> 80 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/kesh.jpg" alt="Appartements"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Marakesh</h1>
                        <h2 className='text-lg'>17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/rabat.jpg" alt="Villas"/>
                    <div className=''>
                        <h1 className='text-[20px] font-bold'>Rabat</h1>
                        <h2 className='text-lg'> 11 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/sale.jpg" alt="Resorts"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Sale</h1>
                        <h2 className='text-lg'> 17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/mak.jpg" alt="Cabins"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Meknes</h1>
                        <h2 className='text-lg'>30 km away</h2>
                    </div>
                </div>
            </div>}
            {active === 'relax' && <div className='flex items-center justify-center gap-[30px]'>
                 <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1900px] h-[200px] object-cover' src="/camp.jpg" alt="Hotels"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Desert camp</h1>
                        <h2 className='texl-lg'> 80 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/kesh.jpg" alt="Appartements"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Marakesh</h1>
                        <h2 className='text-lg'>17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/rabat.jpg" alt="Villas"/>
                    <div className=''>
                        <h1 className='text-[20px] font-bold'>Rabat</h1>
                        <h2 className='text-lg'> 11 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/sale.jpg" alt="Resorts"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Sale</h1>
                        <h2 className='text-lg'> 17 km away</h2>
                    </div>
                </div>
                <div className='rounded-lg cursor-pointer overflow-hidden w-[300px]'>
                    <img className='w-[1800px] h-[200px] object-cover' src="/mak.jpg" alt="Cabins"/>
                    <div className='cursor-pointer'>
                        <h1 className='text-[20px] font-bold'>Meknes</h1>
                        <h2 className='text-lg'>30 km away</h2>
                    </div>
                </div>
            </div>}
      
    </div>
  )
}

export default ListCheck
