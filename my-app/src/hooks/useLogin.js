import { useState } from "react";
import { useAuth } from "../context/AuthenticationContext.js"
import {message} from 'antd';

const useLogin = () =>{
    const {login} = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const loginUser = async (values) =>{

        try{
            setError(null);
            setLoading(true);

            const res = await fetch('https://booking-app-udqo.onrender.com/auth/login' , {method : 'POST', headers: {'Content-Type' : 'application/json'}, body : JSON.stringify(values)});
            console.log("response here-->", res);
            const data = await res.json();
            console.log("hna data", data);
            console.log("data signUp-->", res.status);
            if(res.status === 200){
                console.log("200 here");
                message.success(data.message);
                login(data.token, data.user);
                return { success: true, message: data.message }; // Return success message

            }else if(res.status === 400){
                setError(data.message);
                return { success: false, message: data.message }; // Return error message

            }else{
                const errorMsg = "SignIn failed";
                setError("SignIn failed")
                message.error("SignIn failed");
                return { success: false, message: errorMsg };

            }
        }catch(err){
            setError(err.message);  // Set the error message
            message.error(err.message);
            return { success: false, message: err.message };

        }finally{
            setLoading(false);
        }

    }

    return {loading, error, loginUser}
}

export default useLogin;