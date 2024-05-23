import React from 'react';
import './Explore.css'
const Explore = () => {
  return (
    <div className='flex flex-col max-w-[1800px] gap-[20px]'>
      <h1 className='text-[40px] font-bold'>Explore Morocco</h1>
      <p className='text-[20px]'>These popular destinations have a lot to offer</p>
      <section className='hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto '>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/k.jpg" alt="Hotels" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Marakesh</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/casa.jpg" alt="Appartements" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Casablanca</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/ess.jpg" alt="Villas" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Essouira</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/ag.jpg" alt="Resorts" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Agadir</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/tang.jpg" alt="Cabins" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Tanger</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/kh.jpg" alt="Resorts" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Khouribga</h1>
          </div>
        </div>
        <div className='rounded-lg cursor-pointer overflow-hidden w-[600px] flex-shrink-0'>
          <img className='w-full h-[400px] object-cover' src="/rb.jpg" alt="Cabins" />
          <div className='cursor-pointer p-2'>
            <h1 className='text-[20px] font-bold'>Rabat</h1>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Explore;