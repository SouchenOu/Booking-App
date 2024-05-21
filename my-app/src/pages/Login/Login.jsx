import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {user, error, loading , dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const [infoUser, setInfoUser] = useState({
        username : undefined,
        password : undefined,
    })

    const handleChange = (e) =>{
        setInfoUser((prev)=>({...prev, [e.target.id] : e.target.value}))

    }
    const handleClick = async (e) =>{ 
        e.preventDefault()
        dispatch({type : "LOGIN_START"});
        try{
            const login_response = await axios.post("http://localhost:8000/auth/login", infoUser);
            navigate("/");
            dispatch({type: "LOGIN_SUCCESS", payload : login_response.data});

        }catch(err){
            alert(err.response.data);
            dispatch({type: "LOGIN_FAILURE", payload : err.response.data});       
        }
    }
    

  return (
    <section className='bg-gray-100 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center   md:h-screen '>
            <div className=' bg-white rounded-lg border-[2px] border-red shadow px-[100px] py-[100px]'>
                <div className='flex flex-col items-center justify-center gap-[20px]'>
                    <h1 className='text-[40px] font-bold flex items-start justify-start'> Sign in to your account</h1>
                 
                    <div className="space-y-4 md:space-y-6 w-full">
                        <div className='flex flex-col'>
                            <label for="username" className="text-[20px] font-[300px] flex items-start justify-start">Your username</label>
                            <input onChange={handleChange}  type="text"  id="username"  style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block" onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} placeholder="Enter your username" required=""/>
                        </div>
                        <div>
                            <label for="password" className="text-[20px] font-[300px] flex items-start justify-start">Password</label>
                            <input  onChange={handleChange}  type="password" id="password"   placeholder="••••••••" style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block " onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} required=""/>
                        </div>
                        
                        <button  className="w-full text-white rounded-lg bg-black p-[15px] font-medium cursor-pointer" onClick={handleClick}>Sign in</button>
                        {error && <span>{error}</span>}
                    </div>
                </div>
               
                {/* {error && <span>{error}</span>} */}

            </div>
           
            
        </div>
      
    </section>
  )
}

export default Login
