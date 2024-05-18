import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/auth/login", credentials);
      console.log("res here admin-->", res);
      console.log("res detail here-->", res.data.details);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <section className='bg-orange-500 '>
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
                            
                            <button  className="w-full text-white rounded-lg bg-orange-300 p-[15px] font-medium cursor-pointer" onClick={handleClick}>Sign in</button>
                            {error && <span>{error}</span>}
                        </div>
                    </div>
                

                </div>
            
                
            </div>
  
    </section>
  );
};

export default Login;