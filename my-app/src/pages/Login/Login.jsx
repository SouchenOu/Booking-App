import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import NavbarPicture from '../../components/navbar/navBarPicture';
import { reducerCases } from '../context/constent';
import { useStateProvider } from '../context/StateContext';
import {Card, Flex, Form, Typography, Input, Button } from 'antd'


const Login = () => {
    const { user, error, loading, dispatch: authDispatch } = useContext(AuthContext);
    const [{ userInfo }, dispatch] = useStateProvider(); // Destructure state and dispatch
    const navigate = useNavigate();

    const [infoUser, setInfoUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setInfoUser((prev) => ({ ...prev, [ e.target.id]: e.target.value }));
    }

    const handleClick = async (e) => { 
        e.preventDefault();
        authDispatch({ type: "LOGIN_START" });
        try {
            const login_response = await axios.post("http://localhost:8000/auth/login", infoUser);
            console.log("data login-->", login_response);
            dispatch({type: reducerCases.SET_USER_INFO, userInfo: login_response.data.user});

            navigate("/");
            authDispatch({ type: "LOGIN_SUCCESS", payload: login_response.data });
        } catch (err) {
            alert(err.response.data);
            authDispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

//   useEffect(()=>{
    
//     const getMessage = async() =>{
//       const {data : {messages}} = await axios.get(`http://localhost:8000/message/${userInfo.id}/${currentChatUser.id}`);
//       dispatch({type:reducerCases.SET_MESSAGES, messages})
     
//     }
//     if(currentChatUser?.id && userInfo?.id)
//     {
//       getMessage();
//     }
//   },[currentChatUser]);

    return (
        <div className='bg-gray-800'>
            <NavbarPicture />

            <Card className=" bg-gray-100 flex items-center justify-center  h-screen">

                <Flex>
                    <Flex vertical flex={1} className='flex flex-col items-center justify-center bg-white py-[100px] px-[100px] '>
                        <Typography.Title level={3} strong className="text-center text-[50px] font-bold">SignUp</Typography.Title>
                        <Typography.Text type="secondary" strong className="text-center">Join for exclusive access</Typography.Text>
                        <Form layout="vertical" onFinish={handleClick} autoComplete='off'>
                          
                            <Form.Item className="text-[30px] font-bold" label="Email" name="email" rules={[{required : true, message : "Please input your email"}]}>
                                <Input placeholder="Enter your Email" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                           
                            <Form.Item className="text-[30px] font-bold" label="password" name="password" rules={[{required : true, message : "Please input your password"}]}>
                                <Input placeholder="Enter your password" className='px-[10px] w-[500px] py-[10px]'></Input>
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="Submit" size="large" className='w-full text-white bg-[#0D19A3] rounded-lg p-[15px] font-medium cursor-pointer'>Create Account</Button>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
            </Card>

        </div>
    )
}

export default Login;