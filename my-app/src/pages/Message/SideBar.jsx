import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../context/StateContext';
import { reducerCases } from '../context/constent';
import ChatLIstItem from './ChatListItem';

const SideBar = () => {
    const [{ userInfo,conversations }, dispatch] = useStateProvider(); // Destructure state and dispatch


    
    useEffect(()=>{
        const getConversation = async () =>{
            try{
                const {data} = await axios.get(`http://localhost:8000/message/getConversation/${userInfo._id}`);
                dispatch({type : reducerCases.SET_CONVERSATIONS, conversations: data.response.users});


            }catch(err){

            }
           
            
        }
      
        if(userInfo)
            getConversation()
;
    },[userInfo])
  return (
   
      <div>
            {conversations.map(elem =>{
            return (<ChatLIstItem data={elem} isContactPage={true} key={elem.id}>

            </ChatLIstItem>)
          })}
        </div>
      
  )
}

export default SideBar
