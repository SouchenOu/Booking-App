import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch';
import TryConnect from '../../components/PropertyList/TryConnect';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);
  const [count, setCount] = useState(0); // Add a state to keep track of the count

  const {data, loading, error, reFetch} = useFetch(`http://localhost:8000/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
  
  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='flex flex-col items-center mt-[20px]'>
        <div className='w-full max-w-[2000px] flex gap-[50px]'>
          <div className='flex-[1] p-[50px] rounded-lg sticky' style={{ background: '#CC6D3D', maxHeight: '80vh', overflowY: 'auto' }}>
            <h1 className='text-2xl mb-[10px] font-bold' style={{ color: '#A3B4C8' }}>Search</h1>
            <div className=' flex justify-between'>
              <label className='text-xl font-bold'>Destination</label>
              <input className='p-[20px] rounded-lg border-solid border-[3px]  border-gray-300 h-[30px] ' type='text' placeholder={destination} />
            </div>
            <div className='flex flex-col gap-[5px] mb-[10px]'>
              <label className='text-xl font-bold'>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)} style={{ background: '#fff' }} className=' p-[20px] justify-center cursor-pointer border-none border-[3px] border-red-300'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange onChange={(item) => setDates([item.selection])} minDate={new Date()} ranges={dates} />}
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label className=''>Options</label>
              <div>
                <div className='flex justify-between mb-[10px]' style={{ color: '#A3B4C8' }}>
                  <span className='text-xl font-bold'>Min price <small>per night</small></span>
                  <input type='number' className='w-[60px] p-[4px]' onChange={e=>setMin(e.target.value)} />
                </div>
                <div className='flex justify-between mb-[10px]' style={{ color: '#A3B4C8' }}>
                  <span className='text-xl font-bold'>Max price <small>per night</small></span>
                  <input type='number' onChange={e=>setMax(e.target.value)} className='w-[60px] p-[4px]' />
                </div>
                <div className='flex justify-between mb-[10px]' style={{ color: '#A3B4C8' }}>
                  <span className='text-xl font-bold'>Adult</span>
                  <input type='number' min={1} placeholder={options.adult} className='w-[60px] p-[4px]' />
                </div>
                <div className='flex justify-between mb-[10px]' style={{ color: '#A3B4C8' }}>
                  <span className='text-xl font-bold'>Children</span>
                  <input type='number' min={0} placeholder={options.children} className='w-[60px] p-[4px]' />
                </div>
                <div className='flex justify-between mb-[10px]' style={{ color: '#A3B4C8' }}>
                  <span className='text-xl font-bold'>Room</span>
                  <input type='number' min={1} placeholder={options.room} className='w-[60px] p-[4px]' />
                </div>
              </div>
            </div>
            <button className='p-[10px] border-none text-xl font-bold w-full cursor-pointer' style={{ background: '#022E51', color: 'white' }} onClick={handleClick}>Search</button>
          </div>
          <div className='flex-[3]' style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            {
              loading ? ("loading..") : (
                <>
                  {data.map((elem, index) => (
                    <React.Fragment key={elem._id}>
                      <SearchItem elem={elem} />
                      {(index + 1) % 5 === 0 && (
                        <TryConnect/>
                      )}
                    </React.Fragment>
                  ))}
                </>
              )
            }
          </div>
        </div>
        <MailList />
        <div className='mt-[20px]'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default List;