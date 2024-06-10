import React, { useEffect, useState } from "react";
import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constent";
// import Avatar from "../usedFiles/Avatar";

// import { calculateTime } from "@/utils/CalculateTime";
// import MessageStatus from "../usedFiles/MessageStatus";
// import { FaCamera, FaMicrophone } from "react-icons/fa";

function ChatLIstItem({data}) {
  const [{userInfo, currentChatUser}, dispatch] = useStateProvider();
//   useEffect(()=>{
//     const checkuser = () =>{
//         if(data.recipient.id !== userInfo.id){
//             setUserName(data.recipient.username);
//         }else{
//             setUserName(data.sender.username);
//         }
//     }
//     checkuser();
//   },[])
  const handleUserClick = () =>{
      
        dispatch({type: reducerCases.CHANGE_CURRENT_CHAT_USER, user : {
          name : data.username,
        //   profilePicture : data.profilePicture,
          email: data.email,
        //   id : userInfo.id === data.sender.id ? data.recipient.id : data.senderId,
        }})
      

   
        dispatch({type: reducerCases.CHANGE_CURRENT_CHAT_USER, user : {...data}});
    

  }
  return <div className="flex cursor-pointer items-center hover:bg-gray-500" onClick={handleUserClick}>
  
      <div className="flex items-center justify-center ">
        <div className=" flex items-center justify-center gap-[20px]">
            <img className="w-[60px] h-[60px] rounded-[50%]" src="/prof.png" alt="profile"/>
        </div>
        <div className=" flex flex-col items-start justify-start px-[20px]">
            <p className="text-white text-[25px]">{data.username}</p>
            {data.lastMessage.type === "text" && <span className="text-gray-400 text-[20px]">{data.lastMessage.content}</span>}


        </div>
    
      </div>
      
    </div>
   
}

export default ChatLIstItem;
