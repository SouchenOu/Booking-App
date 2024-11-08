import { useState } from "react";
import { useAuth } from "../context/AuthenticationContext.js"
import {message} from 'antd';

const useSignUp = () =>{
    const {login} = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    const verifyCode = async (email) =>{
        try{
            console.log("verify code");
            setError(null);
            setLoading(true);
            const emailVerificationResult = await fetch('http://localhost:8000/auth/sendVerification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newEmail: email}),
            });

            const data = await emailVerificationResult.json();
            if(emailVerificationResult.status === 200)
            {
                message.success(data.message);
                return { success: true, message: data.message };

            }else if (emailVerificationResult.status === 400) {
                setError(data.message);
                return { success: false, message: data.message }; 
            }

        }catch(err){  
            console.error(err);
        } finally {
            setLoading(false);
        }
    
    }

    const registerUser = async (values, verificationCode) => {
        try {
            setError(null);
            setLoading(true);
            
            const body = { ...values, verificationCode };

            const res = await fetch('http://localhost:8000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            console.log("res-->", data);

            if (res.status === 200) {
                message.success(data.message);
                login(data.token, data.user);

                return { success: true, message: data.message };
            } else if (res.status === 400) {
                setError(data.message);
                return { success: false, message: data.message }; 
            } else {
                const errorMsg = "Registration failed";
                setError(errorMsg);
                message.error(errorMsg);
                return { success: false, message: errorMsg };
            }

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {loading, error, registerUser, verifyCode}
}

export default useSignUp;