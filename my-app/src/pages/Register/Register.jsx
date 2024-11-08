import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPicture from '../../components/navbar/navBarPicture';
import {Card, Flex, Form, Typography, Input, Button, Spin, Alert } from 'antd'
import useSignUp from '../../hooks/useSignUp';
import { toast } from 'react-toastify';



const Register = () => {
    const {loading, error, registerUser, verifyCode} = useSignUp();
    const [emailValue, setEmailValue] = useState("");
    const [success, setSuccess] = useState(null);
    const [verificationCode, setVerificationCode] = useState(new Array(6).fill("")); 
    const [userData, setUserData] = useState("");
    const [verify, setVerify] = useState(false);
    const navigate = useNavigate();




    const handleClick = async (values) => {
        setEmailValue(values.email);
        console.log("email-->", values.email);
    
        const emailVerificationResult = await verifyCode(values.email);
        if (emailVerificationResult.success === true) {
    
            setSuccess("Verification code sent! Please check your email.");
            setVerify(true);
            toast.success("Verification code sent! Please check your email.");
            setUserData(values);
        } else {
            toast.error(emailVerificationResult.message);
        }
   
       
      
    };
    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^[0-9]?$/.test(value)) { 
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);
        }
  
    };
      const handlePaste = (e, index) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, verificationCode.length - index);
        const newCode = [...verificationCode];
        for (let i = 0; i < pastedData.length; i++) {
            if (i + index < verificationCode.length) {
                newCode[i + index] = pastedData[i];
            }
        }
  
        setVerificationCode(newCode);
        document.getElementById(`code-${Math.min(index + pastedData.length, verificationCode.length - 1)}`).focus();
      };
      const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            document.getElementById(`code-${index - 1}`).focus();
        } else if (e.key === "ArrowLeft" && index > 0) {
            document.getElementById(`code-${index - 1}`).focus();
        } else if (e.key === "ArrowRight" && index < verificationCode.length - 1) {
            document.getElementById(`code-${index + 1}`).focus();
        }
    };
    const handleRegister = async (values) => {
        const finalCode = verificationCode.join("");
        const result = await registerUser(userData, finalCode);
        if (result.success) {
            setSuccess(result.message);
            navigate("/login");
        } else {
            setSuccess(null);
        }
    };
    return (
        <div className='bg-gray-800'>
            <NavbarPicture />

            <Card className=" bg-gray-100 flex items-center justify-center  h-screen">

                    <Flex vertical flex={1} className='flex flex-col items-center justify-center bg-white py-[100px] px-[100px] '>
                        <Typography.Title level={1} strong className="text-center text-[50px] font-bold">SignUp</Typography.Title>
                        <Typography.Text level={2} type="secondary" strong className="text-center text-[30px] font-bold">Join for exclusive access</Typography.Text>
                        <Form layout="vertical" onFinish={handleClick} autoComplete='off' className='p-[20px]'>
                            <Form.Item  className="text-[50px] font-bold" label="Full name" name="username" rules={[{required : true, message : "Please input your full name"}]}>
                                <Input size="large" placeholder="Enter your full name" className='px-[10px] w-[500px] py-[10px]  '></Input>
                            </Form.Item>
                            <Form.Item className="text-[50px]  font-bold" label="Email" name="email" rules={[{required : true, message : "Please input your email"}]}>
                                <Input size="large" placeholder="Enter your Email" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            <Form.Item className="text-[50px]  font-bold" label="Country" name="country" rules={[{required : true, message : "Please input your country"}]}>
                                <Input size="large" placeholder="Enter your country" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            <Form.Item className="text-[50px]  font-bold" label="City" name="city" rules={[{required : true, message : "Please input your city"}]}>
                                <Input size="large" placeholder="Enter your city" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            <Form.Item className="text-[50px]  font-bold" label="phone" name="phone" rules={[{required : true, message : "Please input your phone"}]}>
                                <Input size="large" placeholder="Enter your phone" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            <Form.Item className="text-[50px]  font-bold" label="password" name="password" rules={[{required : true, message : "Please input your password"}]}>
                                <Input size="large" placeholder="Enter your password" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            {error && <Alert description={error} type='error' showIcon closable className="mb-[2.3rem]" />}
                            {success && <Alert description={success} type='success' showIcon closable style={{ 
                                    width: '500px', 
                                    fontSize: '16px', 
                                    padding: '20px', 
                                    marginBottom: '2.3rem', 
                                }} />}                            
                            <Form.Item >
                                <Button type={`${loading ? '' : 'primary'}`} htmlType="Submit" size="large" className='w-full text-white bg-[#0D19A3] rounded-lg p-[15px] font-bold text-[20px] cursor-pointer'>
                                    {loading ? <Spin/> : 'Create Account'}
                                </Button>
                            </Form.Item>
                            <Form.Item >
                                <Link to="/login">
                                    <Button type="primary" htmlType="Submit" size="large" className='w-full text-black bg-white rounded-lg p-[15px] font-bold text-[20px] cursor-pointer'>SignIn</Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>
            </Card>
            {verify && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-xl shadow-lg w-[400px] md:w-[500px]">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800">Verify Your Email</h3>
                    <p className="text-lg mb-6 text-gray-600">
                    We sent a verification code to <span className="text-blue-600">{emailValue}</span>.
                    </p>
                    <div className="flex justify-center gap-2 mb-6">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                id={`code-${index}`}
                                type="text"
                                maxLength={1}
                                value={verificationCode[index]}
                                onChange={(e) => handleChange(e, index)}
                                onPaste={(e) => handlePaste(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        ))}
                    </div>
                    <p className="text-[18px] text-gray-500 mb-6">Can't find the email? Check your spam folder, or re-enter your email and try again.</p>
                    <div className="flex justify-between">
                        <button
                            className="border-2 border-gray-300 text-gray-700 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition duration-150"
                            onClick={() => setVerify(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition duration-150"
                            onClick={handleRegister}
                        >
                            Submit Code
                        </button>
                    </div>
                </div>
                </div>
            )}

        </div>
        
        
    );
};

export default Register;