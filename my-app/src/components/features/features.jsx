import React from 'react'
import useFetch from '../../hooks/useFetch';
const Features = () => {

    const {data, loading, error} = useFetch("http://localhost:8000/hotels/countByCity?cities=casablanca,fes,Maknes");
  return (
    <div className='flex flex-col w-full max-w-[1800px] justify-between gap-[20px] z-[1]'>
        { loading ? ("Loading please wait ") : (
            <>  
                <div className='flex flex-col'>
                    <h1 className='text-[40px] font-bold'>Offers</h1>
                    <p className='text-[20px] text-gray-500'>Promotions, deals and special offers for you</p>
                    <div className='flex gap-[10px]'>
                        <div className='flex w-[900px] border-[2px]  border-solid border-gray-500 p-[30px] gap-[10px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='text-[30px] font-bold'>Planning a trip to the 2024 Summer Games?</h1>
                                <p className='text-[20px]'>Brussels is a quick train ride from all the action</p>
                                <button className='text-[20px] font-bold border-[1px] border-solid border-[#0D19A3] w-[300px] bg-[#0D19A3] text-white '>Explore Brussels</button>
                            </div>
                            <img src="/img1.jpg" alt="img" className='w-[300px] h-[200px]'/>


                        </div>
                        <div className='flex w-[900px] border-[2px]  border-solid border-gray-500 p-[30px] gap-[10px]' style={{ backgroundImage: `url('/ttt.jpg')` }}>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='text-[30px] font-bold text-white'>Seize the moment</h1>
                                <p className='text-[20px] text-white'>Save 15% or more when you book and stay before 1 October 2024</p>
                                <button className='text-[20px] font-bold border-[1px] border-solid border-[#0D19A3] w-[300px] bg-[#0D19A3] text-white '>Find Gateway Deals</button>
                            </div>


                        </div>
                        

                    </div>


                </div>
                <div className='flex flex-col'>
                    <h1 className='text-[40px] font-bold'>Trending destinations</h1>
                    <p className='text-[20px] text-gray-500'>Most popular choices for travellers from Morocco</p>

                </div>
                <div className='flex  w-full max-w-[2024px] justify-between gap-[20px] z-[1]'>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white cursor-pointer'>
                           
                            <img className="w-[1500px] h-[500px] object-cover brightness-75" src="/img7.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                    <h1 className='text-[30px] font-bold'>Casablanca</h1>
                                    <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>

                                </div>
                                
                                <h1 className='text-[20px] px-[3px] '>{data[0]} properties </h1>
                            </div>
                            
                        </div>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1] cursor-pointer'>
                            <img className="w-[1500px] h-[400px] object-cover brightness-75" src="/img8.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                    
                                    <h1 className='text-[30px] font-bold'>Fes </h1>
                                    <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>
                                </div>
                                <h1 className='text-[20px] px-[3px] '>{data[1]} properties </h1>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1] cursor-pointer'>
                            <img className="w-[1500px] h-[400px] object-cover brightness-75" src="/15.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                     <h1 className='text-[30px] font-bold'>Agadir </h1>
                                     <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>



                                </div>
                                <h1 className='text-[20px] px-[3px] '>{data[1]} properties </h1>
                            </div>
                        </div>
                       
                        

                </div>
                <div className='flex  w-full max-w-[2024px] justify-between gap-[20px] z-[1]'>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white cursor-pointer' >
                           
                            <img className="w-[1500px] h-[500px] object-cover brightness-75" src="/13.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                    <h1 className='text-[30px] font-bold'>Meknes</h1>
                                    <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>
                                </div>
                                <h1 className='text-[20px] px-[3px] '>{data[0]} properties </h1>
                            </div>
                            
                        </div>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1] cursor-pointer'>
                            <img className="w-[1500px] h-[400px] object-cover brightness-75" src="/17.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                    <h1 className='text-[30px] font-bold'>Tanger </h1>
                                    <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>
                                </div>
                                <h1 className='text-[20px] px-[3px] '>{data[1]} properties </h1>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1] cursor-pointer'>
                            <img className="w-[1500px] h-[400px] object-cover brightness-75" src="/18.jpg" alt="hotel"/>
                            <div className='absolute top-[10px] right-[10px] text-2xl font-bold p-2'>
                                <div className='flex gap-[4px]'>
                                    <h1 className='text-[30px] font-bold'>Marakesh </h1>
                                    <img src="/morocco.png" alt="" className='w-[30px] h-[30px]'/>


                                </div>
                                
                                <h1 className='text-[20px] px-[3px] '>{data[1]} properties </h1>
                            </div>
                        </div>
                       
                        

                </div>
  
                
            
            </>
        )
        }
    </div>
  )
}

export default Features;
