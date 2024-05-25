import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../context/SearchContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Reserve.css'

const Reserve = ({setOpen, HotelId}) => {


  const {data, loading, error} = useFetch(`http://localhost:8000/hotels/room/${HotelId}`);
  const navigate = useNavigate();
  const [selectRoom, setSelectRoom] = useState([]);
  const {dates} = useContext(SearchContext);
  const handleSelect = (e) =>{
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectRoom(checked ? [...selectRoom, value] : selectRoom.filter((item) => item !== value))

  }

 

 
  const getDateInRange = (startDate, endDate) =>{
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let list = [];

    while(date <= end){
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

  }

  const allDates = getDateInRange(dates[0]?.startDate, dates[0]?.endDate);

  const handleClick = async () =>{
    try{
      await Promise.all(selectRoom.map((roomId) =>{
        const res =  axios.put(`http://localhost:8000/rooms/availability/${roomId}`, {dates : allDates});
        return (res.data)
      }))
      setOpen(false);
      navigate("/");

    }catch(err){

    }

  }

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  return (
    <div className='flex items-center justify-center h-full w-full  top-[0] left-[0] fixed' style={{ background: 'rgba(0, 0, 0, 0.418)'}}>
      <div className='bg-white p-[90px] relative'>
        <FontAwesomeIcon icon={faCircleXmark} size="2x" onClick={()=>setOpen(false)} className='absolute top-0 right-0 cursor-pointert p-[20px]'/>
        <span className='text-[50px] font-bold text-gray-500'>Reserve your room</span>
        <div className='overflow-y-auto custom-scrollbar' style={{ maxHeight: '60vh' }}>
            {
              data.map(item=>(
                <div className='flex items-center justify-center gap-[50px] p-[20px]'>
                  <div className='flex flex-col gap-[6px]'>
                    <div className='text-2xl font-bold' style={{color : '#104774'}}>
                      {item?.title}
                    </div>
                    <div className='text-xl font-bold   ' style={{color : "#B74803"}}>
                      {item?.desc}
                    </div>
                    <div className='text-xl font-bold'>
                      Max people : <b>{item?.MaxPoeple}</b>
                    </div>
                    <div className='text-xl font-bold ' style={{color : '#0a70c4'}}>
                      {item?.price}$
                    </div>

                  </div>
                  {item?.roomNumbers.map((elem)=>(
                    <div className=' w-[400px] flex items-center justify-center gap-[20px]]'>
                      <label className='text-[24px] font-[400px]'>{elem?.number}</label>
                      <input  className=" w-[50px] h-[30px] cursor-pointer" type="checkbox" value={elem?._id} onChange={handleSelect}  disabled={!isAvailable(elem)}/>
                    </div>
                  ))}
                </div>
              ))
            }

        </div>
        
        <button onClick={handleClick} className='border-none px-[20px] py-[10px] text-white font-bold rounded-lg cursor-pointer w-full mt-[20px]' style={{background: '#0D19A3'}}>Reserve Now</button>
      </div>
    </div>
  )
}

export default Reserve
