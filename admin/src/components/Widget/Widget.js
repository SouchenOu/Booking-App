import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faSackDollar} from '@fortawesome/free-solid-svg-icons';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';



const Widget = ({type}) => {
    let data;
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user" : 
            data = {
                title : "USERS",
                isMoney : false,
                link : "see all users",
                icon : (
                    <FontAwesomeIcon icon={faUser} className='font-[18px] p-[15px] rounded-[10px]  bg-[#f78296]' style={{color : "crimson"}}/>
                )
            }
            break;
        case "orders" : 
            data = {
                title : "ORDERS",
                isMoney : false,
                link : "View all orders",
                icon : (
                    <FontAwesomeIcon icon={faCartShopping} className='font-[18px] p-[15px] rounded-[10px] bg-[#f5f5ac]' style={{color : 'goldenrod'}}/>
                )

            }
            break ;  
        case "earning" :
            data = {
                title : "EARNINGS",
                isMoney : true,
                link : "View all earning",
                icon : (
                    <FontAwesomeIcon icon={faSackDollar} className='font-[18px] p-[15px] rounded-[10px] bg-green-400' style={{color : 'green'}}/>
                )

            }  
            break; 
        case "balance" : 
        data = {
            title : "BALANCE",
            isMoney : true,
            link : "See details",
            icon : (
                <FontAwesomeIcon icon={faDollarSign}  className='font-[18px] p-[15px] rounded-[10px] bg-violet-300'  style={{color : 'purple'}}/>
            )
        } 
        break;
        default: 
            break;
        
    }
    console.log("data here widget-->", data?.title);
  return (
    <div className=' flex flex-1 justify-between gap-[100px] p-[40px] shadow-custom rounded-[10px] h-[200px]  '>
        <div className='flex flex-col justify-between'>
            <span className='text-[20px] font-bold' style={{color : "gray"}}>{data?.title}</span>
            <span className='text-[30px] font-[300px]'>{ data?.isMoney } {amount}</span>
            <span className='text-[20px] border-b-[1px] border-solid border-gray-400 cursor-pointer'>{data?.link}</span>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex items-center text-[14px]'>
                {diff} %
            </div>
            {data?.icon}
        </div>
      
    </div>
  )
}

export default Widget
