import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hookes/useFetch';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Hotels = () => {
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
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch('http://localhost:8000/hotels');

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleDelete = async (id) => {

    console.log("id here-->", id);
    console.log("just enter delete");
    try{
        console.log("enter to delete user");
        await axios.delete('http://localhost:8000/hotels');
        ToastSuccess(`Delete succefully !`);

    }catch(err){
        console.log(err);

    }
  };
  const testFunction = () =>{
    console.log("test herere")
  }

  return (
    <div className='flex w-full'>
        <Sidebar/>
        <div className='flex-[6]'>
            <Navbar/>
        <div className='p-5'>
                <ToastContainer />

                <div className='flex items-center justify-between gap-5 mb-4'>
                    <p className='text-3xl font-bold text-gray-500'>Add New Hotel</p>
                    <Link to='/users/new' className='text-xl font-bold rounded-md border-2 border-green-700 px-8 text-green-700 cursor-pointer'>
                    Add New
                    </Link>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error loading users</p>}
                <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white'>
                    <thead>
                        <tr className=''>
                        {/* <th className='py-2 px-4  border-b border-r text-[20px]' style={{color : '#6439ff'}}>ID</th> */}
                        <th className='py-2 px-4 border-b border-r text-[20px] ' style={{color : '#6439ff'}}>name</th>
                        <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>Type</th>
                        <th className='py-2 px-4 border-b  border-r text-[20px]' style={{color : '#6439ff'}}>Descriptions</th>
                        <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>City</th>
                        <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>Rooms</th>

                        <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {list.map((user) => (
                        <tr key={user._id}>
                            {/* <td className='py-2 px-[100px] max-w-[20px] border-b  border-r  text-[20px] font-bold text-gray-500'>{user._id}</td> */}
                            <td className='py-2 px-4 border-b border-r text-[20px]'>{user.name}</td>
                            <td className='py-2 px-4 border-b border-r text-[20px]'>{user.type}</td>
                            <td className='py-2 px-4 border-b border-r text-[20px]'>{user.desc}</td>
                            <td className='py-2 px-4 border-b border-r text-[20px]'>{user.city}</td>
                            <td className='py-2 px-4 border-b border-r text-[20px]'>{user.Rooms}</td>

                            <td className='py-2 px-4 border-b text-[20px]'>
                            <Link to='/' className='px-4 py-2 text-white cursor-text bg-blue-500 rounded-md'>
                                View
                            </Link>
                            <button onClick={()=>handleDelete(user._id)} className='px-4 py-2 ml-2 text-white bg-red-500 rounded-md cursor-pointer' style={{cursor : 'pointer'}}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
        </div>

    </div>
    
  );
};

export default Hotels;
