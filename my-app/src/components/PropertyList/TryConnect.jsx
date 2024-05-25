import React from 'react'

const TryConnect = () => {
  return (
    
        <div className='flex  gap-[800px] border-[2px] border-solid border-gray' style={{background: '#0D19A3'}}>
            <div className='flex flex-col  p-[30px] text-white gap-[20px]'>
                <h1 className='text-[30px] font-bold'>Sign in, save money</h1>
                <p className='text-[20px] font-[400]'>Unlock member-only discounts in Agadir</p>
                <div className='flex gap-[10px]'>
                    <button className='text-[20px] border-[2px] border-solid border-[blue] px-[30px] bg-[white] text-black py-[10px]'>Sign In</button>
                    <button className='text-[20px] underline  '>Register</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src="/cdd.png" alt="" className='w-[200px] h-[200px]'/>
            </div>

            
            
        </div>
      
  
  )
}

export default TryConnect
