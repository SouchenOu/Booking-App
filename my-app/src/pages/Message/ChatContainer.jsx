import React, { useEffect } from 'react'
import axios from "axios";
import { useStateProvider } from '../context/StateContext';
import { reducerCases } from '../context/constent';
import { calculateTime } from '../../utils/calculateTime';


const ChatContainer = () => {
  const [{userInfo, currentChatUser, messages}, dispatch] = useStateProvider();

  useEffect(()=>{
    const getMessages = async () =>{
      const {data :{messages} } = await axios.get(`https://booking-app-udqo.onrender.com/message/getMessage/${userInfo._id}/${currentChatUser._id}`);
      dispatch({type: reducerCases.SET_MESSAGES, messages});
    }
    if(currentChatUser?._id && userInfo?._id)
    {
        getMessages();
    }
  },[currentChatUser])
  return (
    <div className='h-[60px]  relative overflow-auto flex-grow custom-scrollbar'>
      <div className=' my-[100px] flex flex-col w-full gap-1'>

        {messages.map((message)=>(
          <div className={` flex flex-col p-[10px] gap-[20px]  ${message.sender._id === currentChatUser._id  ? "items-start justify-start"  : "items-end justify-end"}`}>
            <div className='flex items-center justify-center gap-[20px] '>
              <img className='w-[50px] h-[50px] rounded-[50%]' src="/prof.png" alt=""/>
              <div className={`flex flex-col bg-gray-900 rounded-[20px]   p-[10px] w-[400px] ${message.sender._id === currentChatUser._id ? 'bg-[#11185e]' : 'bg-gray-600'}`}>
                <span className='text-[20px] font-bold '>{message.content}</span>
                <span className=" text-[15px] pt-4 min-w-fit flex items-end justify-end">{calculateTime(message.createdAt)}</span>

              </div>
            </div>
          </div>
        ))}

      </div>
     
    </div>
  )
}

export default ChatContainer
