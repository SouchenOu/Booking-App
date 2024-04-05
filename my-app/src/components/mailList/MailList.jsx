import React from 'react'

const MailList = () => {
  return (
    <div className='w-full mt-[50px] flex flex-col items-center gap-[20px] text-white p-[40px]' style={{background: '#003580'}}>
        <h1 className='text-2xl font-bold'>Save Time, save money</h1>
        <span className='text-xl font-semibold'>Sign Up and we will send the best deals to you</span>
        <div className=' p-[10px] flex justify-between gap-[20px] '>
            <input className=' w-[800px] p-[10px] border-solid border-[3px]  border-yellow-300 rounded-lg text-lg font-semibold' style={{color : '#003580'}} type="text" placeholder='Enter your email'/>
            <button className='p-[10px] cursor-pointer rounded-lg font-bold' style={{background: '#fff',color: '#003580'}}>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
