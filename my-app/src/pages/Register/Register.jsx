import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPicture from '../../components/navbar/navBarPicture';
import {Card, Flex, Form, Typography, Input, Button, Spin, Alert } from 'antd'
import useSignUp from '../../hooks/useSignUp';

const Register = () => {
    const {loading, error, registerUser} = useSignUp();
    const [success, setSuccess] = useState(null);

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const [infoUser, setInfoUser] = useState({
        username: '',
        email: '',
        country: '',
        city: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        setInfoUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (values) => {
        const result = await registerUser(values);
        if (result.success) {
            setSuccess(result.message);
            navigate("/login"); // Navigate to login page after successful registration
        } else {
            setSuccess(null);
        }
        // e.preventDefault();
        // dispatch({ type: "LOGIN_START" });
        // try {
        //     console.log("Trying to register");
        //     const response = await axios.post("http://localhost:8000/auth/register", infoUser);
        //     console.log("Data registered-->", response.data);
        //     ToastSuccess("Registration successful!");
        //     alert("Registration successful!");
        //     navigate("/login");
        // } catch (err) {
        //     console.error(err);
        //     ToastError("Registration failed. Please try again.");
        //     alert("Registration failed. Please try again.");
        // }
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
                            {success && <Alert description={success} type='success' showIcon closable className="mb-[2.3rem]" />}                            <Form.Item >
                                <Button type={`${loading ? '' : 'primary'}`} htmlType="Submit" size="large" className='w-full text-white bg-[#0D19A3] rounded-lg p-[15px] font-bold text-[20px] cursor-pointer'>
                                    {loading ? <Spin/> : 'Create Account'}
                                    Create account
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

        </div>
        
        // <div>
        //     <NavbarPicture />
        //     <ToastContainer />
        //     <section className='bg-gray-100 dark:bg-gray-900'>
        //         <div className='flex flex-col items-center justify-center md:h-screen'>
        //             <div className='bg-white rounded-lg border-[2px] border-red shadow px-[100px] py-[100px]'>
        //                 <div className='flex flex-col items-center justify-center gap-[20px]'>
        //                     <h1 className='text-[40px] font-bold flex items-start justify-start'>Sign in to your account</h1>
        //                     <div className="space-y-4 md:space-y-6 w-full">
        //                         {['username', 'email', 'country', 'city', 'phone', 'password'].map((field) => (
        //                             <div className='flex flex-col' key={field}>
        //                                 <label htmlFor={field} className='text-[20px] font-[300px] flex items-start justify-start'>
        //                                     {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
        //                                 </label>
        //                                 <input
        //                                     onChange={handleChange}
        //                                     type={field === 'password' ? 'password' : 'text'}
        //                                     id={field}
        //                                     style={{ borderColor: '#022E51' }}
        //                                     className='p-2.5 w-full rounded-lg border-[2px] border-gray-400 text-gray-900 focus:border-[5px] block'
        //                                     onFocus={(e) => (e.target.style.borderColor = '#4eb1f3')}
        //                                     placeholder={`Enter your ${field}`}
        //                                     required
        //                                 />
        //                             </div>
        //                         ))}
        //                         <button
        //                             className='w-full text-white rounded-lg p-[15px] font-medium cursor-pointer'
        //                             style={{ background: '#0D19A3' }}
        //                             onClick={handleClick}
        //                         >
        //                             Sign up
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
};

export default Register;