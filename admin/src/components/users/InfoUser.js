import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Chart from './Chart';

const InfoUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState([]);
    console.log("id here-->", userId);
    useEffect(()=>{
        const getUser = async () =>{
            try{
                const info = await axios.get(`http://localhost:8000/users/${userId}`);
                setUser(info.data);
                console.log("info user here-->", info);
            }catch(err){
                console.log(err);
            }
        }
        getUser();
    },[])
    console.log("user result-->", user.username);
  return (
    <div className='flex w-full'>
        <Sidebar/>
        <div className='flex-[6]'>
            <Navbar/>
            <div className=' flex  p-[20px] gap-[20px]'>
                <div className='flex-[1] relative shadow-custom '>
                    <div className='text-[30px] font-bold top-[0] right-[0] p-[5px] bg-[#7551f818] rounded-full' style={{color : '#7451f8'}}>Edit</div>
                    <h1 className='text-[30px] font-bold top-[0] right-[0] p-[5px]'>Informations</h1>
                    <div className="flex gap-[20px]">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="w-[100px] h-[100px] rounded-full"
                            />
                            <div className="details">
                                <h1 className="text-[25px] font-bold mb-[10px]" style={{color : "gray"}}>{user?.username}</h1>
                                <div className=" flex text-[20px] font-bold mb-[10px] gap-[10px]">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">{user?.email}</span>
                                </div>
                                <div className=" flex gap-[10px] text-[20px] font-bold mb-[10px]">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">{user?.phone}</span>
                                </div>
                                <div className=" flex gap-[10px] text-[20px] font-bold mb-[10px]">
                                <span className="itemKey">City:</span>
                                <span className="itemValue">
                                    {user?.city}
                                </span>
                                </div>
                                <div className="flex gap-[10px] text-[20px] font-bold mb-[10px]">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">{user?.country}</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='flex-[2]'>
                    <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />


                </div>
               
             </div>
        </div> 
      
    </div>
  )
}

export default InfoUser
