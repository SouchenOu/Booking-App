import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'; // Import default styles
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'





const Features = () => {
  return (
    <div className='flex-2 p-[10px] shadow-custom'>
        <div className='flex items-start justify-between gap-[200px]' style={{color : "gray"}}>
            <h1 className='text-[40px] font-bold' style={{color : "pink"}}>Total Revenue</h1>
            <FontAwesomeIcon icon={faEllipsisV} className='text-[40px] font-bold'  />

        </div>
        <div className='flex flex-col items-center justify-center space-between p-[20px]' style={{color : 'gray'}}>
            <div className='flex flex-col items-center justify-center gap-[30px]'> 
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} className='h-[200px] w-[200px]'/>
                <p className='text-[40px] font-[500]'>Total Sales made today</p>
                <p className='text-[30px] font-[400]'>420$</p>
                <p className='text-[20px] font-[400] ' style={{color : 'gray'}}> Previous transactions processing. Last payments may not be included.</p>
                <div className='w-[100%] flex items-center justify-between'>
                    <div className='flex flex-col justify-center text-center gap-[20px] '>
                        <div className='text-[30px]' style={{color : 'gray'}}>Target</div>
                        <div className='flex items-center mt-[10px]  gap-[12px] text-[14px]'>
                            <FontAwesomeIcon icon={faChevronDown} style={{color : 'green'}}/>
                            <div className='text-[20px] font-bold' style={{color :'green'}}>12.4K</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-center gap-[20px] '>
                        <div className='text-[30px]' style={{color : 'gray'}}>Target</div>
                        <div className='flex items-center mt-[10px]  gap-[12px] text-[14px]'>
                            <FontAwesomeIcon icon={faChevronDown} style={{color : 'green'}}/>
                            <div className='text-[20px] font-bold' style={{color : 'green'}}>12.4K</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-center gap-[20px] '>
                        <div className='text-[30px]' style={{color : 'gray'}}>Target</div>
                        <div className='flex items-center mt-[10px] gap-[12px] text-[14px]'>
                            <FontAwesomeIcon icon={faChevronDown} style={{color : 'red'}}/>
                            <div className='text-[20px] font-bold' style={{color : 'red'}}>12.4K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
