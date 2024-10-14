import React, { useEffect, useRef, useState } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";
import { reducerCases } from '../context/constent';
import axios from 'axios'
import { useStateProvider } from '../context/StateContext';
import EmojiPicker from "emoji-picker-react";


const ChatInput = () => {
  const [{userInfo, currentChatUser, socket, messages}, dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setshowEmojiPicker] = useState(false);
  const [grabPhoto, setgrabPhoto] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const EmojiRef = useRef(null);

  // const photoPickerChange = async (e) =>{
  //   try{
  //     const file = e.target.files[0];
  //     const formData = new FormData();
  //     formData.append("image", file);
  //     const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTES , formData,{headers : {"Content-Type" : "multipart/form-data"}, params : {fromId : userInfo.id, toId: currentChatUser.id}})
  //     if(response.status === 201){
  //       socket.current.emit('send-message',{toId : currentChatUser.id, fromId : userInfo.id, content: response.data.message.content});
  //       dispatch({type: reducerCases.ADD_MESSAGE, newMessage : {...response.data.message}, fromSelf : true});
  //     }
  //   }catch(err){

  //   }
  // }

  useEffect(()=>{

    const handleOutsideClick = (event) =>{
      if(event.target.id !== "open-emoji"){
        if(EmojiRef.current  && !EmojiRef.current.contains(event.target)){
          setshowEmojiPicker(false);
        }

      }

    }

    document.addEventListener("click", handleOutsideClick);
    return ()=>{
      document.removeEventListener("click", handleOutsideClick);
    }

  },[])
  const handleEmoji = () =>{
    setshowEmojiPicker(!showEmojiPicker);
  }
  const handleEmojiClick = (emoji) =>{
    setMessage((prevMessage)=>(prevMessage += emoji.emoji));

  }
  const sendMessage = async () => {
    try {
        // Send the new message
        const { data } = await axios.post("https://booking-app-udqo.onrender.com/message/create", {  content: message, fromId: userInfo._id , toId: currentChatUser._id});
        const {data :{messages} } = await axios.get(`https://booking-app-udqo.onrender.com/message/getMessage/${userInfo._id}/${currentChatUser._id}`);
        dispatch({type:reducerCases.SET_MESSAGES, messages});
   
        setMessage("");


    } catch (err) {
        console.error("Error sending message:", err);
    }
}

  useEffect(()=>{
    if(grabPhoto){
      const data = document.getElementById("photo-picker") ;
      data.click();
      document.body.onfocus = (e) =>{
        setgrabPhoto(false);
      }
      
    }
  }, [grabPhoto])

  return (
    <div className="h-[200px] flex items-center justify-center gap-6  px-4 relative ">
    {!showAudio && <>
            <div className="flex gap-8">
              <BsEmojiSmile id="open-emoji" className="text-panel-header-icon cursor-pointer text-xl" title="Emoji"/>
                {showEmojiPicker && <div ref={EmojiRef} className=" absolute bottom-24 left-16 z-index"><EmojiPicker onEmojiClick={handleEmojiClick} theme="dark"/></div>}
              <ImAttachment onClick={()=> setgrabPhoto(true)} className="text-panel-header-icon cursor-pointer text-xl" title="Attach file"/>
            </div>
            <div className="h-[60px] w-full rounded-lg flex items-center text-black">
                <input value={message} type="text" placeholder="Type a message " onChange={(e)=>setMessage(e.target.value)} className="text-[20px] text-bold  h-10 w-full py-[30px] px-5 focus:outline-none rounded-lg"/>
            </div>
            <div className="flex w-10 items-center justify-center">
                <button className="flex text-panel-header-icon px-4 py-1 gap-3 " > 
                  {message.length ?  <MdSend style={{ background: 'linear-gradient(to bottom, #0d0225, #190769)' }}  onClick={()=>sendMessage()} className=" rounded-lg p-[5px] cursor-pointer text-[50px]" title="Send message"/> :            
                  <FaMicrophone onClick={ ()=> setShowAudio(true)} className="text-panel-header-icon cursor-pointer text-4xl p-1 " title="Send  record"/>
      }
                </button>
            </div>
    </>}
{/*       
      {grabPhoto && <PhotoUpload onChange={photoPickerChange}/>}
      {showAudio && <CaptureAudio hide={setShowAudio} />} */}

   
  </div>
  )
}

export default ChatInput
