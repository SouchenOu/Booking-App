import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import NavbarPicture from '../../components/navbar/navBarPicture';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register= () => {
    const ToastError = (message) => {
		toast.error(message, {
		  position: toast.POSITION.TOP_RIGHT,
		  autoClose: 5000,
		  hideProgressBar: false,
		  closeOnClick: true,
		  pauseOnHover: true,
		  draggable: true,
		});
	  };
	
	  const ToastSuccess = (message) => {
		toast.success(message, {
		  position: toast.POSITION.TOP_RIGHT,
		  autoClose: 5000,
		  hideProgressBar: false,
		  closeOnClick: true,
		  pauseOnHover: true,
		  draggable: true,
		});
	  };
    const {user, error, loading , dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const [infoUser, setInfoUser] = useState({
        username : undefined,
        email : undefined,
        country : undefined,
        city : undefined,
        phone : undefined,
        password : undefined,
    })

    const handleChange = (e) =>{
        setInfoUser((prev)=>({...prev, [e.target.id] : e.target.value}))

    }
    const handleClick = async (e) =>{ 
        e.preventDefault()
        dispatch({type : "LOGIN_START"});
        console.log("userInfo-->", infoUser);
        try{
            await axios.post("http://localhost:8000/auth/register", infoUser);
            toast.success("Sign Up successfully!");
            alert("sucess");

            navigate("/login");

        }catch(err){
           alert("failure")
        }
    }   
  return (
    <div>
        <ToastContainer />
        <NavbarPicture/>
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
                        <div className='flex flex-col'>
                            <label for="email" className="text-[20px] font-[300px] flex items-start justify-start">Your Email</label>
                            <input onChange={handleChange}  type="text"  id="email"  style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block" onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} placeholder="Enter your email" required=""/>
                        </div>
                        <div className='flex flex-col'>
                            <label for="country" className="text-[20px] font-[300px] flex items-start justify-start">Your Country</label>
                            <input onChange={handleChange}  type="text"  id="country"  style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block" onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} placeholder="Enter your country" required=""/>
                        </div>
                        <div>
                            <label for="city" className="text-[20px] font-[300px] flex items-start justify-start">City</label>
                            <input  onChange={handleChange}  type="text" id="city"   placeholder="Enter your City" style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block " onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} required=""/>
                        </div>
                        <div>
                            <label for="phone" className="text-[20px] font-[300px] flex items-start justify-start">Phone</label>
                            <input  onChange={handleChange}  type="text" id="phone"   placeholder="Enter your Phone" style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block " onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} required=""/>
                        </div>
                        <div>
                            <label for="password" className="text-[20px] font-[300px] flex items-start justify-start">Password</label>
                            <input  onChange={handleChange}  type="text" id="password"   placeholder="••••••••" style={{ borderColor: '#022E51' }} className="p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block " onFocus={(e) => e.target.style.borderColor = '#4eb1f3'} required=""/>
                        </div>
                        
                        <button  className="w-full text-white rounded-lg  p-[15px] font-medium cursor-pointer" style={{background: '#0D19A3'}} onClick={handleClick}>Sign up</button>
                        {error && <span>{error}</span>}
                    </div>
                </div>
               
                {/* {error && <span>{error}</span>} */}

            </div>
           
            
        </div>
      
    </section>

    </div>
    
  )
}

export default Register
