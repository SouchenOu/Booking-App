import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import NavbarPicture from '../../components/navbar/navBarPicture';
import { reducerCases } from '../context/constent';
import { useStateProvider } from '../context/StateContext';
import {Card, Flex, Form, Typography, Input, Button,  Spin, Alert } from 'antd'
import useLogin from '../../hooks/useLogin';



const Login = () => {

    const {loading, error, loginUser} = useLogin();
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const [infoUser, setInfoUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInfoUser((prev) => ({ ...prev, [ e.target.id]: e.target.value }));
    }

    const handleClick = async (values) => { 
       
        const result = await loginUser(values);
        console.log("login result->", result);
        if (result.success) {
            setSuccess(result.message);
            navigate("/"); // Navigate to login page after successful registration
        } else {
            setSuccess(null);
        }
    }



    return (
        <div className='bg-gray-800'>
            <NavbarPicture />

            <Card className=" bg-gray-100 flex items-center justify-center  h-screen">

                <Flex>
                    <Flex vertical flex={1} className='flex flex-col items-center justify-center bg-white py-[100px] px-[100px] '>
                        <Typography.Title level={3} strong className="text-center text-[50px] font-bold">SignIn</Typography.Title>
                        <Typography.Text type="secondary" strong className="text-center">Join for exclusive access</Typography.Text>
                        <Form layout="vertical" onFinish={handleClick} autoComplete='off'>
                          
                            <Form.Item className="text-[30px] font-bold" label="email" name="email" type="email" rules={[{required : true, message : "Please input your email"}]}>
                                <Input placeholder="Enter your email" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                           
                            <Form.Item className="text-[30px] font-bold" label="password" name="password" type="password" rules={[{required : true, message : "Please input your password"}]}>
                                <Input placeholder="Enter your password" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            {error && <Alert description={error} type='error' showIcon closable className="mb-[2.3rem]" />}
                            {success && <Alert description={success} type='success' showIcon closable style={{ 
                                    width: '500px', 
                                    fontSize: '16px', 
                                    padding: '20px', 
                                    marginBottom: '2.3rem', 
                                }} />}                
                                <Form.Item >
                                    <Button type="primary" htmlType="Submit" size="large" className='w-full text-white bg-[#0D19A3] rounded-lg p-[15px] font-medium cursor-pointer'>
                                        {loading ? <Spin/> : 'SignIn'}
                                    </Button>
                            </Form.Item>
                                <Form.Item className='flex items-center justify-center'>
                                    <Link to="/register" className='flex items-center justify-center'>
                                        <h1 className='text-[20px] w-full'>Need  account</h1>
                                        <Button type="primary" htmlType="Submit" size="large" className=' text-[#0D19A3] underline border-[2px] px-[20px] py-[10px]  bg-white rounded-lg p-[15px] font-bold text-[20px] cursor-pointer'>SignUp</Button>
                                    </Link>
                                </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
            </Card>

        </div>
    )
}

export default Login;