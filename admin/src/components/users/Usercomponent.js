import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../hookes/useFetch';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserComponent = () => {
  const location = useLocation();

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
  const { data, loading, error } = useFetch('https://booking-app-udqo.onrender.com/users');

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleDelete = async (id) => {

    try{
        await axios.delete('https://booking-app-udqo.onrender.com/users');
        ToastSuccess(`Delete succefully !`);

    }catch(err){
        console.log(err);

    }
  };
  const testFunction = () =>{
  }

  return (
    <div className='w-full'>
        {/* <ToastContainer /> */}
        
      <div className='flex p-[20px] w-full items-center gap-[100px]'>
        <p className='text-3xl font-bold text-gray-500 cursor-pointer'>Add New User</p>
        <Link to='/Users/newUser' className='text-xl font-bold rounded-md border-2 border-green-700 px-8 text-green-700 cursor-pointer'>
          Add New
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading users</p>}
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr className=''>
              <th className='py-2 px-4  border-b border-r text-[20px]' style={{color : '#6439ff'}}>ID</th>
              <th className='py-2 px-4 border-b border-r text-[20px] ' style={{color : '#6439ff'}}>Username</th>
              <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>Email</th>
              <th className='py-2 px-4 border-b  border-r text-[20px]' style={{color : '#6439ff'}}>Country</th>
              <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>City</th>
              <th className='py-2 px-4 border-b border-r text-[20px]' style={{color : '#6439ff'}}>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {list.map((user) => (
              <tr key={user._id}>
                <td className='py-2 px-[100px] max-w-[20px] border-b  border-r  text-[20px] font-bold text-gray-500'>{user._id}</td>
                <td className='py-2 px-4 border-b border-r text-[20px]'>{user.username}</td>
                <td className='py-2 px-4 border-b border-r text-[20px]'>{user.email}</td>
                <td className='py-2 px-4 border-b border-r text-[20px]'>{user.country}</td>
                <td className='py-2 px-4 border-b border-r text-[20px]'>{user.city}</td>
                <td className='py-2 px-4 border-b text-[20px]'>
                  <Link onClick={()=> console.log("test")} to='/' className='px-4 py-2 text-white cursor-text bg-blue-500 rounded-md'>
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
  );
};

export default UserComponent;