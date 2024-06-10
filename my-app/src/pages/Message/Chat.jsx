import React, { useEffect } from 'react'
import axios from 'axios'
import ChatHeader from './ChatHeader'
import ChatContainer from './ChatContainer'
import ChatInput from './ChatInput'
const Chat = () => {

    // useEffect=(()=>{
    //     const getMessages = () =>{
    //         const messages = axios.get(`http://localhost:8000/`)
    //     }

    // },[])
  return (
    <div className='border-l w-full flex flex-col h-[100vh] relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#0D19A3] opacity-50"></div>

          <ChatHeader/>
          <ChatContainer/>
          <ChatInput/>
        
    </div>
  )
}

export default Chat
