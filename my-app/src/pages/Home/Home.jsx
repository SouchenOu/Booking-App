import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import Features from '../../components/features/features';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturesProperties from '../../components/featuresProperties/featuresProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import ListCheck from '../../components/PropertyList/ListCheck';
import Explore from '../../components/PropertyList/Explore';
import Inspiration from '../../components/PropertyList/Inspiration';
import Last from '../../components/PropertyList/Last';
import ListFinal from '../../components/PropertyList/ListFinal';
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import EmojiPicker from "emoji-picker-react";
import { useStateProvider } from '../context/StateContext';
import { reducerCases } from '../context/constent';
import axios from "axios";
import { MdSend } from "react-icons/md";
import { calculateTime } from '../../utils/calculateTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [openMessage, setOpenMessage] = useState(false);
  const [{ userInfo, socket, messages }, dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const EmojiRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "open-emoji") {
        if (EmojiRef.current && !EmojiRef.current.contains(event.target)) {
          setShowEmojiPicker(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleEmoji = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => (prevMessage += emoji.emoji));
  };

  const sendMessage = async () => {
    try {
      // Send the new message
      const { data } = await axios.post("http://localhost:8000/message/create", { content: message, fromId: userInfo._id, toId: "6654313144f0845f7146d9a6" });
      const { data: { messages } } = await axios.get(`http://localhost:8000/message/getMessage/${userInfo._id}/6654313144f0845f7146d9a6`);
      dispatch({ type: reducerCases.SET_MESSAGES, messages });
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  useEffect(() => {
    if (grabPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setGrabPhoto(false);
      };
    }
  }, [grabPhoto]);

  useEffect(()=>{
    const getMessages = async () =>{
      const {data :{messages} } = await axios.get(`http://localhost:8000/message/getMessage/${userInfo._id}/6654313144f0845f7146d9a6`);
      dispatch({type: reducerCases.SET_MESSAGES, messages});
    }
    if(userInfo?._id)
    {
        getMessages();
    }
  },[])
  return (
    <div>
      <Navbar openMessage={openMessage} setOpenMessage={setOpenMessage} />
      <Header type="home" />
      {openMessage && (
        <div className="flex flex-col gap-[45px] fixed bottom-0 right-[50px] bg-white border p-[20px] w-[500px] h-[600px] shadow-lg z-50" >
         
          <div className='flex flex-col items-center justify-center gap-[10px]'>
            <div className='flex items-center justify-between gap-[170px]'>
              <h1 className='text-[20px] font-bold w-full px-[100px] py-[5px] border-[2px] border-gray-300' >Admin</h1>
              <FontAwesomeIcon icon={faXmark} className='h-[30px] w-[30px] cursor-pointer' onClick={()=>setOpenMessage(!openMessage)}/>
            </div>
            <div className=' h-[400px] relative overflow-auto flex-grow custom-scrollbar'>
              <div className=' my-[30px] flex flex-col w-full gap-1'>

                {messages.map((message)=>(
                  <div className={` flex flex-col p-[10px] gap-[20px]  ${message.sender._id === "6654313144f0845f7146d9a6"  ? "items-start justify-start"  : "items-end justify-end"}`}>
                    <div className='flex items-center justify-center gap-[20px] '>
                      <img className='w-[50px] h-[50px] rounded-[50%]' src="/prof.png" alt=""/>
                      <div className={`flex flex-col bg-gray-300 rounded-[20px]   p-[10px] w-[400px] ${message.sender._id === "6654313144f0845f7146d9a6" ? 'bg-[#11185e] text-white' : 'bg-gray-600 text-white'}`}>
                        <span className='text-[20px] font-bold '>{message.content}</span>
                        <span className=" text-[15px] pt-4 min-w-fit flex items-end justify-end">{calculateTime(message.createdAt)}</span>

                      </div>
                    </div>
                  </div>
                ))}

              </div>
     
            </div>

          </div>
          <div className='flex itms-center justify-center'>
            <div className="flex items-center justify-center gap-8">
              <BsEmojiSmile id="open-emoji" className="text-panel-header-icon cursor-pointer text-xl" title="Emoji" onClick={handleEmoji} />
              {showEmojiPicker && <div ref={EmojiRef} className="absolute bottom-24 left-16 z-index"><EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" /></div>}
              <ImAttachment onClick={() => setGrabPhoto(true)} className="text-panel-header-icon cursor-pointer text-xl" title="Attach file" />
            </div>
            <div className="h-[60px] w-[400px] rounded-lg flex items-center text-black">
              <input value={message} type="text" placeholder="Type a message" onChange={(e) => setMessage(e.target.value)} className="text-[20px] text-bold h-10 w-full py-[30px] px-5 focus:outline-none rounded-lg" />
            </div>
            <div className="flex w-10 items-center justify-center">
              <button className="flex text-panel-header-icon px-4 py-1 gap-3">
                {message.length ? (
                  <MdSend  onClick={() => sendMessage()} className="rounded-lg p-[5px] cursor-pointer text-[40px]" title="Send message" />
                ) : (
                  <FaMicrophone onClick={() => setShowAudio(true)} className="text-panel-header-icon cursor-pointer text-4xl p-1" title="Send record" />
                )}
              </button>
            </div>

          </div>
          
        </div>
      )}
      <div className='mt-[50px] flex-col flex items-center gap-[30px] z-30'>
        <Features />
        <h1 className=' px-[40px] text-[40px] font-bold items-center'>Browse by property type</h1>
        <PropertyList />
        <Explore />
        <ListCheck />
        <h1 className='text-[40px] font-bold items-center'>Stay at our top unique properties</h1>
        <p className='text-[20px] font-bold text-gray'>From castles and villas to boats and igloos, we've got it all</p>
        <FeaturesProperties />
        <Inspiration />
        <Last />
        <ListFinal />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;