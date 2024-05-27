import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../context/StateContext';
import { reducerCases } from '../context/constent';

const SideBar = () => {
    const [{ userInfo,conversations }, dispatch] = useStateProvider(); // Destructure state and dispatch

    
    useEffect(()=>{
        const getConversation = async () =>{
            try{
                const {data} = await axios.get(`http://localhost:8000/message/getConversation/${userInfo._id}`);
                console.log("data here-->", data.users);
                dispatch({type : reducerCases.SET_CONVERSATIONS, conversations: data.users });


            }catch(err){

            }
           
            
        }
        console.log("conversations-->", conversations);
        console.log("userInfo here sidebar-->", userInfo);
        if(userInfo)
            getConversation()
;
    },[userInfo])
  return (
   
      <div>
            {conversations.map((conversation) => (
                <div className={`flex cursor-pointer items-center hover:bg-background-default-hover border-b-[2px] border-gray-600 w-full p-[10px]`} >
                    <div className="min-w-fit px-5 pt-2 pb-1  flex flex-col">
                    {/* <Avatar type="lg" image={data?.profilePicture}/> */}
                        <img src="/person.png" alt="" className='w-[40px] h-[40px] rounded-[50%]'/>
                    
                    </div>
                    <div className="min-h-full justify-center w-full mt-3 pr-2 flex flex-col">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="text-white text-[20px]">{conversation.username}</p>
                            </div>
                        
                        </div>
                    
                    </div>
               
              </div>
            ))}
        </div>
      
  )
}

export default SideBar
