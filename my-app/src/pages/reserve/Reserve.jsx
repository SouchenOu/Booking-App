import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../context/SearchContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Reserve.css';

const Reserve = ({ setOpen, HotelId }) => {
  const { data, loading, error } = useFetch(`https://booking-app-udqo.onrender.com/hotels/room/${HotelId}`);
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value));
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map((roomId) => {
        const res = axios.put(`https://booking-app-udqo.onrender.com/rooms/availability/${roomId}`, { dates: allDates });
        return res.data;
      }));
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const isAvailable = (room) => {
    const isFound = room.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  return (
    <div className='flex items-center justify-center h-full w-full top-0 left-0 fixed' style={{ background: 'rgba(0, 0, 0, 0.418)' }}>
      <div className='bg-white p-[80px] relative flex flex-col justify-center gap-[40px]'>
        <FontAwesomeIcon icon={faCircleXmark} size="2x" onClick={() => setOpen(false)} className='absolute top-0 right-0 text-gray-400 cursor-pointer p-5' />
        <span className='text-2xl font-bold text-gray-500'>Reserve your room</span>
        <div className='overflow-y-auto custom-scrollbar' style={{ maxHeight: '60vh' }}>
          {data.map(room => (
            <div className='flex items-center  gap-[100px]' key={room._id}>
              <div className='flex flex-col items-center gap-[100px] p-[20px]'> 
                <div className='flex flex-col gap-[2px] '>
                  <div className='text-[20px] font-bold' style={{ color: '#104774' }}>
                    {room.title}
                  </div>
                  <div className='text-lg font-bold' style={{ color: "#B74803" }}>
                    {room.desc}
                  </div>
                  <div className='text-lg font-bold'>
                    Max people: <b>{room.MaxPoeple}</b>
                  </div>
                  <div className='text-lg font-bold' style={{ color: '#0a70c4' }}>
                    {room.price}$
                  </div>
                </div>
              </div>
             
              <div className='w-[20px] h-[20px]'>
                <input
                  className="w-[20px] h-[20px]"
                  type="checkbox"
                  value={room._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(room)}
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleClick} className='border-none px-5 py-2 text-white font-bold rounded-lg cursor-pointer w-full mt-5' style={{ background: '#0D19A3' }}>Reserve Now</button>
      </div>
    </div>
  );
};

export default Reserve;