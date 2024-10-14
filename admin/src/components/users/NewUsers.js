import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios'


const NewUsers = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "upload");
    try {
    //   const uploadRes = await axios.post(
    //     "https://api.cloudinary.com/v1_1/lamadev/image/upload",
    //     data
    //   );

    //   const { url } = uploadRes.data;

      const newUser = {
        ...info,
      };
      await axios.post("https://booking-app-udqo.onrender.com/auth/register", newUser);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="w-full flex">
    <Sidebar />
    <div className="flex-[6]">
      <Navbar />
      <div className="p-[10px] m-[20px] flex shadow-custom">
        <h1 className='text-[20px] font-bold flex items-center justify-center w-[2000px]' style={{color : '#002D74'}}>Add new User</h1>
      </div>
      <div className='flex items-center justify-center gap-[200px]  p-[70px] shadow-custom'>
      <section class="bg-gray-100 max-h-screen flex box-border justify-center items-center">
                      <div class="bg-[#dfa674] rounded-2xl flex max-w-[6000px] p-5 items-center">
                          <div class="md:w-1/2 px-8">

                              <form action="" class="flex flex-col gap-4">
                                  {inputs.map((input) => (
                                    <div className="  w-full max-w-screen-lg sm:w-96" key={input.id}>

                                      <input className='p-[14px] mt-8 rounded-xl border w-[700px]'
                                        onChange={handleChange}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        id={input.id}
                                      />
                                    </div>
                                  ))}
                                  
                                  <button class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">New User</button>
                              </form>
                             
                          </div>
                          <div class="md:block hidden w-1/2">
                              <img class="rounded-2xl max-h-[1600px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="login form image"/>
                          </div>
                      </div>
              </section>
              
        

      </div>
     
    </div>

  </div>
  )
}

export default NewUsers
